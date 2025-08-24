import type { NextRequest } from 'next/server'

// Simple in-memory fallback cache; swap with Redis when available
const memory = new Map<string, { value: unknown; expiresAt: number }>()

async function getFromRedis(key: string): Promise<unknown | undefined> {
  try {
    const url = process.env.REDIS_URL
    if (!url) return memory.get(key)?.value
    // Dynamic import to avoid bundle bloat when not used
    const { createClient } = await import('redis')
    const client = createClient({ url })
    await client.connect()
    const raw = await client.get(key)
    await client.quit()
    return raw ? JSON.parse(raw) : undefined
  } catch {
    return memory.get(key)?.value
  }
}

async function setToRedis(key: string, value: unknown, ttlSec: number) {
  try {
    const url = process.env.REDIS_URL
    if (!url) {
      memory.set(key, { value, expiresAt: Date.now() + ttlSec * 1000 })
      return
    }
    const { createClient } = await import('redis')
    const client = createClient({ url })
    await client.connect()
    await client.set(key, JSON.stringify(value), { EX: ttlSec })
    await client.quit()
  } catch {
    memory.set(key, { value, expiresAt: Date.now() + ttlSec * 1000 })
  }
}

export async function GET(_req: NextRequest) {
  const key = 'top:links:countries'
  const cached = await getFromRedis(key)
  if (cached) {
    return new Response(JSON.stringify({ source: 'cache', data: cached }), {
      headers: { 'content-type': 'application/json', 'cache-control': 's-maxage=60, stale-while-revalidate=600' },
    })
  }

  const data = {
    countries: ['th', 'us', 'jp', 'de', 'fr'],
    links: [
      { id: 'partner-1', clicks: 128 },
      { id: 'partner-2', clicks: 95 },
    ],
  }

  await setToRedis(key, data, 300)
  return new Response(JSON.stringify({ source: 'origin', data }), {
    headers: { 'content-type': 'application/json', 'cache-control': 's-maxage=60, stale-while-revalidate=600' },
  })
}


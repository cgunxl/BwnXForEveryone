declare module 'redis' {
  export function createClient(config: { url: string }): {
    connect(): Promise<void>
    quit(): Promise<void>
    get(key: string): Promise<string | null>
    set(key: string, value: string, opts?: { EX?: number }): Promise<void>
  }
}
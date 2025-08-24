export const locales = ['th', 'en', 'ja', 'zh', 'es', 'pt', 'fr', 'de', 'ar'] as const

export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'th'

export function isLocale(value: string | undefined): value is Locale {
  if (!value) return false
  return (locales as readonly string[]).includes(value)
}

export function localizedPath(locale: Locale, ...parts: string[]) {
  const path = ['/', locale, ...parts].join('/')
  return path.replace(/\/+/, '/').replace(/(?<!:)\/+$/, '/')
}


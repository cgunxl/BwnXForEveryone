export type GAEvent =
  | { type: 'page_view'; locale?: string; country?: string; category?: string }
  | { type: 'click_out'; partner: string; link_id: string; country?: string }
  | { type: 'favorite_add'; content_id: string; status: 'added' | 'removed' }

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function track(event: GAEvent) {
  if (typeof window === 'undefined' || !window.gtag) return
  switch (event.type) {
    case 'page_view':
      window.gtag('event', 'page_view', {
        locale: event.locale,
        country: event.country,
        page_category: event.category,
      })
      break
    case 'click_out':
      window.gtag('event', 'click_out', {
        partner: event.partner,
        link_id: event.link_id,
        country: event.country,
      })
      break
    case 'favorite_add':
      window.gtag('event', 'favorite_add', {
        content_id: event.content_id,
        status: event.status,
      })
      break
    default:
      break
  }
}


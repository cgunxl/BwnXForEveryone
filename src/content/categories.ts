import type { Locale } from './locales'
import type { CategoryKey } from './registry'

export interface SubcategoryDef {
	key: string
	label: Partial<Record<Locale, string>>
	emoji?: string
	icon?: string // optional path under public/
}

export interface CategoryDef {
	key: CategoryKey
	label: Partial<Record<Locale, string>>
	emoji: string
	icon?: string // optional path under public/
	coverImage?: string // optional path under public/
	description?: Partial<Record<Locale, string>>
	subcategories: SubcategoryDef[]
}

// Helper to fallback label when locale missing
function tLabel<T extends Partial<Record<Locale, string>>>(labels: T, locale: Locale) {
	return labels[locale] || labels['th'] || labels['en'] || Object.values(labels)[0] || ''
}

export const categories: CategoryDef[] = [
	{
		key: 'apps',
		emoji: '📱',
		label: { th: 'Apps – Website', en: 'Apps – Website' },
		description: { th: 'แอปและเว็บไซต์ที่น่าสนใจ ใช้งานได้จริง', en: 'Useful apps and websites' },
		subcategories: [
			{ key: 'smart-travel-booking', label: { th: 'Smart Travel & Booking', en: 'Smart Travel & Booking' }, emoji: '✈️' },
			{ key: 'career-freelance-hub', label: { th: 'Career & Freelance Hub', en: 'Career & Freelance Hub' }, emoji: '💼' },
			{ key: 'ai-tools-finance-apps', label: { th: 'AI Tools & Finance Apps', en: 'AI Tools & Finance Apps' }, emoji: '🤖' },
			{ key: 'social-lifestyle-connect', label: { th: 'Social & Lifestyle Connect', en: 'Social & Lifestyle Connect' }, emoji: '📱' },
			{ key: 'ecommerce-shopping-apps', label: { th: 'E-commerce & Shopping Apps', en: 'E-commerce & Shopping Apps' }, emoji: '🛒' },
			{ key: 'safe-web-vpn', label: { th: 'Safe Web & VPN Solutions', en: 'Safe Web & VPN Solutions' }, emoji: '🔒' },
			{ key: 'affiliate-money-making-apps', label: { th: 'Affiliate & Money-Making Apps', en: 'Affiliate & Money-Making Apps' }, emoji: '💵' },
		],
	},
	{
		key: 'channel',
		emoji: '🎥',
		label: { th: 'Channel', en: 'Channel' },
		subcategories: [
			{ key: 'investment-trading', label: { th: 'Investment & Trading Channels', en: 'Investment & Trading Channels' }, emoji: '📊' },
			{ key: 'knowledge-deep-dive', label: { th: 'Knowledge & Deep-Dive Learning', en: 'Knowledge & Deep-Dive Learning' }, emoji: '📚' },
			{ key: 'podcasts-expert-talks', label: { th: 'Podcasts & Expert Talks', en: 'Podcasts & Expert Talks' }, emoji: '🎙️' },
			{ key: 'entertainment-lifestyle', label: { th: 'Entertainment & Lifestyle Media', en: 'Entertainment & Lifestyle Media' }, emoji: '🎬' },
			{ key: 'ecommerce-reviews', label: { th: 'E-commerce & Product Review', en: 'E-commerce & Product Review' }, emoji: '🛍️' },
			{ key: 'gaming-deals-tutorials', label: { th: 'Gaming Deals & Tutorials', en: 'Gaming Deals & Tutorials' }, emoji: '🎮' },
			{ key: 'affiliate-passive-income', label: { th: 'Affiliate & Passive Income Channels', en: 'Affiliate & Passive Income Channels' }, emoji: '🔗' },
		],
	},
	{
		key: 'fanpage',
		emoji: '📘',
		label: { th: 'Fanpage', en: 'Fanpage' },
		subcategories: [
			{ key: 'best-game-topup-deals', label: { th: 'Best Game Top-up Deals', en: 'Best Game Top-up Deals' }, emoji: '🎮' },
			{ key: 'robux-game-currency', label: { th: 'Robux & Game Currency Guides', en: 'Robux & Game Currency Guides' }, emoji: '💎' },
			{ key: 'product-recommendations', label: { th: 'Product Recommendation Pages', en: 'Product Recommendation Pages' }, emoji: '🛍️' },
			{ key: 'affiliate-earning-fanpages', label: { th: 'Affiliate & Earning Fanpages', en: 'Affiliate & Earning Fanpages' }, emoji: '💵' },
		],
	},
	{
		key: 'product',
		emoji: '🛍️',
		label: { th: 'Product', en: 'Product' },
		subcategories: [
			{ key: 'influencer-beauty', label: { th: 'Influencer Picks & Beauty', en: 'Influencer Picks & Beauty' }, emoji: '💄' },
			{ key: 'health-wellness', label: { th: 'Health & Wellness Products', en: 'Health & Wellness Products' }, emoji: '🍀' },
			{ key: 'smart-living-gadgets', label: { th: 'Smart Living & Gadgets', en: 'Smart Living & Gadgets' }, emoji: '⚡' },
			{ key: 'fashion-outfit', label: { th: 'Fashion & Outfit Ideas', en: 'Fashion & Outfit Ideas' }, emoji: '👕' },
			{ key: 'jewelry-luxury', label: { th: 'Jewelry & Luxury Items', en: 'Jewelry & Luxury Items' }, emoji: '💍' },
			{ key: 'lucky-draw-deals', label: { th: 'Lucky Draw & Deals', en: 'Lucky Draw & Deals' }, emoji: '🎁' },
			{ key: 'affiliate-marketplace', label: { th: 'Affiliate Products Marketplace', en: 'Affiliate Products Marketplace' }, emoji: '🛒' },
		],
	},
	{
		key: 'news',
		emoji: '📰',
		label: { th: 'News', en: 'News' },
		subcategories: [
			{ key: 'world-global', label: { th: 'World & Global News', en: 'World & Global News' }, emoji: '🌍' },
			{ key: 'thai-local', label: { th: 'Thai & Local News', en: 'Thai & Local News' }, emoji: '🏞️' },
			{ key: 'finance-market', label: { th: 'Finance & Market Insights', en: 'Finance & Market Insights' }, emoji: '💹' },
			{ key: 'sports-football', label: { th: 'Sports & Football Updates', en: 'Sports & Football Updates' }, emoji: '⚽' },
			{ key: 'health-wellness-news', label: { th: 'Health & Wellness News', en: 'Health & Wellness News' }, emoji: '🩺' },
			{ key: 'crypto-tech', label: { th: 'Crypto & Tech News', en: 'Crypto & Tech News' }, emoji: '₿' },
		],
	},
	{
		key: 'advice',
		emoji: '💡',
		label: { th: 'Advice', en: 'Advice' },
		subcategories: [
			{ key: 'money-tax', label: { th: 'Money & Tax Insights', en: 'Money & Tax Insights' }, emoji: '💰' },
			{ key: 'smart-living-home', label: { th: 'Smart Living & Home Design', en: 'Smart Living & Home Design' }, emoji: '🏡' },
			{ key: 'auto-lifestyle', label: { th: 'Auto & Lifestyle Tips', en: 'Auto & Lifestyle Tips' }, emoji: '🚗' },
			{ key: 'career-growth', label: { th: 'Career Growth & Skill Building', en: 'Career Growth & Skill Building' }, emoji: '📈' },
			{ key: 'affiliate-online-business', label: { th: 'Affiliate & Online Business Tips', en: 'Affiliate & Online Business Tips' }, emoji: '🔗' },
		],
	},
	{
		key: 'location',
		emoji: '📍',
		label: { th: 'Location', en: 'Location' },
		subcategories: [
			{ key: 'cafes-hot-spots', label: { th: 'Cafes & Hot Spots', en: 'Cafes & Hot Spots' }, emoji: '☕' },
			{ key: 'local-goods-otop', label: { th: 'Local Goods & OTOP Guide', en: 'Local Goods & OTOP Guide' }, emoji: '🛒' },
			{ key: 'travel-destinations', label: { th: 'Travel Destinations & Hidden Gems', en: 'Travel Destinations & Hidden Gems' }, emoji: '🏞️' },
		],
	},
	{
		key: 'make-money',
		emoji: '💸',
		label: { th: 'How to Make Money', en: 'How to Make Money' },
		subcategories: [
			{ key: 'online-business-ecommerce', label: { th: 'Online Business & E-commerce', en: 'Online Business & E-commerce' }, emoji: '🛍️' },
			{ key: 'affiliate-marketing', label: { th: 'Affiliate Marketing & Partnerships', en: 'Affiliate Marketing & Partnerships' }, emoji: '🔗' },
			{ key: 'crypto-stock-trading', label: { th: 'Crypto, Stock & Trading Income', en: 'Crypto, Stock & Trading Income' }, emoji: '₿' },
			{ key: 'side-hustles-freelance', label: { th: 'Side Hustles & Freelance Work', en: 'Side Hustles & Freelance Work' }, emoji: '💼' },
			{ key: 'passive-income-automation', label: { th: 'Passive Income & Automation', en: 'Passive Income & Automation' }, emoji: '🌱' },
			{ key: 'content-creation-monetization', label: { th: 'Content Creation & Monetization', en: 'Content Creation & Monetization' }, emoji: '🎥' },
		],
	},
	{
		key: 'movies',
		emoji: '📺',
		label: { th: 'Movies, Anime & Books', en: 'Movies, Anime & Books' },
		subcategories: [
			{ key: 'movies-streaming', label: { th: 'Movies & Streaming Platforms', en: 'Movies & Streaming Platforms' }, emoji: '🎬' },
			{ key: 'anime-manga', label: { th: 'Anime & Manga Hub', en: 'Anime & Manga Hub' }, emoji: '🎌' },
			{ key: 'cartoon-kids', label: { th: 'Cartoon & Kids Media', en: 'Cartoon & Kids Media' }, emoji: '📺' },
			{ key: 'novel-fiction', label: { th: 'Novel & Fiction Reviews', en: 'Novel & Fiction Reviews' }, emoji: '📖' },
			{ key: 'light-web-novels', label: { th: 'Light Novels & Web Novels', en: 'Light Novels & Web Novels' }, emoji: '🌌' },
			{ key: 'comics-graphic-novels', label: { th: 'Comics & Graphic Novels', en: 'Comics & Graphic Novels' }, emoji: '💥' },
			{ key: 'bookstore-ebook', label: { th: 'Bookstore & eBook Guides', en: 'Bookstore & eBook Guides' }, emoji: '📚' },
		],
	},
	{
		key: 'education',
		emoji: '📖',
		label: { th: 'Education & Online Learning', en: 'Education & Online Learning' },
		subcategories: [],
	},
	{
		key: 'food',
		emoji: '🍲',
		label: { th: 'Food & Cooking', en: 'Food & Cooking' },
		subcategories: [],
	},
	{
		key: 'real-estate',
		emoji: '🏠',
		label: { th: 'Real Estate & Property', en: 'Real Estate & Property' },
		subcategories: [],
	},
	{
		key: 'jobs-abroad',
		emoji: '🌏',
		label: { th: 'Jobs & Study Abroad', en: 'Jobs & Study Abroad' },
		subcategories: [],
	},
	{
		key: 'concerts',
		emoji: '🎶',
		label: { th: 'Concerts, Music & Events', en: 'Concerts, Music & Events' },
		subcategories: [
			{ key: 'concerts-festivals', label: { th: 'Concerts & Music Festivals', en: 'Concerts & Music Festivals' }, emoji: '🎤' },
			{ key: 'artist-band-updates', label: { th: 'Artist & Band Updates', en: 'Artist & Band Updates' }, emoji: '🎸' },
			{ key: 'cultural-lifestyle-events', label: { th: 'Cultural & Lifestyle Events', en: 'Cultural & Lifestyle Events' }, emoji: '🎭' },
		],
	},
	{
		key: 'finance-events',
		emoji: '💹',
		label: { th: 'Finance & Business Events', en: 'Finance & Business Events' },
		subcategories: [
			{ key: 'investment-trading-seminars', label: { th: 'Investment & Trading Seminars', en: 'Investment & Trading Seminars' }, emoji: '📊' },
			{ key: 'business-startup-events', label: { th: 'Business & Startup Events', en: 'Business & Startup Events' }, emoji: '🚀' },
			{ key: 'finance-expo-fairs', label: { th: 'Finance Expo & Money Fairs', en: 'Finance Expo & Money Fairs' }, emoji: '💰' },
		],
	},
]

export function getAllCategories(): CategoryDef[] {
	return categories
}

export function getCategoryByKey(key: CategoryKey): CategoryDef | undefined {
	return categories.find((c) => c.key === key)
}

export function getCategoryLabel(key: CategoryKey, locale: Locale): string {
	const cat = getCategoryByKey(key)
	if (!cat) return key
	return tLabel(cat.label, locale)
}

export function getSubcategoryLabel(key: string, parent: CategoryKey, locale: Locale): string {
	const cat = getCategoryByKey(parent)
	const sub = cat?.subcategories.find((s) => s.key === key)
	if (!sub) return key
	return tLabel(sub.label, locale)
}
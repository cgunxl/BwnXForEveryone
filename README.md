# BwnX Platform

เว็บแพลตฟอร์มที่สร้างด้วย Next.js พร้อมกับฟีเจอร์ SEO และ Google Analytics 4

## ฟีเจอร์หลัก

### 🚀 Next.js + SEO
- ใช้ Next.js App Router
- `<Link>` component สำหรับ SEO-friendly navigation
- `generateMetadata()` สำหรับ dynamic metadata
- `sitemap.ts` และ `robots.ts` สำหรับ SEO
- Google Bot friendly

### 📊 Google Analytics 4
- GA4 script ติดตั้งใน `layout.tsx`
- PageView tracking สำหรับ SPA navigation
- Click tracking ด้วย `<TrackedLink>` component
- Custom event tracking

### 🎨 UI/UX
- Background สีดำ
- ปุ่มเริ่มต้นสีดำมีกรอบใส
- ข้อความ "BwnX Platform" จากด้านซ้าย
- Animation และ hover effects
- Responsive design

## การติดตั้ง

1. Clone โปรเจค
```bash
git clone <repository-url>
cd bwnx-platform
```

2. ติดตั้ง dependencies
```bash
npm install
```

3. ตั้งค่า Environment Variables
```bash
cp .env.local.example .env.local
# แก้ไข NEXT_PUBLIC_GA_MEASUREMENT_ID ใน .env.local
```

4. รันโปรเจค
```bash
npm run dev
```

## การใช้งาน

### TrackedLink Component
ใช้สำหรับติดตามการคลิกลิงก์ใน GA4:

```tsx
import { TrackedLink } from '@/components/TrackedLink'

<TrackedLink 
  href="/dashboard" 
  eventName="start_button_click"
  className="btn-primary"
>
  เริ่มต้น
</TrackedLink>
```

### Google Analytics
- ตั้งค่า `NEXT_PUBLIC_GA_MEASUREMENT_ID` ใน `.env.local`
- GA4 จะติดตาม pageview และ custom events อัตโนมัติ

## โครงสร้างโปรเจค

```
src/
├── app/
│   ├── layout.tsx          # Root layout พร้อม GA4
│   ├── page.tsx            # หน้าหลัก
│   ├── dashboard/          # หน้าดาชบอร์ด
│   ├── robots.ts           # SEO robots
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── GoogleAnalytics.tsx # GA4 script
│   ├── TrackedLink.tsx     # Link with tracking
│   └── PageViewTracker.tsx # Pageview tracking
└── lib/
    └── metadata.ts         # Metadata utilities
```

## การปรับแต่ง

### สีและธีม
แก้ไขใน `src/app/globals.css` และ Tailwind config

### GA4 Events
เพิ่ม custom events ใน `TrackedLink` component

### SEO
ปรับแต่ง metadata ใน `src/lib/metadata.ts`

## License

MIT

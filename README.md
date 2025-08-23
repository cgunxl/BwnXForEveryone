# BwnX Platform

แพลตฟอร์ม BwnX - โซลูชันนวัตกรรมสำหรับธุรกิจ

## ฟีเจอร์หลัก

### หน้าแรก (Home Page)
- **แท็บด้านบนสุด**: มีเส้นขีดเพื่อแสดงว่าเป็นแท็บ
- **ปุ่มเมนู**: ปุ่มสามขีดด้านซ้ายบน (สีดำโปร่งใส กรอบสีดำ)
- **สไลด์เมนู**: เลื่อนลงมา 1/4 ของหน้าจอ พร้อมข้อความ "กำลังพัฒนา"
- **การติดตาม**: ใช้ GA4 สำหรับติดตาม pageview และการคลิก

### การติดตาม GA4
- ติดตั้ง GA4 script ใน layout.tsx
- เพิ่ม provider นับ pageview SPA ทุกครั้งที่เปลี่ยนเส้นทาง
- สร้าง `<TrackedLink>` สำหรับนับคลิกปุ่ม/ลิงก์ทุกตัว

## การติดตั้งและรัน

```bash
# ติดตั้ง dependencies
npm install

# รันในโหมด development
npm run dev

# Build สำหรับ production
npm run build

# รันในโหมด production
npm start
```

## โครงสร้างโปรเจค

```
src/
├── app/
│   ├── layout.tsx          # Layout หลักพร้อม GA4
│   ├── page.tsx            # หน้าแรก
│   └── globals.css         # สไตล์หลัก
├── components/
│   ├── Header.tsx          # Header พร้อมแท็บและปุ่มเมนู
│   ├── SlideMenu.tsx       # สไลด์เมนู
│   ├── GoogleAnalytics.tsx # GA4 script
│   ├── PageViewTracker.tsx # ติดตาม pageview
│   └── TrackedLink.tsx     # ลิงก์พร้อมการติดตาม
└── lib/
    └── metadata.ts         # Metadata สำหรับ SEO
```

## การใช้งาน

1. **เปิดเมนู**: คลิกปุ่มสามขีดด้านซ้ายบน
2. **ปิดเมนู**: คลิกปุ่ม X หรือคลิกนอกเมนู
3. **นำทาง**: ใช้ลิงก์ในเมนูเพื่อไปยังหน้าต่างๆ

## เทคโนโลยีที่ใช้

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Google Analytics 4** - การติดตามผู้ใช้
- **React 19** - UI library

## สถานะการพัฒนา

🟡 **กำลังพัฒนา** - ระบบกำลังอยู่ในขั้นตอนการพัฒนา กรุณารอสักครู่

## การสนับสนุน

หากมีคำถามหรือปัญหาการใช้งาน กรุณาติดต่อทีม BwnX

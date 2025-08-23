# GA4 Setup Guide สำหรับ BwnX Platform

## การติดตั้ง Google Analytics 4

### 1. สร้าง GA4 Property
1. ไปที่ [Google Analytics](https://analytics.google.com/)
2. สร้าง Property ใหม่
3. เลือก "Web" platform
4. ตั้งชื่อ Property และ URL

### 2. รับ Measurement ID
1. หลังจากสร้าง Property แล้ว จะได้ Measurement ID (รูปแบบ: G-XXXXXXXXXX)
2. คัดลอก Measurement ID นี้

### 3. ตั้งค่า Environment Variables
1. แก้ไขไฟล์ `.env.local`
2. เปลี่ยน `G-XXXXXXXXXX` เป็น Measurement ID จริงของคุณ

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. ตรวจสอบการติดตั้ง
1. รันโปรเจค: `npm run dev`
2. เปิด Developer Tools > Network tab
3. ดูว่ามีการเรียก `gtag` หรือไม่
4. ตรวจสอบใน GA4 Real-time reports

## Features ที่ติดตั้งแล้ว

### ✅ Page View Tracking
- ติดตามการเปลี่ยนหน้าใน SPA
- Track page category อัตโนมัติ
- Session management

### ✅ Click Tracking
- Track การคลิกปุ่มและลิงก์
- Custom event parameters
- User engagement tracking

### ✅ Enhanced Analytics
- User session tracking
- Page view count
- Custom dimensions
- Enhanced ecommerce support

## การทดสอบ

### 1. Page View Events
- เปิดหน้าเว็บ
- เปลี่ยนหน้า (ถ้ามี)
- ตรวจสอบใน GA4 Real-time

### 2. Click Events
- คลิกปุ่ม "เริ่มต้น"
- คลิกเมนู
- ตรวจสอบ event ใน GA4

### 3. Custom Events
- ดู custom parameters
- ตรวจสอบ user properties
- Session tracking

## Troubleshooting

### GA4 ไม่ทำงาน
1. ตรวจสอบ Measurement ID ใน .env.local
2. ตรวจสอบ Network tab ใน Developer Tools
3. ดู Console errors

### Events ไม่ส่ง
1. ตรวจสอบ gtag function
2. ดู dataLayer ใน Console
3. ตรวจสอบ GA4 Debug mode

## การปรับแต่งเพิ่มเติม

### Custom Events
เพิ่ม custom events ใน components:

```typescript
window.gtag('event', 'custom_event', {
  event_category: 'custom',
  event_label: 'label',
  value: 1
})
```

### Enhanced Conversions
เปิดใช้งานใน GA4:
1. ไปที่ GA4 Admin
2. Enhanced conversions
3. เปิดใช้งานสำหรับ website

## Support
หากมีปัญหาการติดตั้ง ติดต่อทีมพัฒนา BwnX Platform
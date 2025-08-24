'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Configure GA4 with enhanced settings
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            transport_type: 'beacon',
            // Enhanced ecommerce tracking
            allow_enhanced_conversions: true,
            // Custom dimensions for better tracking
            custom_map: {
              'custom_parameter_1': 'user_type',
              'custom_parameter_2': 'page_category'
            }
          });
          
          // Track user engagement
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_category: 'main',
            transport_type: 'beacon'
          });
          
          // Track user interaction events
          document.addEventListener('click', function(e) {
            const target = e.target;
            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
              gtag('event', 'click', {
                event_category: 'engagement',
                event_label: target.textContent || target.innerText || 'unknown',
                value: 1,
                transport_type: 'beacon'
              });
            }
          });

          // GA4 recommended session_start
          gtag('event', 'session_start', {
            engagement_time_msec: 1
          });
        `}
      </Script>
    </>
  )
}
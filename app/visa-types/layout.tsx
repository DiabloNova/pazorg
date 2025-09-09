import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "دریافت انواع ویزای روسیه | ویزای الکترونیکی، توریستی و تجاری - پازیریک",
  description:
    "راهنمای کامل دریافت ویزای روسیه. اخذ ویزای الکترونیکی، توریستی و تجاری روسیه با بهترین قیمت. تحصیل در روسیه، صادرات، واردات و خدمات بازرگانی.",
  keywords:
    "ویزای روسیه، ویزای الکترونیکی روسیه، ویزای توریستی روسیه، ویزای تجاری روسیه، تحصیل در روسیه، بانک روسیه، صادرات به روسیه، چوب روسی، واردات از روسیه، بازرگانی روسیه، بازاریابی، روبل، ارسال حواله، نمایشگاه روسیه، نمایندگی شرکت، زنجیره تأمین، حمل و نقل، ترانزیت، کارگو",
  openGraph: {
    title: "دریافت انواع ویزای روسیه | خدمات تخصصی پازیریک",
    description: "راهنمای کامل ویزای روسیه، تحصیل، صادرات، واردات و خدمات بازرگانی تخصصی",
    url: "https://pazirik.com/visa-types",
    images: [
      {
        url: "/russian-visa-documents-and-business-scene.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات ویزای روسیه پازیریک",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دریافت انواع ویزای روسیه - پازیریک",
    description: "راهنمای کامل ویزای روسیه، تحصیل، صادرات و واردات",
    images: ["/russian-visa-documents-and-business-scene.jpg"],
  },
  alternates: {
    canonical: "https://pazirik.com/visa-types",
  },
}

export default function VisaTypesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "دریافت انواع ویزای روسیه",
            description: "راهنمای کامل دریافت ویزای روسیه شامل ویزای الکترونیکی، توریستی و تجاری",
            url: "https://pazirik.com/visa-types",
            mainEntity: {
              "@type": "Service",
              name: "خدمات ویزای روسیه",
              description: "ارائه خدمات کامل دریافت ویزای روسیه، تحصیل و بازرگانی",
              provider: {
                "@type": "Organization",
                name: "شرکت راشا گستر پازیریک",
                url: "https://pazirik.com",
              },
              serviceType: ["ویزای الکترونیکی روسیه", "ویزای توریستی روسیه", "ویزای تجاری روسیه"],
              areaServed: "ایران",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "انواع ویزای روسیه",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "ویزای الکترونیکی روسیه",
                    description: "سریع‌ترین روش دریافت ویزای روسیه در ۴ روز کاری",
                    priceRange: "$50-$100",
                  },
                  {
                    "@type": "Offer",
                    name: "ویزای توریستی روسیه",
                    description: "برای سفرهای تفریحی و گردشگری به روسیه",
                    priceRange: "$120-$350",
                  },
                  {
                    "@type": "Offer",
                    name: "ویزای تجاری روسیه",
                    description: "برای سفرهای کاری و تجاری به روسیه",
                    priceRange: "$175-$470",
                  },
                ],
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "خانه",
                  item: "https://pazirik.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "انواع ویزای روسیه",
                  item: "https://pazirik.com/visa-types",
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  )
}

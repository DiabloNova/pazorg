import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from "@/components/providers"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "پازیریک - پل ارتباطی شما با روسیه | خدمات ویزا، تجارت و آموزش",
  description:
    "پازیریک ارائه‌دهنده خدمات تخصصی ویزای روسیه، تجارت، آموزش و گردشگری. اخذ ویزای الکترونیکی، توریستی و تجاری روسیه با بهترین قیمت و سریع‌ترین زمان.",
  keywords:
    "روسیه، تحصیل در روسیه، بانک روسیه، صادرات به روسیه، چوب روسی، واردات از روسیه، بازرگانی روسیه، بازاریابی، روبل، ارسال حواله، نمایشگاه روسیه، نمایندگی شرکت، زنجیره تأمین، حمل و نقل، ترانزیت، کارگو، ویزای روسیه، ویزای الکترونیکی روسیه، ویزای توریستی روسیه، ویزای تجاری روسیه، تجارت با روسیه، پازیریک",
  authors: [{ name: "پازیریک" }],
  creator: "پازیریک",
  publisher: "پازیریک",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pazirik.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/fa",
      "en-US": "/en",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title: "پازیریک - پل ارتباطی شما با روسیه",
    description: "خدمات تخصصی ویزای روسیه، تجارت، آموزش و گردشگری",
    url: "https://pazirik.com",
    siteName: "پازیریک",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "پازیریک - خدمات روسیه",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "پازیریک - پل ارتباطی شما با روسیه",
    description: "خدمات تخصصی ویزای روسیه، تجارت، آموزش و گردشگری",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "Next.js",
  applicationName: "پازیریک",
  referrer: "origin-when-cross-origin",
  category: "business",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "شرکت راشا گستر پازیریک",
              alternateName: "پازیریک",
              url: "https://pazirik.com",
              logo: "https://pazirik.com/logo.png",
              description: "خدمات تخصصی ویزای روسیه، تجارت، آموزش، صادرات، واردات، حمل و نقل و گردشگری",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IR",
                addressLocality: "تهران",
              },
              sameAs: ["https://instagram.com/pazirik", "https://telegram.me/pazirik"],
              serviceArea: {
                "@type": "Country",
                name: "ایران",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات پازیریک",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "ویزای روسیه",
                      description: "اخذ انواع ویزای روسیه شامل الکترونیکی، توریستی و تجاری",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "تجارت با روسیه",
                      description: "خدمات صادرات، واردات و بازرگانی با روسیه",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "حمل و نقل",
                      description: "خدمات حمل و نقل، ترانزیت و کارگو",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body
        className={`font-sans ${inter.variable} ${roboto.variable} bg-background text-foreground transition-colors duration-300`}
      >
        <Suspense fallback={null}>
          <Providers>{children}</Providers>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}

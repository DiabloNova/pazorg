import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "@/components/providers"
import { Suspense } from "react"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pazirik - Your Bridge to Russia",
  description: "Specialized commercial, educational and tourism services for Iran-Russia relations",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${vazirmatn.variable} bg-background text-foreground transition-colors duration-300`}
      >
        <Suspense fallback={null}>
          <Providers>{children}</Providers>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

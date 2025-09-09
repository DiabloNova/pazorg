"use client"

import * as React from "react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

export default function WelcomePopup() {
  const [open, setOpen] = React.useState(true)
  const { language } = useLanguage()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-card border rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-fade-in animated-gradient-bg">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Image
              src="/logo.png"
              alt="پازیریک"
              width={80}
              height={80}
              className="w-full h-full object-contain optimized-image"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 font-iran-kharazmi">
            {getTranslation(language, "welcomeTitle")}
          </h2>
        </div>

        <p className="text-gray-200 text-center mb-8 leading-relaxed font-iran-kharazmi">
          {getTranslation(language, "welcomeMessage")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => setOpen(false)}
            className="flex-1 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-iran-kharazmi"
          >
            {getTranslation(language, "joinCommunity")}
          </Button>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="flex-1 font-iran-kharazmi text-white border-white/30 hover:bg-white/10 hover:text-white"
          >
            {language === "fa" ? "بعداً" : language === "ru" ? "Позже" : "Later"}
          </Button>
        </div>
      </div>
    </div>
  )
}

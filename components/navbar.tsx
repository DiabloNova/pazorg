"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ServicesFlyout } from "./services-flyout"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/90 via-background/80 to-background/90 backdrop-blur-md border-b border-border animated-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <Image
                src="/logo.png"
                alt="پازیریک"
                width={40}
                height={40}
                className="w-10 h-10 optimized-image"
                priority
              />
              <h1 className="text-2xl font-bold text-primary bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent font-iran-kharazmi">
                پازیریک
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">
                {getTranslation(language, "home")}
              </a>
              <ServicesFlyout />
              <a
                href="/about"
                className="text-muted-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium"
              >
                {getTranslation(language, "about")}
              </a>
              <a
                href="/contact"
                className="text-muted-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium"
              >
                {getTranslation(language, "contact")}
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              {getTranslation(language, "getStarted")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-background/95 to-background/90 border-t border-border backdrop-blur-sm">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-accent transition-colors"
              >
                {getTranslation(language, "home")}
              </a>
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-foreground">
                  {getTranslation(language, "services")}
                </div>
                <div className="pl-6 space-y-1">
                  <a
                    href="/russian-visa"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "russianVisa")}
                  </a>
                  <a
                    href="/russia-visa"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "comprehensiveVisaGuide")}
                  </a>
                  <a
                    href="/visa-types"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "visaTypes")}
                  </a>
                  <a
                    href="/sending-rubles"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "sendingRubles")}
                  </a>
                  <a
                    href="/study-in-russia"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "studyInRussia")}
                  </a>
                  <a
                    href="/export-to-russia"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "exportToRussia")}
                  </a>
                  <a
                    href="/import-from-russia"
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-accent font-iran-kharazmi"
                  >
                    {getTranslation(language, "importFromRussia")}
                  </a>
                </div>
              </div>
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent transition-colors"
              >
                {getTranslation(language, "about")}
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent transition-colors"
              >
                {getTranslation(language, "contact")}
              </a>
              <div className="pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white transition-all duration-300"
                  onClick={() => (window.location.href = "/contact")}
                >
                  {getTranslation(language, "getStarted")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

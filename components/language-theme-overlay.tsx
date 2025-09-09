"use client"

import { useState } from "react"
import { Globe, Sun, Moon } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { languages, type Language } from "@/lib/i18n"

export function LanguageThemeOverlay() {
  const [showLanguages, setShowLanguages] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Select Language"
        >
          <Globe className="w-5 h-5" />
        </button>

        {showLanguages && (
          <div className="absolute bottom-14 left-0 bg-card border rounded-lg shadow-lg p-2 min-w-32 animate-fade-in">
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code as Language)
                  setShowLanguages(false)
                }}
                className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-muted transition-colors ${
                  language === code ? "bg-secondary text-white" : ""
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>
    </div>
  )
}

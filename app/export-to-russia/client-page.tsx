"use client"

import { Navbar } from "@/components/navbar"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

function ExportContent() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden rounded-3xl">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/export-business-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/60"></div>
          <div className="relative py-24 px-8 text-white">
            <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("exportToRussiaTitle")}
            </h1>
            <p
              className={`text-xl max-w-2xl mx-auto animate-fade-in-delay ${language === "fa" ? "font-vazirmatn" : ""}`}
            >
              {t("exportToRussiaSubtitle")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
            <h3 className={`text-xl font-semibold mb-4 ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("exportProducts")}
            </h3>
            <ul className={`space-y-2 text-sm ${language === "fa" ? "font-vazirmatn" : ""}`}>
              <li>• {t("agriculturalProducts")}</li>
              <li>• {t("industrialGoods")}</li>
              <li>• {t("textileProducts")}</li>
              <li>• {t("foodProducts")}</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
            <h3 className={`text-xl font-semibold mb-4 ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("exportProcedures")}
            </h3>
            <ul className={`space-y-2 text-sm ${language === "fa" ? "font-vazirmatn" : ""}`}>
              <li>• {t("customsDocuments")}</li>
              <li>• {t("qualityCertificates")}</li>
              <li>• {t("shippingArrangements")}</li>
              <li>• {t("insuranceServices")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ExportToRussiaClientPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 -z-10">
        <div className="flag-animation"></div>
      </div>

      <Navbar />
      <div className="pt-16">
        <ExportContent />
      </div>
      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

"use client"

import { Navbar } from "@/components/navbar"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export default function ImportFromRussiaClientPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* <CHANGE> Added animated flag background */}
      <div className="fixed inset-0 -z-10">
        <div className="flag-animation"></div>
      </div>

      <Navbar />
      <div className="pt-16">
        <ImportContent />
      </div>
      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

function ImportContent() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* <CHANGE> Added video background hero section */}
        <div className="text-center mb-16 relative overflow-hidden rounded-3xl">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/import-logistics-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-blue-900/60"></div>
          <div className="relative py-24 px-8 text-white">
            <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("importFromRussiaTitle")}
            </h1>
            <p
              className={`text-xl max-w-2xl mx-auto animate-fade-in-delay ${language === "fa" ? "font-vazirmatn" : ""}`}
            >
              {t("importFromRussiaSubtitle")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className={`text-lg font-semibold mb-2 ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("energyProducts")}
            </h3>
            <p className={`text-sm text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
              نفت، گاز و راه‌حل‌های انرژی تجدیدپذیر
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className={`text-lg font-semibold mb-2 ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("rawMaterials")}
            </h3>
            <p className={`text-sm text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
              فلزات، مواد شیمیایی و قطعات تولیدی
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className={`text-lg font-semibold mb-2 ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("machinery")}
            </h3>
            <p className={`text-sm text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
              غلات، کودها و محصولات غذایی
            </p>
          </div>
        </div>

        <div className="bg-secondary/10 p-8 rounded-lg mb-8">
          <h3 className={`text-2xl font-semibold mb-6 ${language === "fa" ? "font-vazirmatn" : ""}`}>
            {t("importServices")}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className={`font-semibold mb-4 ${language === "fa" ? "font-vazirmatn" : ""}`}>
                {t("supplierVerification")}
              </h4>
              <ul className={`space-y-2 text-sm text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
                <li>• تأمین‌کنندگان تأیید شده روسی</li>
                <li>• برنامه‌های تضمین کیفیت</li>
                <li>• مذاکرات قیمت رقابتی</li>
                <li>• توسعه مشارکت بلندمدت</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-4 ${language === "fa" ? "font-vazirmatn" : ""}`}>
                {t("logisticsSupport")}
              </h4>
              <ul className={`space-y-2 text-sm text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
                <li>• حمل‌ونقل چندوجهی</li>
                <li>• ترخیص گمرکی</li>
                <li>• راه‌حل‌های انبارداری</li>
                <li>• پیگیری لحظه‌ای محموله</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Navbar } from "@/components/navbar"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

function SendingRublesContent() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden rounded-3xl">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/money-transfer-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/60"></div>
          <div className="relative py-24 px-8 text-white">
            <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("sendingRublesTitle")}
            </h1>
            <p
              className={`text-xl max-w-2xl mx-auto animate-fade-in-delay ${language === "fa" ? "font-vazirmatn" : ""}`}
            >
              {t("sendingRublesSubtitle")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card p-8 rounded-xl border text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-secondary mb-2 animate-pulse">
              {language === "fa"
                ? t("instantTransferFa")
                : language === "ru"
                  ? t("instantTransferRu")
                  : t("instantTransferEn")}
            </div>
            <div className={`text-sm text-muted-foreground font-medium ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("instantTransfer")}
            </div>
          </div>
          <div className="bg-card p-8 rounded-xl border text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-secondary mb-2 animate-pulse">0.5%</div>
            <div className={`text-sm text-muted-foreground font-medium ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {t("competitiveRates")}
            </div>
          </div>
          <div className="bg-card p-8 rounded-xl border text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-secondary mb-2 animate-pulse">24/7</div>
            <div className={`text-sm text-muted-foreground font-medium ${language === "fa" ? "font-vazirmatn" : ""}`}>
              {language === "fa"
                ? t("customerSupportFa")
                : language === "ru"
                  ? t("customerSupportRu")
                  : t("customerSupportEn")}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-12 rounded-2xl mb-12 border">
          <h3 className={`text-3xl font-bold mb-8 text-center ${language === "fa" ? "font-vazirmatn" : ""}`}>
            {t("transferMethods")}
          </h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="flex-1">
                <h4 className={`text-xl font-semibold mb-3 ${language === "fa" ? "font-vazirmatn" : ""}`}>
                  {t("bankTransfer")}
                </h4>
                <p className={`text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
                  {language === "fa"
                    ? t("bankTransferFa")
                    : language === "ru"
                      ? t("bankTransferRu")
                      : t("bankTransferEn")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="flex-1">
                <h4 className={`text-xl font-semibold mb-3 ${language === "fa" ? "font-vazirmatn" : ""}`}>
                  {t("digitalWallet")}
                </h4>
                <p className={`text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
                  {language === "fa"
                    ? t("digitalWalletFa")
                    : language === "ru"
                      ? t("digitalWalletRu")
                      : t("digitalWalletEn")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="flex-1">
                <h4 className={`text-xl font-semibold mb-3 ${language === "fa" ? "font-vazirmatn" : ""}`}>
                  {language === "fa"
                    ? t("corporateSolutionsFa")
                    : language === "ru"
                      ? t("corporateSolutionsRu")
                      : t("corporateSolutionsEn")}
                </h4>
                <p className={`text-muted-foreground ${language === "fa" ? "font-vazirmatn" : ""}`}>
                  {language === "fa"
                    ? t("bulkTransfersFa")
                    : language === "ru"
                      ? t("bulkTransfersRu")
                      : t("bulkTransfersEn")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SendingRublesClientPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 -z-10">
        <div className="flag-animation"></div>
      </div>

      <Navbar />
      <div className="pt-16">
        <SendingRublesContent />
      </div>
      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export default function RussianVisaPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen animated-flag-bg">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl -z-10"></div>
              <div className="py-16 px-8">
                <h1
                  className={`text-5xl font-bold text-foreground mb-6 animate-fade-in ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                >
                  {getTranslation(language, "russianVisaTitle")}
                </h1>
                <p
                  className={`text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                >
                  {getTranslation(language, "russianVisaSubtitle")}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className={`text-3xl font-bold mb-8 text-center ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                {getTranslation(language, "visaTypes")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">🛂</div>
                  <h3
                    className={`text-2xl font-semibold mb-4 text-secondary ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                  >
                    {getTranslation(language, "touristVisa")}
                  </h3>
                  <p className={`text-muted-foreground mb-6 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {language === "fa"
                      ? "مناسب برای سفرهای تفریحی و بازدیدهای کوتاه‌مدت از روسیه"
                      : language === "ru"
                        ? "Идеально подходит для туристических поездок и краткосрочных визитов в Россию"
                        : "Perfect for leisure travel and short-term visits to Russia"}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className={`text-sm ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {language === "fa"
                          ? "اعتبار تا ۳۰ روز"
                          : language === "ru"
                            ? "Действительна до 30 дней"
                            : "Valid for up to 30 days"}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className={`text-sm ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {language === "fa"
                          ? "گزینه‌های تک یا چند ورودی"
                          : language === "ru"
                            ? "Однократная или многократная виза"
                            : "Single or multiple entry options"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">💼</div>
                  <h3
                    className={`text-2xl font-semibold mb-4 text-secondary ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                  >
                    {getTranslation(language, "businessVisa")}
                  </h3>
                  <p className={`text-muted-foreground mb-6 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {language === "fa"
                      ? "طراحی‌شده برای جلسات کاری، کنفرانس‌ها و فعالیت‌های تجاری"
                      : language === "ru"
                        ? "Предназначена для деловых встреч, конференций и торговой деятельности"
                        : "Designed for business meetings, conferences, and trade activities"}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className={`text-sm ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {language === "fa"
                          ? "اعتبار تا ۱ سال"
                          : language === "ru"
                            ? "Действительна до 1 года"
                            : "Valid for up to 1 year"}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className={`text-sm ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {language === "fa"
                          ? "چندین ورود مجاز"
                          : language === "ru"
                            ? "Многократный въезд разрешен"
                            : "Multiple entry permitted"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className={`text-3xl font-bold mb-8 text-center ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                {getTranslation(language, "requiredDocuments")}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">📄</div>
                  <h4 className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "passportCopy")}
                  </h4>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">📝</div>
                  <h4 className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "applicationForm")}
                  </h4>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">📸</div>
                  <h4 className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "photos")}
                  </h4>
                </div>
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">✉️</div>
                  <h4 className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "invitation")}
                  </h4>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-12 rounded-2xl mb-12 border backdrop-blur-sm">
              <h3 className={`text-3xl font-bold mb-8 text-center ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                {getTranslation(language, "processSteps")}
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <div className="text-2xl">💬</div>
                  </div>
                  <h4 className={`font-semibold mb-3 text-lg ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "consultation")}
                  </h4>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <div className="text-2xl">📋</div>
                  </div>
                  <h4 className={`font-semibold mb-3 text-lg ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "documentPrep")}
                  </h4>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <div className="text-2xl">📤</div>
                  </div>
                  <h4 className={`font-semibold mb-3 text-lg ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "submission")}
                  </h4>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <div className="text-2xl">📊</div>
                  </div>
                  <h4 className={`font-semibold mb-3 text-lg ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "tracking")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

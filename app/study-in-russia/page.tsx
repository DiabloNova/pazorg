"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { AcademicCapIcon, DocumentTextIcon, GlobeAltIcon, HomeIcon } from "@heroicons/react/24/outline"

export default function StudyInRussiaPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className={`min-h-screen bg-background relative overflow-hidden ${language === "fa" ? "font-vazirmatn" : ""}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-white/30 to-blue-50/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-float-slow absolute top-10 left-10 w-32 h-32 bg-red-200/10 rounded-full blur-xl"></div>
          <div className="animate-float-medium absolute top-1/3 right-20 w-48 h-48 bg-blue-200/10 rounded-full blur-xl"></div>
          <div className="animate-float-fast absolute bottom-20 left-1/4 w-40 h-40 bg-white/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source src="/videos/study-education-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">{t("studyInRussiaTitle")}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            {t("studyInRussiaSubtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Universities Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t("universities")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <AcademicCapIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("topUniversities")}</h3>
                <p className="text-muted-foreground text-sm">
                  {language === "fa"
                    ? "دانشگاه‌های معتبر و برتر روسیه با رتبه‌بندی بین‌المللی"
                    : language === "ru"
                      ? "Престижные и ведущие университеты России с международным рейтингом"
                      : "Prestigious and top-ranked Russian universities with international recognition"}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <DocumentTextIcon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("medicalUniversities")}</h3>
                <p className="text-muted-foreground text-sm">
                  {language === "fa"
                    ? "دانشکده‌های پزشکی معتبر با مدرک بین‌المللی"
                    : language === "ru"
                      ? "Престижные медицинские факультеты с международными дипломами"
                      : "Prestigious medical schools with international degrees"}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <GlobeAltIcon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("engineeringUniversities")}</h3>
                <p className="text-muted-foreground text-sm">
                  {language === "fa"
                    ? "دانشکده‌های فنی و مهندسی پیشرفته"
                    : language === "ru"
                      ? "Передовые технические и инженерные факультеты"
                      : "Advanced technical and engineering faculties"}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <HomeIcon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("languagePrograms")}</h3>
                <p className="text-muted-foreground text-sm">
                  {language === "fa"
                    ? "دوره‌های آمادگی زبان روسی برای دانشجویان"
                    : language === "ru"
                      ? "Подготовительные курсы русского языка для студентов"
                      : "Russian language preparatory courses for students"}
                </p>
              </div>
            </div>
          </section>

          {/* Admission Process Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t("admissionProcess")}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">{t("applicationGuidance")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fa"
                      ? "راهنمایی کامل برای انتخاب رشته و دانشگاه"
                      : language === "ru"
                        ? "Полное руководство по выбору специальности и университета"
                        : "Complete guidance for choosing major and university"}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">{t("documentTranslation")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fa"
                      ? "ترجمه رسمی و تأیید مدارک تحصیلی"
                      : language === "ru"
                        ? "Официальный перевод и подтверждение образовательных документов"
                        : "Official translation and verification of educational documents"}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">{t("visaSupport")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fa"
                      ? "پشتیبانی کامل برای اخذ ویزای تحصیلی"
                      : language === "ru"
                        ? "Полная поддержка для получения студенческой визы"
                        : "Complete support for obtaining student visa"}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">{t("accommodationHelp")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "fa"
                      ? "کمک برای یافتن محل اقامت مناسب"
                      : language === "ru"
                        ? "Помощь в поиске подходящего жилья"
                        : "Help finding suitable accommodation"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Study Fields */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {language === "fa"
                ? "رشته‌های محبوب تحصیلی"
                : language === "ru"
                  ? "Популярные области обучения"
                  : "Popular Study Fields"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">🔬</div>
                <h4 className="text-xl font-semibold mb-3">
                  {language === "fa"
                    ? "مهندسی و فناوری"
                    : language === "ru"
                      ? "Инженерия и технологии"
                      : "Engineering & Technology"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "fa"
                    ? "برنامه‌های پیشرفته در مهندسی هوافضا، هسته‌ای و مکانیک"
                    : language === "ru"
                      ? "Передовые программы в области аэрокосмической, ядерной и механической инженерии"
                      : "Advanced programs in aerospace, nuclear, and mechanical engineering"}
                </p>
              </div>

              <div className="text-center bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">⚕️</div>
                <h4 className="text-xl font-semibold mb-3">
                  {language === "fa"
                    ? "پزشکی و بهداشت"
                    : language === "ru"
                      ? "Медицина и здравоохранение"
                      : "Medicine & Healthcare"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "fa"
                    ? "دانشکده‌های پزشکی معتبر جهان با شناخت بین‌المللی"
                    : language === "ru"
                      ? "Всемирно известные медицинские школы с международным признанием"
                      : "World-renowned medical schools with international recognition"}
                </p>
              </div>

              <div className="text-center bg-card p-6 rounded-lg border hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">💼</div>
                <h4 className="text-xl font-semibold mb-3">
                  {language === "fa"
                    ? "کسب‌وکار و اقتصاد"
                    : language === "ru"
                      ? "Бизнес и экономика"
                      : "Business & Economics"}
                </h4>
                <p className="text-muted-foreground">
                  {language === "fa"
                    ? "برنامه‌های MBA و مطالعات تجاری در بازارهای نوظهور"
                    : language === "ru"
                      ? "Программы MBA и бизнес-исследования на развивающихся рынках"
                      : "MBA programs and business studies in emerging markets"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

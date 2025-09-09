"use client"

import { useState, lazy, Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { animatedFlagBg } from "@/styles/backgrounds"

const LazyVideoBackground = lazy(() => import("@/components/video-background"))

export default function VisaTypesPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("electronic")

  const content = {
    fa: {
      title: "دریافت انواع ویزای روسیه",
      subtitle: "راهنمای کامل انواع ویزای روسیه و نحوه دریافت آن‌ها",
      tabs: {
        electronic: "ویزای الکترونیکی",
        tourist: "ویزای توریستی",
        business: "ویزای تجاری",
      },
      electronic: {
        title: "ویزای الکترونیکی روسیه",
        description: "سریع‌ترین و آسان‌ترین روش دریافت ویزای روسیه",
        validity: "اعتبار: ۶۰ روز",
        stay: "مدت اقامت: حداکثر ۱۶ روز",
        processing: "زمان پردازش: ۴ روز کاری",
        features: ["درخواست آنلاین", "بدون نیاز به مراجعه حضوری", "پردازش سریع", "قابل چاپ در منزل"],
        steps: ["تکمیل فرم آنلاین", "آپلود مدارک مورد نیاز", "پرداخت هزینه", "دریافت ویزا از طریق ایمیل"],
      },
      tourist: {
        title: "ویزای توریستی روسیه",
        description: "برای سفرهای تفریحی و گردشگری به روسیه",
        types: [
          {
            name: "ویزای توریستی ۳۰ روزه",
            validity: "۳۰ روز",
            stay: "۳۰ روز",
            price: "۱۲۰ دلار",
            processing: "۷ روز کاری",
          },
          {
            name: "ویزای توریستی ۹۰ روزه",
            validity: "۹۰ روز",
            stay: "۹۰ روز",
            price: "۱۸۰ دلار",
            processing: "۱۰ روز کاری",
          },
          {
            name: "ویزای توریستی چندبار ورود",
            validity: "۱ سال",
            stay: "۹۰ روز در هر ورود",
            price: "۳۵۰ دلار",
            processing: "۱۴ روز کاری",
          },
        ],
        requirements: [
          "پاسپورت معتبر",
          "فرم درخواست ویزا",
          "عکس پاسپورتی",
          "رزرو هتل",
          "بلیط رفت و برگشت",
          "بیمه مسافرتی",
        ],
      },
      business: {
        title: "ویزای تجاری روسیه",
        description: "برای سفرهای کاری و تجاری به روسیه",
        types: [
          {
            name: "ویزای تجاری یک بار ورود",
            validity: "۹۰ روز",
            stay: "۳۰ روز",
            price: "۱۷۵ دلار",
            processing: "۸ روز کاری",
          },
          {
            name: "ویزای تجاری ۳ ماهه دوبار ورود",
            validity: "۹۰ روز",
            stay: "۳۰ روز در هر ورود",
            price: "۲۴۰ دلار",
            processing: "۱۰ روز کاری",
          },
          {
            name: "ویزای تجاری ۳ ماهه چندبار ورود",
            validity: "۹۰ روز",
            stay: "۳۰ روز در هر ورود",
            price: "۳۱۰ دلار",
            processing: "۱۲ روز کاری",
          },
          {
            name: "ویزای تجاری یک ساله چندبار ورود",
            validity: "۱ سال",
            stay: "۹۰ روز در هر ورود",
            price: "۴۷۰ دلار",
            processing: "۱۴ روز کاری",
          },
        ],
        requirements: [
          "نامه دعوت از شرکت روسی",
          "فرم درخواست ویزا",
          "پاسپورت معتبر",
          "معرفی‌نامه شرکت بازرگانی",
          "عکس پاسپورتی",
          "کپی ویزای تجاری یک سال گذشته (در صورت وجود)",
          "نتیجه آزمایش HIV (فقط برای ویزای چندبار ورود)",
        ],
      },
    },
    en: {
      title: "Russian Visa Types",
      subtitle: "Complete guide to Russian visa types and how to obtain them",
      tabs: {
        electronic: "Electronic Visa",
        tourist: "Tourist Visa",
        business: "Business Visa",
      },
      electronic: {
        title: "Russian Electronic Visa",
        description: "Fastest and easiest way to get a Russian visa",
        validity: "Validity: 60 days",
        stay: "Stay duration: Maximum 16 days",
        processing: "Processing time: 4 working days",
        features: ["Online application", "No need for in-person visit", "Fast processing", "Printable at home"],
        steps: ["Complete online form", "Upload required documents", "Pay fees", "Receive visa via email"],
      },
      tourist: {
        title: "Russian Tourist Visa",
        description: "For leisure and tourism trips to Russia",
        types: [
          {
            name: "30-day Tourist Visa",
            validity: "30 days",
            stay: "30 days",
            price: "$120",
            processing: "7 working days",
          },
          {
            name: "90-day Tourist Visa",
            validity: "90 days",
            stay: "90 days",
            price: "$180",
            processing: "10 working days",
          },
          {
            name: "Multiple Entry Tourist Visa",
            validity: "1 year",
            stay: "90 days per entry",
            price: "$350",
            processing: "14 working days",
          },
        ],
        requirements: [
          "Valid passport",
          "Visa application form",
          "Passport photo",
          "Hotel reservation",
          "Round-trip ticket",
          "Travel insurance",
        ],
      },
      business: {
        title: "Russian Business Visa",
        description: "For business and commercial trips to Russia",
        types: [
          {
            name: "Single Entry Business Visa",
            validity: "90 days",
            stay: "30 days",
            price: "$175",
            processing: "8 working days",
          },
          {
            name: "3-month Double Entry Business Visa",
            validity: "90 days",
            stay: "30 days per entry",
            price: "$240",
            processing: "10 working days",
          },
          {
            name: "3-month Multiple Entry Business Visa",
            validity: "90 days",
            stay: "30 days per entry",
            price: "$310",
            processing: "12 working days",
          },
          {
            name: "1-year Multiple Entry Business Visa",
            validity: "1 year",
            stay: "90 days per entry",
            price: "$470",
            processing: "14 working days",
          },
        ],
        requirements: [
          "Invitation letter from Russian company",
          "Visa application form",
          "Valid passport",
          "Company introduction letter",
          "Passport photo",
          "Copy of last year's business visa (if available)",
          "HIV test result (only for multiple entry visas)",
        ],
      },
    },
    ru: {
      title: "Типы российских виз",
      subtitle: "Полное руководство по типам российских виз и способам их получения",
      tabs: {
        electronic: "Электронная виза",
        tourist: "Туристическая виза",
        business: "Деловая виза",
      },
      electronic: {
        title: "Российская электронная виза",
        description: "Самый быстрый и простой способ получить российскую визу",
        validity: "Срок действия: 60 дней",
        stay: "Продолжительность пребывания: максимум 16 дней",
        processing: "Время обработки: 4 рабочих дня",
        features: ["Онлайн заявка", "Не требует личного визита", "Быстрая обработка", "Можно распечатать дома"],
        steps: [
          "Заполнить онлайн форму",
          "Загрузить необходимые документы",
          "Оплатить сборы",
          "Получить визу по электронной почте",
        ],
      },
      tourist: {
        title: "Российская туристическая виза",
        description: "Для туристических и развлекательных поездок в Россию",
        types: [
          {
            name: "30-дневная туристическая виза",
            validity: "30 дней",
            stay: "30 дней",
            price: "$120",
            processing: "7 рабочих дней",
          },
          {
            name: "90-дневная туристическая виза",
            validity: "90 дней",
            stay: "90 дней",
            price: "$180",
            processing: "10 рабочих дней",
          },
          {
            name: "Многократная туристическая виза",
            validity: "1 год",
            stay: "90 дней за въезд",
            price: "$350",
            processing: "14 рабочих дней",
          },
        ],
        requirements: [
          "Действующий паспорт",
          "Анкета на визу",
          "Фото на паспорт",
          "Бронь отеля",
          "Билет туда и обратно",
          "Страховка путешественника",
        ],
      },
      business: {
        title: "Российская деловая виза",
        description: "Для деловых и коммерческих поездок в Россию",
        types: [
          {
            name: "Однократная деловая виза",
            validity: "90 дней",
            stay: "30 дней",
            price: "$175",
            processing: "8 рабочих дней",
          },
          {
            name: "3-месячная двукратная деловая виза",
            validity: "90 дней",
            stay: "30 дней за въезд",
            price: "$240",
            processing: "10 рабочих дней",
          },
          {
            name: "3-месячная многократная деловая виза",
            validity: "90 дней",
            stay: "30 дней за въезд",
            price: "$310",
            processing: "12 рабочих дней",
          },
          {
            name: "Годовая многократная деловая виза",
            validity: "1 год",
            stay: "90 дней за въезд",
            price: "$470",
            processing: "14 рабочих дней",
          },
        ],
        requirements: [
          "Приглашение от российской компании",
          "Анкета на визу",
          "Действующий паспорт",
          "Письмо-представление компании",
          "Фото на паспорт",
          "Копия деловой визы прошлого года (при наличии)",
          "Результат анализа на ВИЧ (только для многократных виз)",
        ],
      },
    },
  }

  const currentContent = content[language as keyof typeof content] || content.fa

  return (
    <div className="min-h-screen" style={animatedFlagBg}>
      <Navbar />
      <div className="pt-16">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Suspense
              fallback={
                <Image
                  src="/russian-visa-documents-and-business-scene.jpg"
                  alt="Russian visa services background"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              }
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/russian-visa-documents-and-business-scene.jpg"
                preload="metadata"
                loading="lazy"
              >
                <source src="/videos/russia-visa-hero.mp4" type="video/mp4" />
                <Image
                  src="/russian-visa-documents-and-business-scene.jpg"
                  alt="Russian visa services background"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </video>
            </Suspense>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
              {currentContent.title}
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto text-pretty drop-shadow-md">
              {currentContent.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => setActiveTab("electronic")}
                variant={activeTab === "electronic" ? "default" : "outline"}
                size="lg"
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                  activeTab === "electronic"
                    ? "bg-teal-600 hover:bg-teal-700 text-white shadow-lg"
                    : "border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
                }`}
                aria-label="ویزای الکترونیکی روسیه"
              >
                🖥️ {currentContent.tabs.electronic}
              </Button>
              <Button
                onClick={() => setActiveTab("tourist")}
                variant={activeTab === "tourist" ? "default" : "outline"}
                size="lg"
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                  activeTab === "tourist"
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
                aria-label="ویزای توریستی روسیه"
              >
                🏖️ {currentContent.tabs.tourist}
              </Button>
              <Button
                onClick={() => setActiveTab("business")}
                variant={activeTab === "business" ? "default" : "outline"}
                size="lg"
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                  activeTab === "business"
                    ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
                    : "border-2 border-amber-600 text-amber-600 hover:bg-amber-50"
                }`}
                aria-label="ویزای تجاری روسیه"
              >
                💼 {currentContent.tabs.business}
              </Button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {/* Electronic Visa Content */}
              {activeTab === "electronic" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <Card className="border-2 border-teal-200 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100 border-b border-teal-200">
                      <CardTitle className="text-3xl text-teal-800 flex items-center gap-3">
                        🖥️ {currentContent.electronic.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-teal-700">
                        {currentContent.electronic.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-teal-800">مشخصات ویزا</h3>
                          <div className="space-y-3">
                            <Badge variant="secondary" className="text-lg p-3 bg-teal-100 text-teal-800">
                              {currentContent.electronic.validity}
                            </Badge>
                            <Badge variant="secondary" className="text-lg p-3 bg-teal-100 text-teal-800">
                              {currentContent.electronic.stay}
                            </Badge>
                            <Badge variant="secondary" className="text-lg p-3 bg-teal-100 text-teal-800">
                              {currentContent.electronic.processing}
                            </Badge>
                          </div>

                          <h4 className="text-lg font-semibold mt-6 mb-3 text-teal-800">ویژگی‌ها</h4>
                          <ul className="space-y-2">
                            {currentContent.electronic.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-700 text-lg">
                                <span className="text-teal-600">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-teal-800">مراحل درخواست</h4>
                          <ol className="space-y-3">
                            {currentContent.electronic.steps.map((step, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700 text-lg">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Tourist Visa Content */}
              {activeTab === "tourist" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <Card className="border-2 border-blue-200 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                      <CardTitle className="text-3xl text-blue-800 flex items-center gap-3">
                        🏖️ {currentContent.tourist.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-blue-700">
                        {currentContent.tourist.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid gap-6 mb-8">
                        {currentContent.tourist.types.map((type, index) => (
                          <Card key={index} className="border border-blue-200">
                            <CardContent className="p-6">
                              <div className="grid md:grid-cols-5 gap-4 items-center">
                                <div className="md:col-span-2">
                                  <h4 className="font-semibold text-blue-800 text-lg">{type.name}</h4>
                                </div>
                                <div className="text-center">
                                  <Badge variant="outline" className="border-blue-300 text-blue-700 text-base">
                                    {type.validity}
                                  </Badge>
                                </div>
                                <div className="text-center">
                                  <Badge variant="outline" className="border-green-300 text-green-700 text-base">
                                    {type.price}
                                  </Badge>
                                </div>
                                <div className="text-center">
                                  <Badge variant="outline" className="border-orange-300 text-orange-700 text-base">
                                    {type.processing}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-800">مدارک مورد نیاز</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {currentContent.tourist.requirements.map((req, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700 text-lg">
                              <span className="text-blue-600">📋</span>
                              {req}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Business Visa Content */}
              {activeTab === "business" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <Card className="border-2 border-amber-200 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200">
                      <CardTitle className="text-3xl text-amber-800 flex items-center gap-3">
                        💼 {currentContent.business.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-amber-700">
                        {currentContent.business.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid gap-6 mb-8">
                        {currentContent.business.types.map((type, index) => (
                          <Card key={index} className="border border-amber-200">
                            <CardContent className="p-6">
                              <div className="grid md:grid-cols-5 gap-4 items-center">
                                <div className="md:col-span-2">
                                  <h4 className="font-semibold text-amber-800 text-lg">{type.name}</h4>
                                </div>
                                <div className="text-center">
                                  <Badge variant="outline" className="border-amber-300 text-amber-700 text-base">
                                    {type.validity}
                                  </Badge>
                                </div>
                                <div className="text-center">
                                  <Badge variant="outline" className="border-green-300 text-green-700 text-base">
                                    {type.price}
                                  </Badge>
                                </div>
                                <div className="text-center">
                                  <Badge variant="outline" className="border-orange-300 text-orange-700 text-base">
                                    {type.processing}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-amber-800">مدارک مورد نیاز</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {currentContent.business.requirements.map((req, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-700 text-lg">
                              <span className="text-amber-600">📋</span>
                              {req}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

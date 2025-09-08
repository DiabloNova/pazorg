"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { MapPinIcon, PhoneIcon, UserIcon, BuildingOfficeIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-200/20 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-white/30 rounded-full animate-pulse"></div>
      </div>

      <Navbar />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent ${language === "fa" ? "font-iran-kharazmi" : ""}`}
            >
              {getTranslation(language, "aboutUsTitle")}
            </h1>
            <p
              className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${language === "fa" ? "font-iran-kharazmi" : ""}`}
            >
              {getTranslation(language, "aboutUsDescription")}
            </p>
          </div>
        </section>

        {/* Company Foundation & Registration */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
              <div className="flex items-center gap-4 mb-8">
                <BuildingOfficeIcon className="w-8 h-8 text-blue-500" />
                <h2 className={`text-3xl font-bold text-blue-600 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                  تأسیس شرکت
                </h2>
              </div>

              <div
                className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi text-right" : ""}`}
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border-l-4 border-blue-500">
                  <p className="mb-4 font-semibold text-blue-800 dark:text-blue-200">
                    شرکت راشا گستر پازیریک در{" "}
                    <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">چهارم دی ماه سال ۱۳۹۸</span> به
                    شماره ثبت <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">۵۵۲۱۵۳</span> به شناسه
                    ملی <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">۱۴۰۰۸۸۶۶۸۸۵</span> در تهران
                    تشکیل گردید.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-green-800 dark:text-green-200">
                    این شرکت با سرمایه <span className="font-bold">دو میلیارد ریال</span> تأسیس گردیده که مدیرعامل و
                    رئیس هیئت مدیره آن <span className="font-semibold">دکتر حمید رضا بیات</span> (دکترای مهندسی
                    فیزیولوژی و بیوشیمی از روسیه) است و سرکار خانم <span className="font-semibold">زینب احمدی</span>{" "}
                    (مدیر عامل موسسه اعزام دانشجوی آبادیس پارسیان دانش، دکترای متدولوژی آموزش زبان روسی از روسیه) از
                    اعضای هیأت مدیره پازیریک است.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Activities */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
              <div className="flex items-center gap-4 mb-8">
                <GlobeAltIcon className="w-8 h-8 text-red-500" />
                <h2 className={`text-3xl font-bold text-red-600 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                  موضوع فعالیت
                </h2>
              </div>

              <div
                className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi text-right" : ""}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2">خدمات تجاری</h3>
                    <ul className="text-sm space-y-1 text-red-600 dark:text-red-400">
                      <li>• صادرات و واردات</li>
                      <li>• خدمات پس از فروش</li>
                      <li>• ترخیص کالا از گمرکات</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">خدمات مالی</h3>
                    <ul className="text-sm space-y-1 text-orange-600 dark:text-orange-400">
                      <li>• اخذ وام و تسهیلات بانکی</li>
                      <li>• گشایش اعتبارات و ال سی</li>
                      <li>• خدمات ارزی و ریالی</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">خدمات آموزشی</h3>
                    <ul className="text-sm space-y-1 text-purple-600 dark:text-purple-400">
                      <li>• مشاوره تحصیلی</li>
                      <li>• برگزاری همایش و سمینار</li>
                      <li>• اعزام دانشجو</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
                    <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">توسعه شبکه</h3>
                    <ul className="text-sm space-y-1 text-teal-600 dark:text-teal-400">
                      <li>• ایجاد شعب و نمایندگی</li>
                      <li>• شرکت در نمایشگاه‌ها</li>
                      <li>• اخذ و اعطای نمایندگی</li>
                    </ul>
                  </div>
                </div>

                <p className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-gray-400">
                  موضوع فعالیت شرکت پازیریک شامل صادرات و واردات، خدمات پس از فروش کلیه کالاهای مجاز بازرگانی، ارائه
                  خدمات مشاوره تحصیلی، برگزاری همایش و سمینار، اخذ و اعطای نمایندگی شرکت‌های معتبر داخلی و خارجی، اخذ وام
                  و تسهیلات بانکی به صورت ارزی و ریالی از کلیه بانک‌ها و موسسات مالی و اعتباری داخلی و خارجی، گشایش
                  اعتبارات و ال سی برای شرکت نزد بانک‌ها، ترخیص کالا از کلیه گمرکات داخلی ایجاد شعب و نمایندگی در سراسر
                  کشور و برپایی غرفه و شرکت در کلیه نمایشگاه‌های معتبر داخلی و خارجی و بین‌المللی است.
                </p>
              </div>
            </div>

            {/* Russia Trade Expertise */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
              <h2 className={`text-3xl font-bold text-green-600 mb-8 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                تخصص در تجارت با روسیه
              </h2>

              <div
                className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-6 ${language === "fa" ? "font-iran-kharazmi text-right" : ""}`}
              >
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">چالش‌های تجارت با روسیه</h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    با توجه به بازار بزرگ روسیه، تجار ایرانی فرصت‌های زیادی را برای صادرات به این کشور دارند، اما به دلیل
                    عدم شناخت صحیح از این بازار، معمولاً تجار خارجی موفق به حضور پیوسته و ثمربخش در آن نمی‌باشند. یکی از
                    مهمترین مسائل در صادرات به روسیه ارتباط‌گیری با تجار روسی است که کار بسیار دشواری می‌باشد.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">راه‌حل پازیریک</h3>
                  <p className="text-green-700 dark:text-green-300">
                    شرکت راشاگستر پازیریک می‌تواند با{" "}
                    <span className="font-bold bg-green-200 dark:bg-green-800 px-2 py-1 rounded">سال‌ها تجربه</span> در
                    این راستا بهترین مشاور و رابط شما برای تجارت در این کشور پهناور باشد.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">مراحل صادرات به روسیه</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        1
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">بازاریابی</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        2
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">تحقیقات میدانی</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        3
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">شناسایی خریداران</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                        4
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">عقد قرارداد</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-2xl font-semibold mb-6 text-blue-600 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                  >
                    کالاهای صادراتی به روسیه
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">مواد غذایی</h4>
                      <ul className="text-sm space-y-1 text-orange-600 dark:text-orange-400">
                        <li>• انواع میوه و سبزی</li>
                        <li>• صیفی‌جات و خشکبار</li>
                        <li>• رب و خیار شور</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">مصالح ساختمانی</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• سیمان</li>
                        <li>• شیشه</li>
                        <li>• مواد ساختمانی</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">مواد پتروشیمی</h4>
                      <ul className="text-sm space-y-1 text-purple-600 dark:text-purple-400">
                        <li>• پلی اتیلن</li>
                        <li>• محصولات شیمیایی</li>
                        <li>• مواد پلیمری</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-l-4 border-indigo-500">
                  <p className="text-indigo-700 dark:text-indigo-300">
                    همچنین استفاده از اطلاعات و شرکت در نمایشگاه‌های بین‌المللی به‌صورت مستمر برای ایجاد ارتباطات بهتر و
                    نیز شناسایی کالاهای رقبا و کیفیت و قیمت آن‌ها در بازارها از نکاتی است که شرکت راشاگستر پازیریک با
                    تسلط کامل به آن می‌تواند بهترین اطلاعات بازار را در اختیار تجار ایرانی قرار دهد.
                  </p>
                </div>
              </div>
            </div>

            {/* Import Services */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
              <h2
                className={`text-3xl font-bold text-purple-600 mb-8 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                خدمات واردات از روسیه
              </h2>

              <div
                className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi text-right" : ""}`}
              >
                <div className="mb-6">
                  <p className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500 text-purple-700 dark:text-purple-300 mb-6">
                    لازم به ذکر است، این شرکت توانایی تأمین محصولات مورد نیاز کشور عزیزمان ایران از روسیه در زمینه‌های
                    گوناگونی را دارد.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-700 dark:text-green-300 mb-3">کشاورزی و دام</h3>
                    <ul className="text-sm space-y-1 text-green-600 dark:text-green-400">
                      <li>• نهاده‌های دامی</li>
                      <li>• دانه‌های روغنی</li>
                      <li>• روغن آفتابگردان</li>
                      <li>• گوشت</li>
                      <li>• حبوبات و غلات</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">صنعتی و معدنی</h3>
                    <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                      <li>• ماشین‌آلات صنعتی</li>
                      <li>• تجهیزات صنعتی</li>
                      <li>• انواع آهن‌آلات</li>
                      <li>• فولاد</li>
                      <li>• ذغال سنگ</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-3">مواد اولیه</h3>
                    <ul className="text-sm space-y-1 text-amber-600 dark:text-amber-400">
                      <li>• کاغذ و چوب</li>
                      <li>• صنایع پتروشیمی</li>
                      <li>• مواد شیمیایی</li>
                      <li>• مواد خام صنعتی</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Services */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
              <h2
                className={`text-3xl font-bold text-orange-600 mb-8 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                خدمات تحصیلی
              </h2>

              <div
                className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi text-right" : ""}`}
              >
                <div className="space-y-6">
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">مزایای تحصیل در روسیه</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-700 dark:text-orange-300">بورسیه‌های تحصیلی فراوان</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-700 dark:text-orange-300">سیستم تحصیلی عالی</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-700 dark:text-orange-300">کیفیت آموزشی بالا</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-700 dark:text-orange-300">دانشگاه‌های معتبر</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border-l-4 border-teal-500">
                    <h3 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">خدمات پازیریک</h3>
                    <p className="text-teal-700 dark:text-teal-300">
                      شرکت راشا گستر پازیریک با توجه به{" "}
                      <span className="font-bold bg-teal-200 dark:bg-teal-800 px-2 py-1 rounded">
                        طرف قرارداد بودن معتبرترین دانشگاه‌های روسیه
                      </span>
                      ، می‌تواند راه‌های پذیرش در دانشگاه را برای متقاضیان سهل و آسان نماید.
                    </p>
                  </div>

                  <p className="bg-gradient-to-r from-orange-50 to-teal-50 dark:from-orange-900/20 dark:to-teal-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                    علاوه بر موارد فوق‌الذکر، کشور روسیه با ارائه بورسیه‌های تحصیلی فراوان به دانشجویان خارجی با سیستم
                    تحصیلی بسیار عالی و کیفیت آموزشی بالا می‌تواند فرصت مناسبی برای عزیزانی باشد که قصد ادامه تحصیل در
                    خارج از کشور را دارند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Company Details */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2
                  className={`text-3xl font-bold mb-8 text-blue-600 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                >
                  {getTranslation(language, "companyInfo")}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {getTranslation(language, "address")}
                      </h3>
                      <p
                        className={`text-gray-600 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                      >
                        {getTranslation(language, "fullAddress")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {getTranslation(language, "phone")}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-600 dark:text-gray-300">09122183653</p>
                        <p className="text-gray-600 dark:text-gray-300">02188552623</p>
                        <p className="text-gray-600 dark:text-gray-300">02188552624</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Team */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className={`text-3xl font-bold mb-8 text-red-600 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                  Leadership Team
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <UserIcon className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {getTranslation(language, "ceo")}
                      </h3>
                      <p
                        className={`text-gray-600 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                      >
                        {getTranslation(language, "ceoName")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <UserIcon className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                        {getTranslation(language, "coo")}
                      </h3>
                      <p
                        className={`text-gray-600 dark:text-gray-300 ${language === "fa" ? "font-iran-kharazmi" : ""}`}
                      >
                        {getTranslation(language, "cooName")}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">(abadisparsian.com)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

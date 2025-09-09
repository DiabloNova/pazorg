"use client"

import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { MapPinIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-amber-900/10 animate-pulse"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="پازیریک" width={32} height={32} className="w-8 h-8" />
              <h2
                className={`text-2xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                پازیریک
              </h2>
            </div>
            <h3 className={`text-xl font-bold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
              {getTranslation(language, "companyInfo")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "address")}:
                  </p>
                  <p className={`text-gray-300 text-sm ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "fullAddress")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                <div>
                  <p className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "phone")}:
                  </p>
                  <p className="text-gray-300 text-sm">09122183653 - 02188552623 - 02188552624</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>Leadership</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <UserIcon className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "ceo")}:
                  </p>
                  <p className={`text-gray-300 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "ceoName")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserIcon className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className={`font-semibold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "coo")}:
                  </p>
                  <p className={`text-gray-300 text-sm ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
                    {getTranslation(language, "cooName")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
              {getTranslation(language, "services")}
            </h3>
            <div className="space-y-2">
              <a
                href="/russian-visa"
                className={`block text-gray-300 hover:text-white transition-colors ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                {getTranslation(language, "russianVisa")}
              </a>
              <a
                href="/sending-rubles"
                className={`block text-gray-300 hover:text-white transition-colors ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                {getTranslation(language, "sendingRubles")}
              </a>
              <a
                href="/study-in-russia"
                className={`block text-gray-300 hover:text-white transition-colors ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                {getTranslation(language, "studyInRussia")}
              </a>
              <a
                href="/export-to-russia"
                className={`block text-gray-300 hover:text-white transition-colors ${language === "fa" ? "font-iran-kharazmi" : ""}`}
              >
                {getTranslation(language, "exportToRussia")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className={`text-gray-400 ${language === "fa" ? "font-iran-kharazmi" : ""}`}>
            © 2024 پازیریک. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

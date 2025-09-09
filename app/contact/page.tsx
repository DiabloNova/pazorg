"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageThemeOverlay } from "@/components/language-theme-overlay"
import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert(
      language === "fa"
        ? "پیام شما ارسال شد"
        : language === "ru"
          ? "Ваше сообщение отправлено"
          : "Your message has been sent",
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const content = {
    fa: {
      title: "تماس با ما",
      subtitle: "با ما در ارتباط باشید",
      form: {
        name: "نام و نام خانوادگی",
        email: "ایمیل",
        phone: "شماره تماس",
        subject: "موضوع",
        message: "پیام",
        submit: "ارسال پیام",
      },
      info: {
        phone: "تلفن تماس",
        email: "ایمیل",
        address: "آدرس",
        hours: "ساعات کاری",
      },
      contact: {
        phone: "+98 21 1234 5678",
        email: "info@pazirik.com",
        address: "تهران، ایران",
        hours: "شنبه تا چهارشنبه: 9:00 - 17:00",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
      },
      info: {
        phone: "Phone",
        email: "Email",
        address: "Address",
        hours: "Business Hours",
      },
      contact: {
        phone: "+98 21 1234 5678",
        email: "info@pazirik.com",
        address: "Tehran, Iran",
        hours: "Saturday to Wednesday: 9:00 AM - 5:00 PM",
      },
    },
    ru: {
      title: "Связаться с нами",
      subtitle: "Свяжитесь с нами",
      form: {
        name: "Полное имя",
        email: "Электронная почта",
        phone: "Номер телефона",
        subject: "Тема",
        message: "Сообщение",
        submit: "Отправить сообщение",
      },
      info: {
        phone: "Телефон",
        email: "Электронная почта",
        address: "Адрес",
        hours: "Рабочие часы",
      },
      contact: {
        phone: "+98 21 1234 5678",
        email: "info@pazirik.com",
        address: "Тегеран, Иран",
        hours: "Суббота - среда: 9:00 - 17:00",
      },
    },
  }

  const currentContent = content[language as keyof typeof content] || content.fa

  return (
    <div className="min-h-screen animated-flag-bg">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">{currentContent.title}</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-pretty">{currentContent.subtitle}</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">{currentContent.form.submit}</CardTitle>
                  <CardDescription>
                    {language === "fa"
                      ? "فرم زیر را تکمیل کنید"
                      : language === "ru"
                        ? "Заполните форму ниже"
                        : "Fill out the form below"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">{currentContent.form.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{currentContent.form.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{currentContent.form.phone}</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">{currentContent.form.subject}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">{currentContent.form.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700"
                    >
                      {currentContent.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Phone className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold">{currentContent.info.phone}</h3>
                        <p className="text-muted-foreground">{currentContent.contact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Mail className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold">{currentContent.info.email}</h3>
                        <p className="text-muted-foreground">{currentContent.contact.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold">{currentContent.info.address}</h3>
                        <p className="text-muted-foreground">{currentContent.contact.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Clock className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold">{currentContent.info.hours}</h3>
                        <p className="text-muted-foreground">{currentContent.contact.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <LanguageThemeOverlay />
    </div>
  )
}

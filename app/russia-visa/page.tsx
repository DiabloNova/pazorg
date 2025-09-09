"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, FileText, Users } from "lucide-react"
import Image from "next/image"

export default function RussiaVisaPage() {
  const [activeTab, setActiveTab] = useState("electronic")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16 mt-16 animated-gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-iran-kharazmi">
                ویزای روسیه | اخذ ویزای توریستی + هزینه و شرایط جدید
              </h1>
              <p className="text-xl mb-8 leading-relaxed font-iran-kharazmi">
                از ارزان ترین تا لوکس ترین
                <br />
                تور روسیه با پازیریک
              </p>
              <div className="flex items-center justify-center lg:justify-end gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold font-iran-kharazmi">۰۲۶۱۸۳۰</div>
                  <div className="text-sm font-iran-kharazmi">پازیریک</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/colorful-russian-saint-basil-s-cathedral-illustrat.jpg"
                  alt="Russian Saint Basil's Cathedral"
                  width={400}
                  height={400}
                  className="max-w-full h-auto optimized-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Application Form */}
      <section className="py-16 bg-gray-50 animated-gradient-bg">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="bg-teal-600 text-white text-center">
              <CardTitle className="text-2xl font-iran-kharazmi">اطلاعیه ویزای روسیه</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-center text-gray-600 mb-8 font-iran-kharazmi">
                لطفا اطلاعات خود را کامل وارد نمایید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-right block mb-2 font-iran-kharazmi">
                      نام و نام خانوادگی
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="نام کامل خود را وارد کنید"
                      className="text-right font-iran-kharazmi"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-right block mb-2 font-iran-kharazmi">
                      شماره تماس
                    </Label>
                    <Input id="phone" placeholder="شماره موبایل" className="text-right font-iran-kharazmi" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-right block mb-2 font-iran-kharazmi">
                    ایمیل
                  </Label>
                  <Input id="email" type="email" placeholder="آدرس ایمیل" className="text-right font-iran-kharazmi" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-right block mb-2 font-iran-kharazmi">نوع گذرنامه</Label>
                    <Select>
                      <SelectTrigger className="font-iran-kharazmi">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ordinary" className="font-iran-kharazmi">
                          عادی
                        </SelectItem>
                        <SelectItem value="service" className="font-iran-kharazmi">
                          خدماتی
                        </SelectItem>
                        <SelectItem value="diplomatic" className="font-iran-kharazmi">
                          دیپلماتیک
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-right block mb-2 font-iran-kharazmi">مدت اقامت</Label>
                    <Select>
                      <SelectTrigger className="font-iran-kharazmi">
                        <SelectValue placeholder="انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7" className="font-iran-kharazmi">
                          ۷ روز
                        </SelectItem>
                        <SelectItem value="14" className="font-iran-kharazmi">
                          ۱۴ روز
                        </SelectItem>
                        <SelectItem value="30" className="font-iran-kharazmi">
                          ۳۰ روز
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-iran-kharazmi">
                  درخواست مشاوره
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-iran-kharazmi">خدمات ویزای روسیه</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2 font-iran-kharazmi">تضمین</h3>
                <p className="text-sm text-gray-600 font-iran-kharazmi">۱۰۰٪ تضمین</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2 font-iran-kharazmi">مشاوره</h3>
                <p className="text-sm text-gray-600 font-iran-kharazmi">مشاوره ۲۴ ساعته</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2 font-iran-kharazmi">سرعت</h3>
                <p className="text-sm text-gray-600 font-iran-kharazmi">پردازش سریع</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold mb-2 font-iran-kharazmi">تخصص</h3>
                <p className="text-sm text-gray-600 font-iran-kharazmi">کارشناس متخصص</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-iran-kharazmi">انواع ویزای روسیه</h2>

            <div className="w-full">
              <div className="w-full">
                {/* Tab Buttons */}
                <div className="grid w-full grid-cols-3 mb-8 h-16 p-1 bg-white border-2 border-teal-200 rounded-xl shadow-lg">
                  <button
                    onClick={() => setActiveTab("electronic")}
                    className={`text-base py-3 px-4 font-iran-kharazmi rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === "electronic"
                        ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg"
                        : "hover:bg-teal-50 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">🔌</span>
                    <span>ویزای الکترونیکی</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("tourist")}
                    className={`text-base py-3 px-4 font-iran-kharazmi rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === "tourist"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                        : "hover:bg-blue-50 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">🏖️</span>
                    <span>ویزای توریستی</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("business")}
                    className={`text-base py-3 px-4 font-iran-kharazmi rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === "business"
                        ? "bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg"
                        : "hover:bg-orange-50 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">💼</span>
                    <span>ویزای تجاری</span>
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "electronic" && (
                  <div className="space-y-8 mt-8">
                    <div className="bg-gradient-to-br from-teal-50 to-green-50 p-4 rounded-2xl border-4 border-teal-300 shadow-2xl">
                      <Card className="border-0 shadow-xl">
                        <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-t-lg">
                          <CardTitle className="text-3xl text-center font-iran-kharazmi flex items-center justify-center gap-3">
                            🔌 ویزای الکترونیکی روسیه
                          </CardTitle>
                          <p className="text-center text-teal-100 mt-2 text-lg font-iran-kharazmi">
                            سریع‌ترین و آسان‌ترین روش اخذ ویزای روسیه
                          </p>
                        </CardHeader>
                        <CardContent className="p-8">
                          <div className="grid lg:grid-cols-2 gap-8">
                            <div className="text-right">
                              <h3 className="text-2xl font-bold mb-6 text-teal-700 flex items-center gap-2 font-iran-kharazmi">
                                ⚡ مشخصات ویزای الکترونیکی
                              </h3>
                              <div className="space-y-6">
                                <div className="bg-gradient-to-r from-teal-100 to-teal-50 border-4 border-teal-300 rounded-xl p-6 shadow-lg">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center border-l-2 border-teal-400 pl-4">
                                      <div className="font-bold text-teal-800 text-lg font-iran-kharazmi">نوع ویزا</div>
                                      <div className="text-teal-600 text-xl font-bold font-iran-kharazmi">
                                        الکترونیکی
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <div className="font-bold text-teal-800 text-lg font-iran-kharazmi">
                                        مدت اعتبار
                                      </div>
                                      <div className="text-teal-600 text-xl font-bold font-iran-kharazmi">۶۰ روز</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-green-100 to-green-50 border-4 border-green-300 rounded-xl p-6 shadow-lg">
                                  <div className="text-center">
                                    <div className="font-bold mb-2 text-green-800 text-lg font-iran-kharazmi">
                                      مدت اقامت مجاز
                                    </div>
                                    <div className="text-green-600 text-2xl font-bold font-iran-kharazmi">
                                      حداکثر ۱۶ روز
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-4 border-blue-300 rounded-xl p-6 shadow-lg">
                                  <div className="text-center">
                                    <div className="font-bold mb-2 text-blue-800 text-lg font-iran-kharazmi">
                                      زمان پردازش
                                    </div>
                                    <div className="text-blue-600 text-2xl font-bold font-iran-kharazmi">
                                      ۴ روز کاری
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-purple-100 to-purple-50 border-4 border-purple-300 rounded-xl p-6 shadow-lg">
                                  <div className="text-center">
                                    <div className="font-bold mb-2 text-purple-800 text-lg font-iran-kharazmi">
                                      هزینه
                                    </div>
                                    <div className="text-purple-600 text-2xl font-bold font-iran-kharazmi">۴۰ دلار</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visa%27s%20time%20limits.jpg-XEbyZ4aaPazCsvFQ6IJeSBURJ63NoW.jpeg"
                                alt="جدول اعتبار ویزاهای روسیه"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-xl shadow-lg border-2 border-gray-200"
                              />
                            </div>
                          </div>

                          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border-4 border-blue-300 shadow-lg">
                            <h4 className="font-bold mb-4 text-blue-800 text-2xl flex items-center gap-2 font-iran-kharazmi">
                              ✅ نکات مهم ویزای الکترونیکی:
                            </h4>
                            <ul className="space-y-4 text-blue-700">
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-green-600" />
                                <span className="text-lg font-iran-kharazmi">
                                  {" "}
                                  فقط از طریق سایت رسمی وزارت امور خارجه روسیه قابل درخواست است
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-green-600" />
                                <span className="text-lg font-iran-kharazmi">زمان پردازش: ۴ روز کاری</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-green-600" />
                                <span className="text-lg font-iran-kharazmi">
                                  فقط برای ورود از مرزهای خاص امکان‌پذیر است
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 text-green-600" />
                                <span className="text-lg font-iran-kharazmi">هزینه: ۴۰ دلار آمریکا</span>
                              </li>
                            </ul>
                          </div>

                          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-4 border-yellow-300 shadow-lg">
                            <h4 className="font-bold mb-4 text-yellow-800 text-2xl flex items-center gap-2 font-iran-kharazmi">
                              📋 مراحل درخواست:
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg font-iran-kharazmi">
                                    ۱
                                  </div>
                                  <span className="text-lg font-semibold font-iran-kharazmi">ثبت نام در سایت رسمی</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg font-iran-kharazmi">
                                    ۲
                                  </div>
                                  <span className="text-lg font-semibold font-iran-kharazmi">تکمیل فرم آنلاین</span>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg font-iran-kharazmi">
                                    ۳
                                  </div>
                                  <span className="text-lg font-semibold font-iran-kharazmi">پرداخت هزینه</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg font-iran-kharazmi">
                                    ۴
                                  </div>
                                  <span className="text-lg font-semibold font-iran-kharazmi">
                                    دریافت ویزا الکترونیکی
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {activeTab === "tourist" && (
                  <div className="space-y-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader className="bg-green-100">
                          <CardTitle className="text-center text-green-800 font-iran-kharazmi">
                            ویزای توریستی ۳۰ روزه
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600 font-iran-kharazmi">۳۰ روز</div>
                              <div className="text-sm text-gray-600 font-iran-kharazmi">مدت اقامت</div>
                            </div>
                            <div className="border-t pt-4">
                              <h4 className="font-bold mb-2 font-iran-kharazmi">مدارک مورد نیاز:</h4>
                              <ul className="text-sm space-y-1 font-iran-kharazmi">
                                <li>• گذرنامه اصلی</li>
                                <li>• تصویر ۴×۶</li>
                                <li>• فرم درخواست</li>
                                <li>• بیمه مسافرتی</li>
                                <li>• رزرو هتل</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-blue-100">
                          <CardTitle className="text-center text-blue-800 font-iran-kharazmi">
                            ویزای توریستی ۹۰ روزه
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600 font-iran-kharazmi">۹۰ روز</div>
                              <div className="text-sm text-gray-600 font-iran-kharazmi">مدت اقامت</div>
                            </div>
                            <div className="border-t pt-4">
                              <h4 className="font-bold mb-2 font-iran-kharazmi">مدارک اضافی:</h4>
                              <ul className="text-sm space-y-1 font-iran-kharazmi">
                                <li>• گردش حساب ۶ ماهه</li>
                                <li>• گواهی کار</li>
                                <li>• برنامه سفر تفصیلی</li>
                                <li>• تضمین مالی</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-purple-100">
                          <CardTitle className="text-center text-purple-800 font-iran-kharazmi">
                            ویزای توریستی چند بار ورود
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-600 font-iran-kharazmi">۱ سال</div>
                              <div className="text-sm text-gray-600 font-iran-kharazmi">اعتبار ویزا</div>
                            </div>
                            <div className="border-t pt-4">
                              <h4 className="font-bold mb-2 font-iran-kharazmi">ویژگی‌ها:</h4>
                              <ul className="text-sm space-y-1 font-iran-kharazmi">
                                <li>• ورود و خروج چندباره</li>
                                <li>• حداکثر ۹۰ روز در هر بار</li>
                                <li>• مناسب مسافران مکرر</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/all%20Russian%20visa%20types.jpg-Ii75mhvfoUvi7JPSrWlllWC95Jyoik.jpeg"
                              alt="انواع ویزای روسیه"
                              width={400}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simple%20format%20of%20Russian%20visa.jpg-UWWBzFEn0AYcWSKY1nRYPod3eEyKPM.jpeg"
                              alt="نمونه ویزای روسیه"
                              width={400}
                              height={300}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === "business" && (
                  <div className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="bg-orange-100">
                          <CardTitle className="text-center text-orange-800 font-iran-kharazmi">
                            ویزای تجاری یک بار ورود
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="font-bold font-iran-kharazmi">هزینه</div>
                                <div className="text-orange-600 font-iran-kharazmi">۱۷۵ دلار</div>
                              </div>
                              <div>
                                <div className="font-bold font-iran-kharazmi">مدت</div>
                                <div className="text-orange-600 font-iran-kharazmi">۸ تا ۱۰ روز کاری</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-red-100">
                          <CardTitle className="text-center text-red-800 font-iran-kharazmi">
                            ویزای تجاری ۳ ماهه
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="font-bold font-iran-kharazmi">هزینه</div>
                                <div className="text-red-600 font-iran-kharazmi">۲۴۰ دلار</div>
                              </div>
                              <div>
                                <div className="font-bold font-iran-kharazmi">مدت</div>
                                <div className="text-red-600 font-iran-kharazmi">۸ تا ۱۰ روز کاری</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-indigo-100">
                          <CardTitle className="text-center text-indigo-800 font-iran-kharazmi">
                            ویزای تجاری ۳ ماهه دو بار ورود
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="font-bold font-iran-kharazmi">هزینه</div>
                                <div className="text-indigo-600 font-iran-kharazmi">۳۱۰ دلار</div>
                              </div>
                              <div>
                                <div className="font-bold font-iran-kharazmi">مدت</div>
                                <div className="text-indigo-600 font-iran-kharazmi">۸ تا ۱۰ روز کاری</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="bg-teal-100">
                          <CardTitle className="text-center text-teal-800 font-iran-kharazmi">
                            ویزای تجاری یک ساله چند بار ورود
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="font-bold font-iran-kharazmi">هزینه</div>
                                <div className="text-teal-600 font-iran-kharazmi">۴۷۰ دلار</div>
                              </div>
                              <div>
                                <div className="font-bold font-iran-kharazmi">مدت</div>
                                <div className="text-teal-600 font-iran-kharazmi">۱۲ تا ۱۴ روز کاری</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader className="bg-teal-600 text-white">
                        <CardTitle className="text-center font-iran-kharazmi">
                          مدارک مورد نیاز برای ویزای تجاری روسیه
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business%20visa%20documents%20details.jpg-zDkmKLNnItPiUhwdz45sw1mvBV5smz.jpeg"
                              alt="مدارک ویزای تجاری"
                              width={400}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <div>
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business%20visa%20details.jpg-4hyspZLPS08w5JeWV4ghwAfvPTr3f0.jpeg"
                              alt="جزئیات ویزای تجاری"
                              width={400}
                              height={600}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Embassy Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center font-iran-kharazmi">سفارت روسیه در تهران</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/russian%20embassy%20in%20Tehran%20.jpg-Vt4enjjZh1Tc1QNDynSU83s9nv1x03.jpeg"
                  alt="آدرس سفارت روسیه در تهران"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center font-iran-kharazmi">
                  نکات مهم پس از ورود با ویزای روسیه
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/after%20receiving%20visa.jpg-7xd26IOX2YkZy62DJviBMzDFiskgie.jpeg"
                  alt="نکات مهم پس از ورود"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center font-iran-kharazmi">سوالات متداول ویزای روسیه</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Q%26A.jpg-A6WYCguzTCWWPjbFQhB7hddR2JYmwN.jpeg"
                  alt="سوالات متداول"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-iran-kharazmi">مدارک ویزا</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6 text-teal-600 font-iran-kharazmi">مدارک عمومی</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">گذرنامه اصلی</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">کپی صفحه اول گذرنامه</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">تصویر رنگی ۴×۶</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">تکمیل فرم درخواست</span>
                  </li>
                </ul>

                <p className="mt-6 text-sm text-gray-600 font-iran-kharazmi">
                  گذرنامه باید حداقل ۶ ماه اعتبار داشته باشد و حداقل ۲ صفحه خالی برای ویزا داشته باشد.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-teal-600 font-iran-kharazmi">مدارک مالی</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">گواهی کار یا بازنشستگی</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">گردش حساب ۳ ماهه</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">بیمه مسافرتی</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-iran-kharazmi">رزرو هتل</span>
                  </li>
                </ul>

                <p className="mt-6 text-sm text-gray-600 font-iran-kharazmi">
                  حداقل موجودی حساب برای هر روز اقامت ۱۰۰ دلار در نظر گرفته می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-iran-kharazmi">مراحل اخذ ویزا</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right font-iran-kharazmi">۱. تهیه مدارک</AccordionTrigger>
                <AccordionContent className="text-right text-gray-600 font-iran-kharazmi">
                  تمام مدارک مورد نیاز را طبق لیست ارائه شده تهیه کنید و به دفتر ما تحویل دهید.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right font-iran-kharazmi">
                  ۲. تکمیل فرم و بررسی مدارک
                </AccordionTrigger>
                <AccordionContent className="text-right text-gray-600 font-iran-kharazmi">
                  کارشناسان ما فرم درخواست را تکمیل کرده و مدارک شما را بررسی می‌کنند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right font-iran-kharazmi">
                  ۳. تحویل به کنسولگری و پیگیری
                </AccordionTrigger>
                <AccordionContent className="text-right text-gray-600 font-iran-kharazmi">
                  مدارک به کنسولگری روسیه تحویل داده شده و روند بررسی پیگیری می‌شود.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-right font-iran-kharazmi">۴. دریافت پاسپورت</AccordionTrigger>
                <AccordionContent className="text-right text-gray-600 font-iran-kharazmi">
                  پس از تایید ویزا، گذرنامه همراه با ویزا به شما تحویل داده می‌شود.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 font-iran-kharazmi">
                برای دریافت مشاوره رایگان و کسب اطلاعات بیشتر با کارشناسان ما تماس بگیرید.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 font-iran-kharazmi">
                تماس با کارشناس
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 font-iran-kharazmi">اطلاعات تماس برای اخذ ویزای توریستی روسیه</h2>

            <div className="bg-white text-gray-800 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-right">
                  <h3 className="font-bold mb-4 font-iran-kharazmi">اطلاعات تماس</h3>
                  <div className="space-y-2 text-sm font-iran-kharazmi">
                    <p>آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                    <p>تلفن: ۰۲۱-۸۸۷۷۶۶۵۵</p>
                    <p>موبایل: ۰۹۱۲۳۴۵۶۷۸۹</p>
                    <p>ایمیل: info@pazirik.com</p>
                  </div>
                </div>

                <div className="text-right">
                  <h3 className="font-bold mb-4 font-iran-kharazmi">ساعات کاری</h3>
                  <div className="space-y-2 text-sm font-iran-kharazmi">
                    <p>شنبه تا چهارشنبه: ۸:۳۰ تا ۱۷:۰۰</p>
                    <p>پنج‌شنبه: ۸:۳۰ تا ۱۳:۰۰</p>
                    <p>جمعه: تعطیل</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="نام و نام خانوادگی" className="text-right font-iran-kharazmi" />
                    <Input placeholder="شماره تماس" className="text-right font-iran-kharazmi" />
                  </div>
                  <Input placeholder="موضوع" className="text-right font-iran-kharazmi" />
                  <Textarea placeholder="پیام شما" rows={4} className="text-right font-iran-kharazmi" />
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-iran-kharazmi">
                    ارسال پیام
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { useLanguage } from "@/hooks/use-language"

export default function BentoGrid() {
  const { language } = useLanguage()

  return (
    <div className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-secondary animate-fade-in">
          {language === "fa" ? "راه‌حل‌های جامع" : language === "ru" ? "Комплексные решения" : "Comprehensive Solutions"}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl animate-fade-in-delay">
          {language === "fa"
            ? "همه چیزی که برای ارتقای کسب‌وکار خود نیاز دارید"
            : language === "ru"
              ? "Все, что нужно для развития вашего бизнеса"
              : "Everything you need to elevate your business"}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2 group hover-lift">
            <div className="absolute inset-px rounded-lg bg-card lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                  {language === "fa" ? "دسترسی جهانی" : language === "ru" ? "Глобальный охват" : "Global Reach"}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  {language === "fa"
                    ? "اتصال کسب‌وکارها در سراسر جهان با شبکه گسترده و تخصص بین‌المللی ما."
                    : language === "ru"
                      ? "Соединяем предприятия по всему миру с нашей обширной сетью и международным опытом."
                      : "Connecting businesses worldwide with our extensive network and international expertise."}
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    alt="Global business network"
                    src="/global-business-network-world-map.jpg"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border lg:rounded-l-4xl" />
          </div>

          <div className="relative max-lg:row-start-1 group hover-lift">
            <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                  {language === "fa" ? "نوآوری" : language === "ru" ? "Инновации" : "Innovation"}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  {language === "fa"
                    ? "راه‌حل‌های پیشرفته که تحول و مزیت رقابتی را به همراه دارند."
                    : language === "ru"
                      ? "Передовые решения, которые обеспечивают трансформацию и конкурентное преимущество."
                      : "Cutting-edge solutions that drive transformation and competitive advantage."}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt="Innovation metrics"
                  src="/business-innovation-charts-and-graphs.jpg"
                  className="w-full max-lg:max-w-xs group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border max-lg:rounded-t-4xl" />
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group hover-lift">
            <div className="absolute inset-px rounded-lg bg-card" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                  {language === "fa" ? "تخصص" : language === "ru" ? "Экспертиза" : "Expertise"}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  {language === "fa"
                    ? "دانش عمیق صنعت و روش‌شناسی‌های اثبات‌شده برای رشد پایدار کسب‌وکار."
                    : language === "ru"
                      ? "Глубокие отраслевые знания и проверенные методологии для устойчивого роста бизнеса."
                      : "Deep industry knowledge and proven methodologies for sustainable business growth."}
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt="Business expertise"
                  src="/business-team-collaboration.png"
                  className="h-[min(152px,40cqw)] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border" />
          </div>

          <div className="relative lg:row-span-2 group hover-lift">
            <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                  {language === "fa"
                    ? "تحلیل‌های پیشرفته"
                    : language === "ru"
                      ? "Продвинутая аналитика"
                      : "Advanced Analytics"}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                  {language === "fa"
                    ? "بینش‌های مبتنی بر داده و گزارش‌دهی جامع برای راهنمایی تصمیم‌گیری‌های استراتژیک."
                    : language === "ru"
                      ? "Аналитические данные и комплексная отчетность для руководства стратегическими решениями."
                      : "Data-driven insights and comprehensive reporting to guide strategic decision-making."}
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10 group-hover:scale-105 transition-transform duration-300">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        Analytics.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">Dashboard.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    <div className="text-green-400 text-sm font-mono">
                      <div className="text-gray-500">// Business Intelligence Dashboard</div>
                      <div className="mt-2">const analytics = {`{`}</div>
                      <div className="ml-4 text-blue-300">revenue: '$2.4M',</div>
                      <div className="ml-4 text-blue-300">growth: '24%',</div>
                      <div className="ml-4 text-blue-300">clients: 150</div>
                      <div>{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

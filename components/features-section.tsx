"use client"

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

const features = [
  {
    nameKey: "strategicSolutions",
    descriptionKey: "strategicSolutionsDesc",
    icon: CloudArrowUpIcon,
  },
  {
    nameKey: "secureOperations",
    descriptionKey: "secureOperationsDesc",
    icon: LockClosedIcon,
  },
  {
    nameKey: "reliableInfrastructure",
    descriptionKey: "reliableInfrastructureDesc",
    icon: ServerIcon,
  },
]

export default function FeaturesSection() {
  const { language } = useLanguage()

  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-secondary">
                {language === "fa"
                  ? "تعالی ارائه شده"
                  : language === "ru"
                    ? "Превосходство доставлено"
                    : "Excellence Delivered"}
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
                {language === "fa"
                  ? "توانمندسازی موفقیت شما"
                  : language === "ru"
                    ? "Расширение возможностей вашего успеха"
                    : "Empowering Your Success"}
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                {language === "fa"
                  ? "در پازیریک، ما راه‌حل‌های جامعی ارائه می‌دهیم که کسب‌وکارها را متحول می‌کند و رشد پایدار را از طریق استراتژی‌های نوآورانه و روش‌شناسی‌های اثبات‌شده به همراه دارد."
                  : language === "ru"
                    ? "В Пазирик мы предоставляем комплексные решения, которые трансформируют бизнес и обеспечивают устойчивый рост через инновационные стратегии и проверенные методологии."
                    : "At Pazirik, we deliver comprehensive solutions that transform businesses and drive sustainable growth through innovative strategies and proven methodologies."}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.nameKey} className="relative pl-9 group">
                    <dt className="inline font-semibold text-foreground">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-secondary group-hover:text-accent transition-colors"
                      />
                      {getTranslation(language, feature.nameKey)}
                    </dt>{" "}
                    <dd className="inline">{getTranslation(language, feature.descriptionKey)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Pazirik business solutions dashboard"
            src="/professional-business-dashboard-interface.jpg"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-border sm:w-228 md:-ml-4 lg:-ml-0 hover-lift"
          />
        </div>
      </div>
    </div>
  )
}

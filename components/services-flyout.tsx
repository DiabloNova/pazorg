"use client"

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid"
import {
  DocumentTextIcon,
  CreditCardIcon,
  AcademicCapIcon, // replaced GraduationCapIcon with AcademicCapIcon
  TruckIcon,
  ArchiveBoxIcon,
  PresentationChartBarIcon,
  MegaphoneIcon,
  TagIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

const services = [
  {
    name: "russianVisa",
    description: "Professional visa application services",
    href: "/russian-visa",
    icon: DocumentTextIcon,
  },
  {
    name: "visaTypes",
    description: "Complete guide to Russian visa types",
    href: "/russia-visa",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "comprehensiveVisaGuide",
    description: "Detailed visa application guide",
    href: "/visa-types",
    icon: DocumentTextIcon,
  },
  {
    name: "sendingRubles",
    description: "Secure ruble transfer solutions",
    href: "/sending-rubles",
    icon: CreditCardIcon,
  },
  {
    name: "studyInRussia",
    description: "Educational consulting services",
    href: "/study-in-russia",
    icon: AcademicCapIcon, // replaced GraduationCapIcon with AcademicCapIcon
  },
  {
    name: "exportToRussia",
    description: "Export facilitation to Russian markets",
    href: "/export-to-russia",
    icon: TruckIcon,
  },
  {
    name: "importFromRussia",
    description: "Import services from Russia",
    href: "/import-from-russia",
    icon: ArchiveBoxIcon,
  },
  {
    name: "russianExhibitions",
    description: "Exhibition participation support",
    href: "/russian-exhibitions",
    icon: PresentationChartBarIcon,
  },
  {
    name: "productMarketing",
    description: "Product marketing in Russia",
    href: "/product-marketing",
    icon: MegaphoneIcon,
  },
  {
    name: "brandMarketing",
    description: "Brand development and marketing",
    href: "/brand-marketing",
    icon: TagIcon,
  },
]

const callsToAction = [
  { name: "Contact sales", href: "/contact", icon: PhoneIcon },
  { name: "Watch demo", href: "#demo", icon: PlayCircleIcon },
]

export function ServicesFlyout() {
  const { language } = useLanguage()

  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors px-3 py-2">
        <span>{getTranslation(language, "services")}</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-card border text-sm outline-1 -outline-offset-1 outline-border">
          <div className="p-4">
            {services.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-muted/50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-secondary">
                  <item.icon aria-hidden="true" className="size-6 text-muted-foreground group-hover:text-white" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-foreground">
                    {getTranslation(language, item.name)}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-border bg-muted/50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-foreground hover:bg-muted"
              >
                <item.icon aria-hidden="true" className="size-5 flex-none text-muted-foreground" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}

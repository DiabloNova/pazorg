export const languages = {
  fa: "فارسی",
  ru: "Русский",
  en: "English",
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "fa"

export const translations = {
  fa: {
    // Navigation
    home: "خانه",
    services: "خدمات",
    about: "درباره ما",
    contact: "تماس با ما",

    // Hero Section
    heroTitle: "پازیریک - پل ارتباطی شما با روسیه",
    heroSubtitle: "ارائه خدمات تخصصی تجاری، آموزشی و گردشگری برای توسعه روابط ایران و روسیه",
    getStarted: "شروع کنید",
    learnMore: "بیشتر بدانید",

    // Features Section
    strategicSolutions: "راه‌حل‌های استراتژیک.",
    strategicSolutionsDesc: "استراتژی‌های جامع کسب‌وکار متناسب با رشد و حداکثرسازی کارایی عملیاتی در تمام بخش‌ها.",
    secureOperations: "عملیات امن.",
    secureOperationsDesc:
      "پروتکل‌های امنیتی سطح سازمانی که اطمینان می‌دهد داده‌ها و عملیات کسب‌وکار شما همیشه محافظت شده باقی می‌ماند.",
    reliableInfrastructure: "زیرساخت قابل اعتماد.",
    reliableInfrastructureDesc: "سیستم‌ها و فرآیندهای قوی طراحی‌شده برای پشتیبانی از تداوم کسب‌وکار و رشد مقیاس‌پذیر شما.",

    // Services
    russianVisa: "اخذ ویزای روسیه",
    visaTypes: "انواع ویزای روسیه",
    comprehensiveVisaGuide: "راهنمای جامع ویزای روسیه",
    sendingRubles: "ارسال روبل به روسیه",
    studyInRussia: "تحصیل در روسیه",
    exportToRussia: "صادرات به روسیه",
    importFromRussia: "واردات از روسیه",
    russianExhibitions: "شرکت در نمایشگاه‌های روسیه",
    productMarketing: "بازاریابی محصول در روسیه",
    brandMarketing: "بازاریابی برند",

    // Russian Visa Page
    russianVisaTitle: "خدمات اخذ ویزای روسیه",
    russianVisaSubtitle: "راهنمای کامل و خدمات تخصصی برای دریافت ویزای روسیه",
    touristVisa: "ویزای توریستی",
    businessVisa: "ویزای تجاری",
    studentVisa: "ویزای دانشجویی",
    workVisa: "ویزای کاری",
    requiredDocuments: "مدارک مورد نیاز",
    passportCopy: "کپی پاسپورت",
    applicationForm: "فرم درخواست",
    photos: "عکس‌های شخصی",
    invitation: "دعوت‌نامه",
    processSteps: "مراحل انجام کار",
    consultation: "مشاوره رایگان",
    documentPrep: "آماده‌سازی مدارک",
    submission: "ارسال درخواست",
    tracking: "پیگیری وضعیت",

    // Hero Section
    heroTitle: "پازیریک - پل ارتباطی شما با روسیه",
    heroSubtitle: "ارائه خدمات تخصصی تجاری، آموزشی و گردشگری برای توسعه روابط ایران و روسیه",
    getStarted: "شروع کنید",
    learnMore: "بیشتر بدانید",

    // Features Section
    strategicSolutions: "راه‌حل‌های استراتژیک.",
    strategicSolutionsDesc: "استراتژی‌های جامع کسب‌وکار متناسب با رشد و حداکثرسازی کارایی عملیاتی در تمام بخش‌ها.",
    secureOperations: "عملیات امن.",
    secureOperationsDesc:
      "پروتکل‌های امنیتی سطح سازمانی که اطمینان می‌دهد داده‌ها و عملیات کسب‌وکار شما همیشه محافظت شده باقی می‌ماند.",
    reliableInfrastructure: "زیرساخت قابل اعتماد.",
    reliableInfrastructureDesc: "سیستم‌ها و فرآیندهای قوی طراحی‌شده برای پشتیبانی از تداوم کسب‌وکار و رشد مقیاس‌پذیر شما.",

    // Services
    sendingRubles: "ارسال روبل به روسیه",
    studyInRussia: "تحصیل در روسیه",
    exportToRussia: "صادرات به روسیه",
    importFromRussia: "واردات از روسیه",
    russianExhibitions: "شرکت در نمایشگاه‌های روسیه",
    productMarketing: "بازاریابی محصول در روسیه",
    brandMarketing: "بازاریابی برند",

    // Sending Rubles Page
    sendingRublesTitle: "خدمات ارسال روبل به روسیه",
    sendingRublesSubtitle: "انتقال امن و سریع پول به روسیه با بهترین نرخ تبدیل",
    transferMethods: "روش‌های انتقال",
    bankTransfer: "حواله بانکی",
    digitalWallet: "کیف پول دیجیتال",
    cashPickup: "دریافت نقدی",
    onlineTransfer: "انتقال آنلاین",
    exchangeRates: "نرخ تبدیل",
    competitiveRates: "نرخ‌های رقابتی",
    realTimeRates: "نرخ‌های لحظه‌ای",
    noHiddenFees: "بدون کارمزد مخفی",
    transparentPricing: "قیمت‌گذاری شفاف",

    // Study in Russia Page
    studyInRussiaTitle: "خدمات تحصیل در روسیه",
    studyInRussiaSubtitle: "راهنمای کامل برای ادامه تحصیل در بهترین دانشگاه‌های روسیه",
    universities: "دانشگاه‌ها",
    topUniversities: "دانشگاه‌های برتر",
    medicalUniversities: "دانشگاه‌های پزشکی",
    engineeringUniversities: "دانشگاه‌های فنی",
    languagePrograms: "برنامه‌های زبان",
    admissionProcess: "فرآیند پذیرش",
    applicationGuidance: "راهنمایی درخواست",
    documentTranslation: "ترجمه مدارک",
    visaSupport: "پشتیبانی ویزا",
    accommodationHelp: "کمک برای اقامت",

    // Export to Russia Page
    exportToRussiaTitle: "خدمات صادرات به روسیه",
    exportToRussiaSubtitle: "راهنمای جامع صادرات کالا و خدمات به بازار روسیه",
    exportProducts: "محصولات صادراتی",
    agriculturalProducts: "محصولات کشاورزی",
    industrialGoods: "کالاهای صنعتی",
    textileProducts: "محصولات نساجی",
    foodProducts: "مواد غذایی",
    exportProcedures: "رویه‌های صادرات",
    customsDocuments: "مدارک گمرکی",
    qualityCertificates: "گواهی‌های کیفیت",
    shippingArrangements: "ترتیبات حمل‌ونقل",
    insuranceServices: "خدمات بیمه",

    // Import from Russia Page
    importFromRussiaTitle: "خدمات واردات از روسیه",
    importFromRussiaSubtitle: "واردات امن و مقرون‌به‌صرفه کالاهای روسی به ایران",
    importProducts: "محصولات وارداتی",
    energyProducts: "محصولات انرژی",
    rawMaterials: "مواد خام",
    machinery: "ماشین‌آلات",
    chemicalProducts: "محصولات شیمیایی",
    importServices: "خدمات واردات",
    supplierVerification: "تأیید تأمین‌کنندگان",
    qualityInspection: "بازرسی کیفیت",
    logisticsSupport: "پشتیبانی لجستیک",
    customsClearance: "ترخیص گمرکی",

    // Russian Exhibitions Page
    russianExhibitionsTitle: "شرکت در نمایشگاه‌های روسیه",
    russianExhibitionsSubtitle: "حضور موثر در نمایشگاه‌های تخصصی روسیه",
    exhibitionTypes: "انواع نمایشگاه",
    tradeShows: "نمایشگاه‌های تجاری",
    industrialExpos: "نمایشگاه‌های صنعتی",
    techExhibitions: "نمایشگاه‌های فناوری",
    culturalEvents: "رویدادهای فرهنگی",
    participationServices: "خدمات شرکت",
    boothDesign: "طراحی غرفه",
    logisticsManagement: "مدیریت لجستیک",
    interpreterServices: "خدمات ترجمه",
    networkingSupport: "پشتیبانی شبکه‌سازی",

    // Product Marketing Page
    productMarketingTitle: "بازاریابی محصول در روسیه",
    productMarketingSubtitle: "استراتژی‌های موثر برای معرفی محصولات در بازار روسیه",
    marketingStrategies: "استراتژی‌های بازاریابی",
    digitalMarketing: "بازاریابی دیجیتال",
    traditionalAdvertising: "تبلیغات سنتی",
    socialMediaMarketing: "بازاریابی شبکه‌های اجتماعی",
    influencerMarketing: "بازاریابی اینفلوئنسر",
    marketResearch: "تحقیقات بازار",
    competitorAnalysis: "تحلیل رقبا",
    targetAudience: "مخاطب هدف",
    pricingStrategy: "استراتژی قیمت‌گذاری",
    distributionChannels: "کانال‌های توزیع",

    // Brand Marketing Page
    brandMarketingTitle: "بازاریابی برند",
    brandMarketingSubtitle: "ساخت و تقویت هویت برند در بازارهای بین‌المللی",
    brandingServices: "خدمات برندسازی",
    brandIdentity: "هویت برند",
    logoDesign: "طراحی لوگو",
    brandGuidelines: "راهنمای برند",
    brandPositioning: "موقعیت‌یابی برند",
    brandStrategy: "استراتژی برند",
    brandAwareness: "آگاهی از برند",
    brandLoyalty: "وفاداری به برند",
    brandEquity: "ارزش برند",
    brandManagement: "مدیریت برند",

    // Footer & Company Info
    companyInfo: "اطلاعات شرکت",
    address: "آدرس",
    fullAddress: "تهران، یوسف آباد، خیابان عبدالمجید اکبری، برج سپهر سایه، طبقه ۱۰، واحد ۱۰۰۴",
    phone: "تلفن",
    ceo: "مدیرعامل",
    coo: "مدیر عملیات",
    ceoName: "دکتر حمیدرضا بیات",
    cooName: "دکتر زینب احمدی (مدیرعامل موسسه آبادیس پارسیان دانش)",
    aboutUsTitle: "درباره پازیریک",
    aboutUsDescription:
      "پازیریک یکی از پیشروترین شرکت‌های ارائه خدمات تجاری و مشاوره‌ای در زمینه توسعه روابط تجاری ایران و روسیه است.",

    // Welcome popup
    welcomeTitle: "به وب‌سایت پازیریک خوش آمدید!",
    welcomeMessage: "از آخرین خدمات و فرصت‌های تجاری با روسیه مطلع شوید.",
    joinCommunity: "عضویت در جامعه ما",
  },
  ru: {
    // Navigation
    home: "Главная",
    services: "Услуги",
    about: "О нас",
    contact: "Контакты",

    // Hero Section
    heroTitle: "پازیریک - Ваш мост в Россию",
    heroSubtitle:
      "Предоставление специализированных коммерческих, образовательных и туристических услуг для развития отношений между Ираном и Россией",
    getStarted: "Начать",
    learnMore: "Узнать больше",

    // Features Section
    strategicSolutions: "Стратегические решения.",
    strategicSolutionsDesc:
      "Комплексные бизнес-стратегии, адаптированные для стимулирования роста и максимизации операционной эффективности во всех секторах.",
    secureOperations: "Безопасные операции.",
    secureOperationsDesc:
      "Протоколы безопасности корпоративного уровня, обеспечивающие постоянную защиту ваших бизнес-данных и операций.",
    reliableInfrastructure: "Надежная инфраструктура.",
    reliableInfrastructureDesc:
      "Надежные системы и процессы, разработанные для поддержки непрерывности бизнеса и масштабируемого роста.",

    // Services
    russianVisa: "Получение российской визы",
    visaTypes: "Типы российских виз",
    comprehensiveVisaGuide: "Полное руководство по российским визам",
    sendingRubles: "Отправка рублей в Россию",
    studyInRussia: "Обучение в России",
    exportToRussia: "Экспорт в Россию",
    importFromRussia: "Импорт из России",
    russianExhibitions: "Участие в российских выставках",
    productMarketing: "Маркетинг продукта в России",
    brandMarketing: "Маркетинг бренда",

    // Russian Visa Page
    russianVisaTitle: "Услуги получения российской визы",
    russianVisaSubtitle: "Полный гид и специализированные услуги для получения российской визы",
    touristVisa: "Туристическая виза",
    businessVisa: "Бизнес-виза",
    studentVisa: "Студенческая виза",
    workVisa: "Рабочая виза",
    requiredDocuments: "Необходимые документы",
    passportCopy: "Копия паспорта",
    applicationForm: "Форма заявки",
    photos: "Личные фотографии",
    invitation: "Приглашение",
    processSteps: "Этапы процесса",
    consultation: "Бесплатная консультация",
    documentPrep: "Подготовка документов",
    submission: "Подача заявки",
    tracking: "Отслеживание статуса",

    // Sending Rubles Page
    sendingRublesTitle: "Услуги отправки рублей в Россию",
    sendingRublesSubtitle: "Безопасный и быстрый перевод денег в Россию по лучшему курсу",
    transferMethods: "Способы перевода",
    bankTransfer: "Банковский перевод",
    digitalWallet: "Цифровой кошелек",
    cashPickup: "Получение наличными",
    onlineTransfer: "Онлайн-перевод",
    exchangeRates: "Обменные курсы",
    competitiveRates: "Конкурентные курсы",
    realTimeRates: "Курсы в реальном времени",
    noHiddenFees: "Без скрытых комиссий",
    transparentPricing: "Прозрачное ценообразование",

    // Study in Russia Page
    studyInRussiaTitle: "Услуги обучения в России",
    studyInRussiaSubtitle: "Полный гид для продолжения обучения в лучших университетах России",
    universities: "Университеты",
    topUniversities: "Лучшие университеты",
    medicalUniversities: "Медицинские университеты",
    engineeringUniversities: "Инженерные университеты",
    languagePrograms: "Программы языка",
    admissionProcess: "Процесс поступления",
    applicationGuidance: "Руководство по подаче заявки",
    documentTranslation: "Перевод документов",
    visaSupport: "Поддержка визы",
    accommodationHelp: "Помощь с размещением",

    // Export to Russia Page
    exportToRussiaTitle: "Услуги экспорта в Россию",
    exportToRussiaSubtitle: "Комплексное руководство по экспорту товаров и услуг на российский рынок",
    exportProducts: "Экспортные товары",
    agriculturalProducts: "Сельскохозяйственная продукция",
    industrialGoods: "Промышленные товары",
    textileProducts: "Текстильная продукция",
    foodProducts: "Пищевые продукты",
    exportProcedures: "Процедуры экспорта",
    customsDocuments: "Таможенные документы",
    qualityCertificates: "Сертификаты качества",
    shippingArrangements: "Организация доставки",
    insuranceServices: "Страховые услуги",

    // Import from Russia Page
    importFromRussiaTitle: "Услуги импорта из России",
    importFromRussiaSubtitle: "Безопасный и экономичный импорт российских товаров в Иран",
    importProducts: "Импортные товары",
    energyProducts: "Энергетические продукты",
    rawMaterials: "Сырье",
    machinery: "Оборудование",
    chemicalProducts: "Химическая продукция",
    importServices: "Услуги импорта",
    supplierVerification: "Проверка поставщиков",
    qualityInspection: "Контроль качества",
    logisticsSupport: "Логистическая поддержка",
    customsClearance: "Таможенное оформление",

    // Russian Exhibitions Page
    russianExhibitionsTitle: "Участие в российских выставках",
    russianExhibitionsSubtitle: "Эффективное участие в специализированных российских выставках",
    exhibitionTypes: "Типы выставок",
    tradeShows: "Торговые выставки",
    industrialExpos: "Промышленные выставки",
    techExhibitions: "Технологические выставки",
    culturalEvents: "Культурные мероприятия",
    participationServices: "Услуги участия",
    boothDesign: "Дизайн павильона",
    logisticsManagement: "Управление логистикой",
    interpreterServices: "Услуги перевода",
    networkingSupport: "Поддержка сетевого взаимодействия",

    // Product Marketing Page
    productMarketingTitle: "Маркетинг продукта в России",
    productMarketingSubtitle: "Эффективные стратегии для продвижения товаров на российский рынок",
    marketingStrategies: "Стратегии маркетинга",
    digitalMarketing: "Цифровой маркетинг",
    traditionalAdvertising: "Традиционная реклама",
    socialMediaMarketing: "Маркетинг в социальных сетях",
    influencerMarketing: "Маркетинг через инфлюенсеров",
    marketResearch: "Рыночные исследования",
    competitorAnalysis: "Анализ конкурентов",
    targetAudience: "Целевая аудитория",
    pricingStrategy: "Стратегия ценообразования",
    distributionChannels: "Каналы дистрибуции",

    // Brand Marketing Page
    brandMarketingTitle: "Маркетинг бренда",
    brandMarketingSubtitle: "Создание и усиление бренда на международных рынках",
    brandingServices: "Услуги брендинга",
    brandIdentity: "Идентичность бренда",
    logoDesign: "Дизайн логотипа",
    brandGuidelines: "Руководство по бренду",
    brandPositioning: "Позиционирование бренда",
    brandStrategy: "Стратегия бренда",
    brandAwareness: "Реклама бренда",
    brandLoyalty: "Лояльность к бренду",
    brandEquity: "Эквитет бренда",
    brandManagement: "Управление брендом",

    // Footer & Company Info
    companyInfo: "Информация о компании",
    address: "Адрес",
    fullAddress: "Тегеран, Юсф Абад, улица Абдольмаджид Акбери, Башара Сепхр Сайе, 10 этаж, 1004 офис",
    phone: "Телефон",
    ceo: "Генеральный директор",
    coo: "Директор по операциям",
    ceoName: "Доктор Хамидрضا Бейат",
    cooName: "Доктор Зинаб Ахмеди (Генеральный директор Абадис Париан Данаши)",
    aboutUsTitle: "О пازیریک",
    aboutUsDescription:
      "پازیریک — одна из ведущих компаний, предоставляющих коммерческие и консультационные услуги для развития торговых отношений между Ираном и Россией.",

    // Welcome popup
    welcomeTitle: "Добро пожаловать на сайт пازیریک!",
    welcomeMessage: "Не упустите последние услуги и деловые возможности с Россией.",
    joinCommunity: "Присоединиться к сообществу",
  },
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About Us",
    contact: "Contact",

    // Hero Section
    heroTitle: "پازیریک - Your Bridge to Russia",
    heroSubtitle: "Providing specialized commercial, educational and tourism services to develop Iran-Russia relations",
    getStarted: "Get Started",
    learnMore: "Learn More",

    // Features Section
    strategicSolutions: "Strategic Solutions.",
    strategicSolutionsDesc:
      "Comprehensive business strategies tailored to drive growth and maximize operational efficiency across all sectors.",
    secureOperations: "Secure Operations.",
    secureOperationsDesc:
      "Enterprise-grade security protocols ensuring your business data and operations remain protected at all times.",
    reliableInfrastructure: "Reliable Infrastructure.",
    reliableInfrastructureDesc:
      "Robust systems and processes designed to support your business continuity and scalable growth.",

    // Services
    russianVisa: "Russian Visa Application",
    visaTypes: "Russian Visa Types",
    comprehensiveVisaGuide: "Comprehensive Russian Visa Guide",
    sendingRubles: "Sending Rubles to Russia",
    studyInRussia: "Study in Russia",
    exportToRussia: "Export to Russia",
    importFromRussia: "Import from Russia",
    russianExhibitions: "Participate in Russian Exhibitions",
    productMarketing: "Product Marketing in Russia",
    brandMarketing: "Brand Marketing",

    // Russian Visa Page
    russianVisaTitle: "Russian Visa Services",
    russianVisaSubtitle: "Complete guide and specialized services for obtaining a Russian visa",
    touristVisa: "Tourist Visa",
    businessVisa: "Business Visa",
    studentVisa: "Student Visa",
    workVisa: "Work Visa",
    requiredDocuments: "Required Documents",
    passportCopy: "Passport Copy",
    applicationForm: "Application Form",
    photos: "Personal Photos",
    invitation: "Invitation",
    processSteps: "Process Steps",
    consultation: "Free Consultation",
    documentPrep: "Document Preparation",
    submission: "Application Submission",
    tracking: "Status Tracking",

    // Sending Rubles Page
    sendingRublesTitle: "Sending Rubles to Russia Services",
    sendingRublesSubtitle: "Safe and fast money transfer to Russia with the best exchange rates",
    transferMethods: "Transfer Methods",
    bankTransfer: "Bank Transfer",
    digitalWallet: "Digital Wallet",
    cashPickup: "Cash Pickup",
    onlineTransfer: "Online Transfer",
    exchangeRates: "Exchange Rates",
    competitiveRates: "Competitive Rates",
    realTimeRates: "Real-time Rates",
    noHiddenFees: "No Hidden Fees",
    transparentPricing: "Transparent Pricing",

    // Study in Russia Page
    studyInRussiaTitle: "Study in Russia Services",
    studyInRussiaSubtitle: "Complete guide for continuing your studies in the best universities in Russia",
    universities: "Universities",
    topUniversities: "Top Universities",
    medicalUniversities: "Medical Universities",
    engineeringUniversities: "Engineering Universities",
    languagePrograms: "Language Programs",
    admissionProcess: "Admission Process",
    applicationGuidance: "Application Guidance",
    documentTranslation: "Document Translation",
    visaSupport: "Visa Support",
    accommodationHelp: "Accommodation Help",

    // Export to Russia Page
    exportToRussiaTitle: "Export to Russia Services",
    exportToRussiaSubtitle: "Comprehensive guide for exporting goods and services to Russian markets",
    exportProducts: "Export Products",
    agriculturalProducts: "Agricultural Products",
    industrialGoods: "Industrial Goods",
    textileProducts: "Textile Products",
    foodProducts: "Food Products",
    exportProcedures: "Export Procedures",
    customsDocuments: "Customs Documents",
    qualityCertificates: "Quality Certificates",
    shippingArrangements: "Shipping Arrangements",
    insuranceServices: "Insurance Services",

    // Import from Russia Page
    importFromRussiaTitle: "Import from Russia Services",
    importFromRussiaSubtitle: "Safe and cost-effective import of Russian goods to Iran",
    importProducts: "Import Products",
    energyProducts: "Energy Products",
    rawMaterials: "Raw Materials",
    machinery: "Machinery",
    chemicalProducts: "Chemical Products",
    importServices: "Import Services",
    supplierVerification: "Supplier Verification",
    qualityInspection: "Quality Inspection",
    logisticsSupport: "Logistics Support",
    customsClearance: "Customs Clearance",

    // Russian Exhibitions Page
    russianExhibitionsTitle: "Participate in Russian Exhibitions",
    russianExhibitionsSubtitle: "Effective participation in specialized Russian exhibitions",
    exhibitionTypes: "Types of Exhibitions",
    tradeShows: "Trade Shows",
    industrialExpos: "Industrial Expos",
    techExhibitions: "Tech Exhibitions",
    culturalEvents: "Cultural Events",
    participationServices: "Participation Services",
    boothDesign: "Booth Design",
    logisticsManagement: "Logistics Management",
    interpreterServices: "Interpreter Services",
    networkingSupport: "Networking Support",

    // Product Marketing Page
    productMarketingTitle: "Product Marketing in Russia",
    productMarketingSubtitle: "Effective strategies for promoting products on the Russian market",
    marketingStrategies: "Marketing Strategies",
    digitalMarketing: "Digital Marketing",
    traditionalAdvertising: "Traditional Advertising",
    socialMediaMarketing: "Social Media Marketing",
    influencerMarketing: "Influencer Marketing",
    marketResearch: "Market Research",
    competitorAnalysis: "Competitor Analysis",
    targetAudience: "Target Audience",
    pricingStrategy: "Pricing Strategy",
    distributionChannels: "Distribution Channels",

    // Brand Marketing Page
    brandMarketingTitle: "Brand Marketing",
    brandMarketingSubtitle: "Building and strengthening brand identity on international markets",
    brandingServices: "Branding Services",
    brandIdentity: "Brand Identity",
    logoDesign: "Logo Design",
    brandGuidelines: "Brand Guidelines",
    brandPositioning: "Brand Positioning",
    brandStrategy: "Brand Strategy",
    brandAwareness: "Brand Awareness",
    brandLoyalty: "Brand Loyalty",
    brandEquity: "Brand Equity",
    brandManagement: "Brand Management",

    // Footer & Company Info
    companyInfo: "Company Info",
    address: "Address",
    fullAddress: "Tehran, Yusufabad, Abdolmajid Akberi St, Sepher Sae Building, 10th Floor, Unit 1004",
    phone: "Phone",
    ceo: "CEO",
    coo: "COO",
    ceoName: "Dr. Hamidreza Beyat",
    cooName: "Dr. Zinab Ahmadi (CEO of Abadis Parsian Danesh)",
    aboutUsTitle: "About پازیریک",
    aboutUsDescription:
      "پازیریک is one of the leading companies providing specialized commercial and consulting services to develop Iran-Russia relations.",

    // Welcome popup
    welcomeTitle: "Welcome to پازیریک Website!",
    welcomeMessage: "Don't miss out on the latest services and business opportunities with Russia.",
    joinCommunity: "Join Our Community",
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}

/*
 * ───────────────────────────────────────────────────────────────
 *  All site content lives here. Edit this file to update the site.
 *  Every text has an English (en) and Arabic (ar) version.
 *  كل محتوى الموقع موجود هون — عدّل هالملف بس لتحدّث الموقع.
 * ───────────────────────────────────────────────────────────────
 */
window.PORTFOLIO = {
  profile: {
    name: { en: "Miemon Khateeb", ar: "ميمون الخطيب" },
    role: { en: "Backend & Full-Stack Engineer", ar: "مهندس باك إند وفول ستاك" },
    lead: {
      en: "I build reliable APIs, databases and the Linux servers they run on — then ship the web dashboards and Flutter apps on top of them. 5+ years delivering production systems for clients in Syria, Iraq and the UAE.",
      ar: "أبني واجهات برمجية (APIs) وقواعد بيانات موثوقة وسيرفرات لينكس التي تعمل عليها، ثم أُطلق فوقها لوحات تحكم ويب وتطبيقات Flutter. أكثر من 5 سنوات في تسليم أنظمة إنتاجية لعملاء في سوريا والعراق والإمارات."
    },
    about: {
      en: [
        "I’m a full-stack engineer based in Damascus, working remotely with teams in Iraq and the UAE. My core is the backend: designing APIs and PostgreSQL / MySQL schemas, securing them, and running them on Linux servers.",
        "I take products all the way to the screen with React or Laravel dashboards and Flutter apps, and I care most about clean data models, fast queries and systems that keep running long after launch."
      ],
      ar: [
        "مهندس فول ستاك مقيم في دمشق، أعمل عن بُعد مع فرق في العراق والإمارات. تخصصي الأساسي هو الباك إند: تصميم الواجهات البرمجية ومخططات قواعد بيانات PostgreSQL وMySQL، وتأمينها، وتشغيلها على سيرفرات لينكس.",
        "أوصل بالمنتج حتى الشاشة عبر لوحات تحكم React أو Laravel وتطبيقات Flutter، وأهتم أكثر شيء بنماذج بيانات نظيفة، واستعلامات سريعة، وأنظمة تبقى شغّالة بعد الإطلاق بوقت طويل."
      ]
    },
    location: { en: "Damascus, Syria · works remotely", ar: "دمشق، سوريا · أعمل عن بُعد" },
    email: "mimonkh544@gmail.com",
    phone: "+963 989 117 104",    // mobile number (shown + used for the "Call" link)
    whatsapp: "+963 989 117 104", // WhatsApp number (write it any readable way; the link uses the digits only)
    github: "https://github.com/mimonkh",
    linkedin: "www.linkedin.com/in/miemon-khateeb",
    cv: "assets/cv/Miemon-Khateeb-CV.pdf" // ← to update the CV, replace this file (same name)
  },

  stats: [
    { value: "5+", label: { en: "years of experience", ar: "سنوات خبرة" } },
    { value: "15+", label: { en: "production projects", ar: "مشروع في الإنتاج" } },
    { value: "5+", label: { en: "live apps & platforms", ar: "تطبيقات ومنصات تعمل حالياً" } },
    { value: "3+", label: { en: "countries served", ar: "دول خدمت عملاء فيها" } }
  ],

  // level: 3 = expert, 2 = strong, 1 = background
  skills: [
    {
      level: 3,
      title: { en: "Expert", ar: "خبير" },
      items: [
        { name: "Node.js", note: "TypeScript · Fastify · Express · NestJS" },
        { name: "Laravel", note: "PHP · Sanctum · Livewire · Queues" },
        { name: "PostgreSQL", note: { en: "Schema design · query & index tuning", ar: "تصميم المخططات · تحسين الاستعلامات والفهارس" } },
        { name: "MySQL", note: { en: "Relational modelling · optimisation", ar: "النمذجة العلائقية · التحسين" } }
      ]
    },
    {
      level: 2,
      title: { en: "Strong", ar: "خبرة جيدة" },
      items: [
        { name: "Go", note: { en: "Healthcare services · FHIR", ar: "خدمات صحية · FHIR" } },
        { name: "MongoDB", note: { en: "Document modelling", ar: "نمذجة المستندات" } },
        { name: "Linux servers", note: "Nginx · PM2 · Docker · SSL" },
        { name: "Redis", note: { en: "Caching · queues · pub/sub", ar: "تخزين مؤقت · طوابير · pub/sub" } }
      ]
    },
    {
      level: 1,
      title: { en: "Background", ar: "خلفية عملية" },
      items: [
        { name: "Flutter", note: { en: "Mobile apps end to end", ar: "تطبيقات موبايل كاملة" } },
        { name: "Odoo", note: "ERP · Python" },
        { name: "React", note: { en: "Admin dashboards", ar: "لوحات تحكم" } },
        { name: "Firebase", note: "FCM · Auth" }
      ]
    }
  ],
  tools: ["TypeScript", "PHP", "REST APIs", "Prisma", "Drizzle ORM", "TypeORM", "JWT", "OAuth", "RabbitMQ", "MQTT", "FHIR", "Stripe", "Docker", "Nginx", "Git", "Turborepo"],

  experience: [
    {
      role: { en: "Backend Developer", ar: "مطوّر باك إند" },
      company: "Space Craft",
      place: { en: "Erbil, Iraq · Remote", ar: "أربيل، العراق · عن بُعد" },
      period: { en: "Oct 2025 — Nov 2026", ar: "تشرين الأول 2025 — تشرين الثاني 2026" },
      points: {
        en: [
          "Built a full Hospital Information System (HIS) for an international hospital in Go and PostgreSQL, on the FHIR healthcare data standard.",
          "Built WePadel and Sahati: Laravel APIs and web dashboards on PostgreSQL powering their Flutter apps on Google Play.",
          "Built backend services for the company’s mobile applications."
        ],
        ar: [
          "بناء نظام معلومات مستشفى (HIS) متكامل لمستشفى دولي باستخدام Go وPostgreSQL ومعيار FHIR للبيانات الصحية.",
          "بناء WePadel وصحتي: واجهات Laravel ولوحات تحكم ويب على PostgreSQL تشغّل تطبيقاتهما المنشورة على Google Play.",
          "بناء خدمات الباك إند لتطبيقات الموبايل الخاصة بالشركة."
        ]
      }
    },
    {
      role: { en: "Full-Stack Developer", ar: "مطوّر فول ستاك" },
      company: { en: "Freelance", ar: "عمل حر" },
      place: { en: "Remote", ar: "عن بُعد" },
      period: { en: "2023 — 2024", ar: "2023 — 2024" },
      points: {
        en: ["Delivered complete products end to end: Flutter mobile apps, Laravel backends and admin dashboards on PostgreSQL or MySQL."],
        ar: ["تسليم منتجات كاملة من البداية للنهاية: تطبيقات Flutter، وباك إند Laravel، ولوحات تحكم إدارية مع PostgreSQL أو MySQL."]
      }
    },
    {
      role: { en: "Backend Developer", ar: "مطوّر باك إند" },
      company: "S-apps",
      place: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      period: { en: "Feb 2022 — Nov 2026", ar: "شباط 2022 — تشرين الثاني 2026" },
      points: {
        en: [
          "Designed and built REST APIs with Node.js, Fastify, Prisma and PostgreSQL for products including SWIN, iShow, Ginco Construction and Al-Ajami.",
          "Designed and tuned PostgreSQL schemas, queries and indexes for performance and scale.",
          "Implemented secure authentication (JWT, OAuth) and integrated third-party APIs."
        ],
        ar: [
          "تصميم وبناء واجهات REST باستخدام Node.js وFastify وPrisma وPostgreSQL لمنتجات منها SWIN وiShow وGinco والعجمي.",
          "تصميم مخططات PostgreSQL وتحسين الاستعلامات والفهارس للأداء وقابلية التوسع.",
          "بناء مصادقة آمنة (JWT وOAuth) وربط واجهات برمجية خارجية."
        ]
      }
    },
    {
      role: { en: "IT Support", ar: "دعم تقني" },
      company: { en: "Syrian Family Planning Association", ar: "الجمعية السورية لتنظيم الأسرة" },
      place: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      period: { en: "Feb 2020", ar: "شباط 2020" },
      points: { en: ["IT support for the organisation’s staff and systems."], ar: ["دعم تقني لموظفي الجمعية وأنظمتها."] }
    }
  ],

  // filter keys used by the tech filter buttons
  filters: [
    { key: "all", label: { en: "All", ar: "الكل" } },
    { key: "node", label: "Node.js" },
    { key: "laravel", label: "Laravel" },
    { key: "go", label: "Go" },
    { key: "flutter", label: "Flutter" },
    { key: "react", label: "React" }
  ],

  // hue = colour of the project's badge (0–360)
  clientProjects: [
    {
      name: { en: "Hospital Information System", ar: "نظام معلومات المستشفى (HIS)" },
      badge: "HIS", hue: 200, featured: true,
      where: { en: "International hospital · Iraq & abroad", ar: "مستشفى دولي · العراق وخارجه" },
      desc: {
        en: "A full HIS for an international hospital, built on the FHIR healthcare data standard, with a lightweight front end made of native Web Components.",
        ar: "نظام معلومات مستشفى متكامل لمستشفى دولي، مبني على معيار FHIR للبيانات الصحية، بواجهة خفيفة مبنية بـ Web Components أصلية."
      },
      tech: ["Go", "PostgreSQL", "FHIR", "Web Components"],
      keys: ["go"],
      links: [],
      private: true
    },
    {
      name: { en: "WePadel", ar: "WePadel" },
      badge: "WP", hue: 145,
      where: { en: "Padel clubs · Iraq", ar: "صالات البادل · العراق" },
      desc: {
        en: "Platform for padel clubs: an admin web dashboard for the clubs and a mobile app for players.",
        ar: "منصة لصالات البادل: لوحة تحكم ويب للصالات وتطبيق موبايل للاعبين."
      },
      tech: ["Laravel", "Flutter", "PostgreSQL"],
      keys: ["laravel", "flutter"],
      links: [
        { type: "web", href: "https://wepadeliq.com/" },
        { type: "play", href: "https://play.google.com/store/apps/details?id=com.spacenet.wepadel_user.wepaddel" }
      ]
    },
    {
      name: { en: "Sahati", ar: "صحتي" },
      badge: "SA", hue: 172,
      where: { en: "Health centers · Iraq", ar: "المراكز الصحية · العراق" },
      desc: {
        en: "Web and mobile platform for health centers: a management dashboard plus a mobile app for providers.",
        ar: "منصة ويب وموبايل للمراكز الصحية: لوحة إدارة وتطبيق موبايل لمقدّمي الخدمة."
      },
      tech: ["Laravel", "Flutter", "PostgreSQL"],
      keys: ["laravel", "flutter"],
      links: [
        { type: "dashboard", href: "https://backend.sahatiapp.com/" },
        { type: "play", href: "https://play.google.com/store/apps/details?id=com.spacenet.sahati_provider" }
      ]
    },
    {
      name: { en: "Ginco Construction", ar: "Ginco للمقاولات" },
      badge: "GC", hue: 28,
      where: { en: "Construction company · Dubai, UAE", ar: "شركة مقاولات · دبي، الإمارات" },
      desc: {
        en: "Mobile app and web dashboard for a Dubai contracting company.",
        ar: "تطبيق موبايل ولوحة تحكم ويب لشركة مقاولات في دبي."
      },
      tech: ["Node.js", "React", "Flutter", "PostgreSQL"],
      keys: ["node", "react", "flutter"],
      links: [
        { type: "dashboard", href: "https://gincomep-dashboard.flexinnovo.com" },
        { type: "play", href: "https://play.google.com/store/apps/details?id=com.gincoapp.app" }
      ]
    },
    {
      name: { en: "SWIN", ar: "SWIN" },
      badge: "SW", hue: 262,
      where: { en: "Sports · predictions", ar: "رياضة · توقعات" },
      desc: {
        en: "Football app with live matches, score predictions, competitions and groups.",
        ar: "تطبيق كرة قدم: مباريات، توقعات للنتائج، مسابقات ومجموعات."
      },
      tech: ["Node.js", "React", "Flutter", "PostgreSQL"],
      keys: ["node", "react", "flutter"],
      links: [{ type: "play", href: "https://play.google.com/store/apps/details?id=com.sapps.swin" }]
    },
    {
      name: { en: "iShow", ar: "iShow" },
      badge: "iS", hue: 350,
      where: { en: "Streaming · Syria", ar: "بث ومشاهدة · سوريا" },
      desc: {
        en: "Streaming platform for movies and series with ratings and reviews, plus live TV channels and match broadcasts.",
        ar: "منصة لمشاهدة الأفلام والمسلسلات مع تقييمات ومراجعات، إضافة للبث المباشر للقنوات والمباريات."
      },
      tech: ["Node.js", "Redis", "PostgreSQL"],
      keys: ["node"],
      links: [{ type: "web", href: "https://iptv.ishow.sy/Landing/index.html" }]
    },
    {
      name: { en: "Agafi", ar: "Agafi" },
      badge: "AG", hue: 222,
      where: { en: "Entrepreneur network", ar: "شبكة رواد أعمال" },
      desc: {
        en: "Brings entrepreneurs together: job posts and applications, investment, public and private chat, and in-app calls.",
        ar: "يجمع رواد الأعمال بمكان واحد: نشر الوظائف والتقديم عليها، الاستثمار، محادثات عامة وخاصة، ومكالمات داخل التطبيق."
      },
      tech: ["Node.js", "Redis", "MQTT", "PostgreSQL"],
      keys: ["node"],
      links: []
    }
  ],

  alsoWorkedOn: {
    title: { en: "Also delivered", ar: "مشاريع أخرى سلّمتها" },
    items: ["ComCamp", "Goaluck", "CrowdFunding", "Al-Ajami", "Shifacom", "Foryou-Market", "WARSHA"],
    more: { en: "and more", ar: "وغيرها" }
  },

  personalProjects: [
    {
      name: { en: "Mallem", ar: "معلّم" },
      badge: "Ml", hue: 38,
      where: { en: "Home services directory", ar: "دليل الخدمات المنزلية" },
      desc: {
        en: "Customers find the nearest, best-rated tradesman and call them directly — no commission. One Flutter app for customers, tradesmen, field agents and admins, with OTP login, reviews tied to real contacts, scheduled jobs and a public page per tradesman.",
        ar: "الزبون يجد أقرب معلّم وأعلاهم تقييماً ويتصل به مباشرة — بدون عمولة. تطبيق Flutter واحد للزبون والمعلّم والمندوب والإدارة، مع دخول برمز OTP، وتقييمات مرتبطة بتواصل حقيقي، ومهام مجدولة، وصفحة ويب لكل معلّم."
      },
      tech: ["Flutter", "Laravel 12", "MySQL", "Firebase"],
      keys: ["flutter", "laravel"],
      links: []
    },
    {
      name: { en: "MGYM", ar: "MGYM" },
      badge: "MG", hue: 0,
      where: { en: "Gym management SaaS", ar: "نظام SaaS لإدارة الصالات الرياضية" },
      desc: {
        en: "Multi-tenant SaaS: one database with per-gym data isolation, Owner / Trainer / Athlete roles, per-gym branding, Arabic and English, and targeted push notifications.",
        ar: "نظام متعدد المستأجرين: قاعدة بيانات واحدة مع عزل بيانات كل نادٍ، أدوار المالك والمدرب واللاعب، هوية خاصة لكل نادٍ، عربي وإنجليزي، وإشعارات موجّهة."
      },
      tech: ["Flutter", "Laravel", "PostgreSQL", "FCM"],
      keys: ["flutter", "laravel"],
      links: []
    },
    {
      name: { en: "Gym Operations Platform", ar: "منصة تشغيل النوادي" },
      badge: "GO", hue: 190,
      where: { en: "TypeScript monorepo", ar: "Monorepo بلغة TypeScript" },
      desc: {
        en: "Fastify API with multi-tenancy, QR attendance scanning, subscriptions and payments, offline sync and WhatsApp integration — plus a React Native app for owners, trainers and members.",
        ar: "واجهة Fastify متعددة المستأجرين، تسجيل حضور بمسح QR، اشتراكات ومدفوعات، مزامنة بدون إنترنت وربط مع واتساب — مع تطبيق React Native للمالك والمدرب والأعضاء."
      },
      tech: ["Fastify", "Drizzle", "PostgreSQL", "React Native", "Turborepo"],
      keys: ["node", "react"],
      links: []
    },
    {
      name: { en: "School Management System", ar: "نظام إدارة المدارس" },
      badge: "SM", hue: 240,
      where: { en: "Web + mobile monorepo", ar: "Monorepo ويب وموبايل" },
      desc: {
        en: "Fastify API with Swagger docs, Zod validation and Argon2 auth, a React admin dashboard and an Expo mobile app — fully bilingual.",
        ar: "واجهة Fastify مع توثيق Swagger وتحقق Zod ومصادقة Argon2، لوحة تحكم React وتطبيق موبايل Expo — ثنائي اللغة بالكامل."
      },
      tech: ["TypeScript", "Fastify", "PostgreSQL", "React", "Expo"],
      keys: ["node", "react"],
      links: []
    },
    {
      name: { en: "Da’wati", ar: "دعوتي" },
      badge: "Dw", hue: 320,
      where: { en: "Interactive invitations", ar: "دعوات تفاعلية" },
      desc: {
        en: "Wedding and engagement invitations as live web pages shared on WhatsApp: template wizard with auto-save, countdown, venue map, RSVP and photo gallery. Pay per event, with an admin panel for payments and templates.",
        ar: "دعوات أعراس وخطوبة كصفحات ويب حيّة تُرسل على واتساب: معالج قوالب مع حفظ تلقائي، عدّاد تنازلي، خريطة المكان، تأكيد حضور وألبوم صور. دفع لكل مناسبة مع لوحة إدارة للمدفوعات والقوالب."
      },
      tech: ["Laravel 12", "Blade", "SQL"],
      keys: ["laravel"],
      links: []
    },
    {
      name: { en: "VirtualMarket", ar: "VirtualMarket" },
      badge: "VM", hue: 100,
      where: { en: "Multi-vendor marketplace", ar: "سوق متعدد البائعين" },
      desc: {
        en: "Vendors, catalog, cart and orders, Stripe payments, reviews and wishlists, roles and permissions, and push notifications.",
        ar: "بائعون، كتالوج منتجات، سلة وطلبات، دفع عبر Stripe، تقييمات وقوائم مفضلة، أدوار وصلاحيات، وإشعارات فورية."
      },
      tech: ["Laravel 12", "Livewire", "PostgreSQL", "Redis", "Stripe"],
      keys: ["laravel"],
      links: []
    }
  ],

  education: [
    { title: { en: "Master’s in Web Science", ar: "ماجستير علوم الويب" }, org: { en: "Syrian Virtual University (SVU)", ar: "الجامعة الافتراضية السورية" } },
    { title: { en: "B.Sc. Information Engineering", ar: "إجازة في هندسة المعلوماتية" }, org: { en: "Syrian Virtual University (SVU)", ar: "الجامعة الافتراضية السورية" } }
  ],
  certifications: [
    { title: { en: "CCNA Routing & Switching (course)", ar: "CCNA Routing & Switching (دورة)" }, org: "Udemy" },
    { title: { en: "Information Security", ar: "أمن المعلومات" }, org: "UNDP" },
    { title: { en: "Oracle Database Administration (course)", ar: "إدارة قواعد بيانات Oracle (دورة)" }, org: { en: "In-house training", ar: "تدريب داخلي" } }
  ],
  languages: [
    { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" } },
    { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Proficient", ar: "متقدم" } },
    { name: { en: "French", ar: "الفرنسية" }, level: { en: "Beginner", ar: "مبتدئ" } }
  ],

  // interface labels
  ui: {
    nav: {
      about: { en: "About", ar: "نبذة" },
      skills: { en: "Skills", ar: "المهارات" },
      experience: { en: "Experience", ar: "الخبرات" },
      projects: { en: "Projects", ar: "المشاريع" },
      background: { en: "Education", ar: "التعليم" },
      contact: { en: "Contact", ar: "تواصل" }
    },
    viewWork: { en: "View my work", ar: "شاهد أعمالي" },
    downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    aboutTitle: { en: "About me", ar: "نبذة عني" },
    profileCard: { en: "Profile", ar: "الملف الشخصي" },
    field: {
      name: { en: "Name", ar: "الاسم" },
      role: { en: "Role", ar: "المسمى" },
      location: { en: "Location", ar: "الموقع" },
      mobile: { en: "Mobile", ar: "الموبايل" },
      whatsapp: { en: "WhatsApp", ar: "واتساب" },
      email: { en: "Email", ar: "الإيميل" },
      linkedin: { en: "LinkedIn", ar: "LinkedIn" },
      github: { en: "GitHub", ar: "GitHub" },
      languages: { en: "Languages", ar: "اللغات" }
    },
    call: { en: "Call", ar: "اتصال" },
    skillsTitle: { en: "What I work with", ar: "التقنيات التي أعمل بها" },
    skillsSub: { en: "Backend first — with enough front end and mobile to ship the whole product.", ar: "الباك إند أولاً — مع ما يكفي من الواجهات والموبايل لتسليم المنتج كاملاً." },
    alsoUse: { en: "Also in my toolbox", ar: "أدوات أخرى أستخدمها" },
    experienceTitle: { en: "Experience", ar: "الخبرات العملية" },
    projectsTitle: { en: "Selected work", ar: "أعمال مختارة" },
    projectsSub: { en: "Production systems I built for companies and clients, and products I build on my own.", ar: "أنظمة إنتاجية بنيتها لشركات وعملاء، ومنتجات أبنيها بنفسي." },
    filterLabel: { en: "Filter by technology", ar: "فلترة حسب التقنية" },
    clientWork: { en: "Client & company work", ar: "أعمال للشركات والعملاء" },
    personalWork: { en: "Personal products", ar: "منتجات خاصة" },
    personalNote: { en: "Source available on request", ar: "الكود متاح عند الطلب" },
    privateSystem: { en: "Private system", ar: "نظام خاص" },
    featured: { en: "Featured", ar: "أبرز مشروع" },
    noMatch: { en: "No projects with this technology in this group.", ar: "لا توجد مشاريع بهذه التقنية ضمن هذه المجموعة." },
    link: {
      web: { en: "Website", ar: "الموقع" },
      dashboard: { en: "Dashboard", ar: "لوحة التحكم" },
      play: { en: "Google Play", ar: "Google Play" },
      github: { en: "Code", ar: "الكود" }
    },
    backgroundTitle: { en: "Education & certifications", ar: "التعليم والشهادات" },
    education: { en: "Education", ar: "التعليم" },
    certifications: { en: "Certifications", ar: "الشهادات" },
    languages: { en: "Languages", ar: "اللغات" },
    contactTitle: { en: "Let’s build something reliable", ar: "لنبنِ شيئاً يُعتمد عليه" },
    contactSub: { en: "Hiring for a backend or full-stack role, or need an API, database or server set up properly? Send me a message.", ar: "تبحث عن مطوّر باك إند أو فول ستاك، أو تحتاج واجهة برمجية أو قاعدة بيانات أو سيرفر مضبوط بشكل صحيح؟ راسلني." },
    emailMe: { en: "Email me", ar: "راسلني بالإيميل" },
    whatsapp: { en: "WhatsApp", ar: "واتساب" },
    copy: { en: "Copy", ar: "نسخ" },
    copied: { en: "Copied", ar: "تم النسخ" },
    switchLang: { en: "العربية", ar: "English" },
    theme: { en: "Toggle dark mode", ar: "تبديل الوضع الليلي" },
    rights: { en: "Built and maintained by me.", ar: "صمّمته وأديره بنفسي." }
  }
};

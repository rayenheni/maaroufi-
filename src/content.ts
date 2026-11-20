export type Lang = "ar" | "fr";

export const sectionIds = [
  "top",
  "about",
  "services",
  "practices",
  "reviews",
  "faq",
  "contact",
] as const;

/* Placeholder phone / email / hours — replace with the real ones. */
export const office = {
  phoneDisplay: "+216 78 000 000",
  phoneHref: "tel:+21678000000",
  whatsapp: "21678000000",
  email: "contact@maaroufi-avocat.tn",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("2 Avenue Mongi Slim, Le Kef 7100, Tunisie"),
};

const ar = {
  meta: {
    title:
      "مكتب الأستاذ هيثم المعروفي للمحاماة — تخصّص في القضايا المدنية والجزائية | الكاف",
  },
  langSwitch: "FR",
  langSwitchLabel: "Passer en français",
  brand: { name: "المعروفي", tagline: "للمحاماة والاستشارات القانونية" },
  nav: [
    "الرئيسية",
    "عن المكتب",
    "خدماتنا",
    "ممارساتنا",
    "آراء العملاء",
    "الأسئلة الشائعة",
    "تواصل معنا",
  ],
  cta: "احجز استشارة",
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  skip: "تخطَّ إلى المحتوى",
  addressLines: ["عدد 2، شارع المنجي سليم", "الكاف 7100 — تونس"],

  hero: {
    badge: "محامٍ متخصّص في القانون المدني والجزائي — الكاف، تونس",
    title: "ممارسة مركّزة على القضايا\nالمدنية والجزائية",
    text: "مكتب الأستاذ هيثم المعروفي للمحاماة يركّز ممارسته على القضايا المدنية والجزائية في الكاف وسائر الجمهورية: استشارة واضحة، صياغة دقيقة، ودفاع ملتزم من مرحلة البحث إلى تنفيذ الحكم.",
    primary: "احجز استشارة",
    secondary: "اكتشف خدماتنا",
    portraitAlt: "الأستاذ هيثم المعروفي، محامٍ بالكاف",
    nameCard: { role: "محامٍ — القضايا المدنية والجزائية", name: "الأستاذ هيثم المعروفي" },
    imageAlt: "واجهة المحكمة بأعمدتها الحجرية تحت سماء زرقاء",
    stat: "أكثر من 15 عامًا في المدني والجزائي",
    note: "استشارة أولى بسرّية تامة — بموعد مسبق",
  },

  stats: [
    { v: "15+", l: "عامًا من الممارسة القانونية" },
    { v: "02", l: "مجالا رئيسيًا: المدني والجزائي" },
    { v: "100%", l: "متابعة شخصية لكل ملف" },
    { v: "24 س", l: "للرد على طلبات الاستشارة" },
  ],

  tabs: {
    civil: "المدني",
    criminal: "الجزائي",
    all: "تعرف على ممارساتنا",
  },

  why: {
    eyebrow: "لماذا المعروفي؟",
    title: "لماذا يختار الموكّلون مكتب المعروفي؟",
    sub: "محامٍ قريب من ملفّك، وملتزم بنتيجته",
    text: "لا نكتفي بالرأي القانوني: نضع خبرتنا في خدمة قرارك. نعمل على قراءة دقيقة للوقائع والوثائق، ثم نرسم معك مسارًا واضحًا للملف، بالشفافية والالتزام ذاتها منذ أول لقاء.",
    stats: [
      { v: "15+", l: "عامًا من الخبرة" },
      { v: "02", l: "مجالا: مدني وجزائي" },
      { v: "100%", l: "التزام بالسرّية" },
    ],
    features: [
      {
        t: "خبرة في القضايا المدنية",
        d: "العقود والالتزامات، المنازعات العقارية، الأسرة والتعويض عن الأضرار، مع متابعة دقيقة للاجتهادات القضائية.",
      },
      {
        t: "خبرة في القضايا الجزائية",
        d: "الدفاع في مراحل البحث والتحقيق والمحاكمة، القيام بالحق الشخصي، والطعون أمام الاستئناف والتعقيب.",
      },
      {
        t: "متابعة شخصية لكل ملف",
        d: "الملف يُتابَع مباشرة، ويُحيط الموكّل بكل مستجدّ في حينه، دون وسطاء أو تأخير.",
      },
      {
        t: "وضوح في الأتعاب والالتزامات",
        d: "اتفاق كتابي واضح قبل بداية المهمة، دون التزامات خفية، مع إمكانية التقسيط حسب طبيعة الملف.",
      },
    ],
    badge: "بموعد مسبق في قلب مدينة الكاف",
    badgeSub: "عدد 2، شارع المنجي سليم",
    imgAlt: "الأستاذ هيثم المعروفي داخل مكتبه",
  },

  founder: {
    quote:
      "ممارستنا مركّزة على مسارين: القضايا المدنية والقضايا الجزائية. نؤمن أن المحاماة رسالة قبل أن تكون مهنة — إنصاتٌ دقيق للموكّل، صراحةٌ في تقييم النزاع، وصرامةٌ في الدفاع من أول استدعاء إلى آخر درجة تقاضٍ.",
    name: "هيثم المعروفي",
    role: "مؤسس المكتب",
  },

  about: {
    eyebrow: "عن المكتب",
    title: "مكتب المعروفي — تخصّص في القضايا المدنية والجزائية",
    text: "يوجد مكتب الأستاذ هيثم المعروفي بعدد 2 شارع المنجي سليم في الكاف، ويركّز ممارسته على القضايا المدنية والقضايا الجزائية، ويقدّم استشارات وخدمات قانونية متكاملة وفق أعلى المعايير المهنية. نعمل بمنهج واضح: فهم الوقائع، شرح المسارات، ثم تحديد الخطوات والأتعاب قبل الانطلاق في أي إجراء.",
    more: "تواصل معنا",
    imgAlt: "داخل مكتب المحاماة",
    pillars: [
      { t: "تخصّص مدني وجنائي", d: "ممارسة مركّزة على القضايا المدنية والجزائية أمام جميع درجات التقاضي." },
      { t: "سرّية تامة", d: "كل ما يُعرض على المكتب محميّ بالسرّ المهني." },
      { t: "وضوح الأتعاب", d: "اتفاق كتابي واضح قبل بداية كل مهمة." },
    ],
  },

  services: {
    eyebrow: "خدماتنا",
    title: "خدمات قانونية في القضايا المدنية والجزائية",
    text: "ممارسة مركّزة على مسارين: القضايا المدنية (العقود، العقار، الأسرة، التعويضات) والقضايا الجزائية (الدفاع، القيام بالحق الشخصي، الطعون).",
    civil: [
      {
        t: "العقود والالتزامات",
        d: "صياغة ومراجعة عقود البيع والكراء والخدمات، ودراسة الالتزامات والفسخ والتعويضات وفق مجلة الالتزامات والعقود.",
        icon: "fileText",
      },
      {
        t: "المنازعات العقارية",
        d: "نزاعات الملكية والحقوق العينية، القسمة والشفعة، الحوز والتحيّز، ونزاعات البناء والكراء.",
        icon: "building",
      },
      {
        t: "الأسرة والأحوال الشخصية",
        d: "الطلاق، الحضانة والنفقة، بمقاربة تحفظ حقوق الأبناء وتحترم خصوصية العائلة وكرامتها.",
        icon: "family",
      },
      {
        t: "التعويض عن الأضرار",
        d: "المسؤولية المدنية التقصيرية والعقدية، أضرار حوادث السير، والتعويض عن الضرر المادي والمعنوي.",
        icon: "handshake",
      },
      {
        t: "استخلاص الديون وتنفيذ الأحكام",
        d: "الإنذارات، المطالبات القضائية والتسويات، ومتابعة التنفيذ الجبري للأحكام لتحصيل حقوقكم.",
        icon: "coins",
      },
      {
        t: "الميراث وتركة",
        d: "القسمة، حجوزات التركة، وإدارة الخلافات بين الورثة وصولًا إلى تسوية ودّية أو قضائية.",
        icon: "users",
      },
    ],
    criminal: [
      {
        t: "الدفاع الجزائي",
        d: "الحضور والمرافعة في جميع مراحل البحث والتحقيق والمحاكمة، وإعداد دفاع مبنيّ على دقة الوقائع واحترام ضمانات الدفاع.",
        icon: "gavel",
      },
      {
        t: "القيام بالحق الشخصي",
        d: "تمثيل الضحايا أمام القضاء الجزائي والمطالبة بالتعويض عن الضرر الناتج عن الجريمة.",
        icon: "shield",
      },
      {
        t: "الجرائم الاقتصادية والمالية",
        d: "التبييض، السرقة، النصب، الخيانة في الأمانة وإساءة استعمال الثقة، والدفاع في الملفات المالية المعقّدة.",
        icon: "coins",
      },
      {
        t: "الإيقاف والحرية المؤقتة",
        d: "طلبات الإفراج عن الموقوفين، متابعة أوضاع الموقوفين، والوكالات العاجلة في الحالات المستعجلة.",
        icon: "lock",
      },
      {
        t: "الطعون في الأحكام",
        d: "الطعن في الأحكام الجزائية أمام محكمة الاستئناف ومحكمة التعقيب داخل الآجال القانونية.",
        icon: "landmark",
      },
      {
        t: "الجرائم ضد الأشخاص",
        d: "الاعتداء، التهديد، التشهير والفتنة، مع حماية خصوصية الموكّل وسمعته.",
        icon: "users",
      },
    ],
  },

  ctaBand: {
    title: "تواصل معنا اليوم للحصول على استشارة قانونية موثوقة",
    text: "نحن هنا لدعمك في ملفّك المدني أو الجزائي. تواصل مع المكتب الآن للحصول على استشارة احترافية تساعدك في اتخاذ القرارات الصحيحة بثقة.",
    button: "تواصل معنا الآن",
  },

  practices: {
    eyebrow: "ممارساتنا",
    title: "أقوى ممارسات المكتب في القضايا المدنية والجزائية",
    text: "نمثّل الموكّلين أمام المحاكم الابتدائية والاستئنافية ومحكمة التعقيب في القضايا المدنية والعقارية والجزائية، وفق الإجراءات المنطبقة على كل نوع من النزاعات.",
    items: [
      {
        t: "التقاضي المدني",
        d: "إدارة ملفات المدني من دراسة النزاع وإعداد العرائض والمذكّرات إلى المرافعة أمام المحكمة المختصة ومتابعة الحكم.",
      },
      {
        t: "الدفاع الجزائي",
        d: "مواكبة الملف الجزائي من مرحلة البحث والتحقيق إلى جلسات المحاكمة، وإعداد دفاع يحترم ضمانات الدفاع ويراعي وقائع القضية.",
      },
      {
        t: "العقود والالتزامات",
        d: "صياغة العقود ومراجعتها بما يحدّد حقوق الأطراف والتزاماتهم ويعالج المخاطر التعاقدية وفق مجلة الالتزامات والعقود.",
      },
      {
        t: "المنازعات العقارية",
        d: "متابعة نزاعات الملكية والحوز والقسمة والتحيّز أمام المحاكم المختصة والمحكمة العقارية، وضمان حقوق الملكية.",
      },
      {
        t: "القيام بالحق الشخصي",
        d: "تمثيل الضحايا والمطالبة بالتعويض عن الأضرار الناتجة عن الجريمة، مع إعداد المذكرات ودراسة الضرر.",
      },
      {
        t: "الطعون والتعقيب",
        d: "الطعن في الأحكام المدنية والجزائية أمام محكمة الاستئناف ومحكمة التعقيب داخل الآجال القانونية المحدّدة.",
      },
    ],
  },

  reviews: {
    eyebrow: "آراء العملاء",
    title: "ثقة موكّلينا هي رأس مالنا الحقيقي",
    source: "عميل Google",
    items: [
      {
        name: "سليم ب.",
        when: "قبل شهر",
        text: "مكتب ممتاز وتعامل راقٍ جدًا من الأستاذ هيثم. متابعة دقيقة لملفي العقاري حتى صدر الحكم وتمّ تنفيذه.",
      },
      {
        name: "منية ق.",
        when: "قبل 3 أشهر",
        text: "تكفّل بقضية أسرية حسّاسة وحصل لي على الحضانة مع النفقة، وشرح لي كل مرحلة بلغة واضحة ومطمئنة.",
      },
      {
        name: "عبد المجيد ر.",
        when: "قبل 4 أشهر",
        text: "استشارة قانونية واضحة ومفصّلة منذ أول لقاء، بدون وعود مبالغ فيها. أنصح به في الملفات المدنية.",
      },
      {
        name: "ألفة ح.",
        when: "قبل 5 أشهر",
        text: "رافقني في قضية جزائية من مرحلة البحث إلى الحكم، وكان متاحًا لكل سؤال ويحترم المواعيد.",
      },
    ],
  },

  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "نُجيب هنا عن أبرز الأسئلة حول خدمات المكتب",
    items: [
      {
        q: "كيف يمكنني حجز موعد للاستشارة؟",
        a: "عبر الهاتف أو واتساب أو نموذج التواصل في هذه الصفحة. يحدّد المكتب موعدًا خلال 24 إلى 48 ساعة، ويطلب منكم الوثائق الأولية المرتبطة بالملف.",
      },
      {
        q: "ما الوثائق التي أحضرها إلى أول لقاء؟",
        a: "بطاقة التعريف، وكل ما يتعلق بالنزاع: العقود، المراسلات، الفواتير، المحاضر والأحكام السابقة، إضافة إلى تسلسل زمني موجز للوقائع.",
      },
      {
        q: "كيف تُحدَّد أتعاب المحاماة؟",
        a: "حسب طبيعة الملف وتعقيده ودرجات التقاضي المحتملة. يُتَّفق على الأتعاب كتابيًا وبكل وضوح قبل الانطلاق، مع إمكانية التقسيط في الملفات المطوّلة.",
      },
      {
        q: "هل تبقى معطياتي ووثائقي سرّية؟",
        a: "نعم. السرّية المهنية التزام قانوني وأخلاقي يفرضه قانون تنظيم مهنة المحاماة. كل ما تشاركونه معنا يبقى في نطاق الملف.",
      },
      {
        q: "هل تتدخلون في الحالات الجزائية المستعجلة؟",
        a: "نعم. حالات الإيقاف والحرية المؤقتة والاستدعاءات العاجلة تُعالَج بأولوية مطلقة، ويتحرك المكتب فور التواصل معه.",
      },
      {
        q: "هل يترافع المكتب خارج ولاية الكاف؟",
        a: "نعم، ينوب المكتب ويترافع أمام جميع محاكم الجمهورية بمختلف درجاتها في المادة المدنية والجزائية.",
      },
    ],
  },

  contact: {
    eyebrow: "تواصل معنا",
    title: "لنناقش ملفّكم",
    text: "يستقبلكم المكتب بموعد مسبق في الكاف. لأي طلب استشارة أو معلومات، لا تتردّدوا في الاتصال بنا.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    map: "عرض على الخريطة",
    hours: "أوقات الاستقبال",
    hoursRows: [
      { d: "الاثنين — الجمعة", h: "8:30 — 17:30" },
      { d: "السبت", h: "بموعد مسبق" },
    ],
    form: {
      title: "أرسل طلب استشارة",
      name: "الاسم الكامل",
      namePh: "اسمكم الكامل",
      phone: "الهاتف",
      email: "البريد الإلكتروني (اختياري)",
      subject: "موضوع الاستشارة",
      subjectPh: "اختاروا المجال",
      other: "موضوع آخر",
      message: "رسالتكم",
      messagePh: "صِفوا باختصار وضعيتكم…",
      submit: "إرسال عبر واتساب",
      submitMail: "أو الإرسال عبر البريد الإلكتروني",
      note: "المعلومات المرسلة سرّية وتخضع للسرّ المهني للمحامي.",
      errName: "يرجى إدخال الاسم الكامل.",
      errPhone: "يرجى إدخال رقم هاتف صحيح.",
      errEmail: "يرجى التثبّت من عنوان البريد الإلكتروني.",
      errMessage: "يرجى وصف وضعيتكم في بضع كلمات.",
      msgIntro: "طلب استشارة — مكتب الأستاذ هيثم المعروفي",
      mailSubject: "طلب استشارة",
      okTitle: "رسالتكم جاهزة",
      okText:
        "فتحنا لكم نافذة جديدة لإتمام الإرسال. إن لم تُفتح، استعملوا أحد الخيارين أدناه.",
      okWa: "فتح واتساب",
      okMail: "فتح البريد الإلكتروني",
      again: "تحرير طلب جديد",
    },
  },

  footer: {
    blurb:
      "مكتب الأستاذ هيثم المعروفي للمحاماة — الكاف. استشارة، نيابة ودفاع في القضايا المدنية والعقارية والجزائية.",
    navTitle: "روابط سريعة",
    servicesTitle: "خدماتنا",
    contactTitle: "تواصل معنا",
    rights: "مكتب الأستاذ هيثم المعروفي للمحاماة — جميع الحقوق محفوظة.",
    disclaimer:
      "محتوى هذا الموقع تعريفي عام ولا يُعدّ استشارة قانونية. تُحدَّد العلاقة المهنية كتابيًا بعد دراسة الملف.",
  },
};

export type Content = typeof ar;

const fr: Content = {
  meta: {
    title: "Cabinet Maître Haithem Maaroufi — spécialisé en droit civil et pénal au Kef",
  },
  langSwitch: "AR",
  langSwitchLabel: "التحويل إلى العربية",
  brand: { name: "MAAROUFI", tagline: "Avocat & conseil juridique" },
  nav: [
    "Accueil",
    "Le cabinet",
    "Services",
    "Pratiques",
    "Avis",
    "FAQ",
    "Contact",
  ],
  cta: "Prendre rendez-vous",
  menuOpen: "Ouvrir le menu",
  menuClose: "Fermer le menu",
  skip: "Aller au contenu",
  addressLines: ["2, avenue Mongi Slim", "7100 Le Kef — Tunisie"],

  hero: {
    badge: "Avocat spécialisé en droit civil et pénal — Le Kef, Tunisie",
    title: "Une pratique dédiée aux affaires\nciviles et pénales",
    text: "Le cabinet Maître Haithem Maaroufi concentre sa pratique sur le contentieux civil et pénal au Kef et dans toute la Tunisie : un conseil clair, une rédaction rigoureuse et une défense engagée, de l'enquête à l'exécution du jugement.",
    primary: "Prendre rendez-vous",
    secondary: "Découvrir nos services",
    portraitAlt: "Maître Haithem Maaroufi, avocat au Kef",
    nameCard: { role: "Avocat — contentieux civil et pénal", name: "Maître Haithem Maaroufi" },
    imageAlt: "Façade et colonnes du palais de justice sous un ciel bleu",
    stat: "Plus de 15 ans en matière civile et pénale",
    note: "Première consultation confidentielle — sur rendez-vous",
  },

  stats: [
    { v: "15+", l: "années de pratique du droit" },
    { v: "02", l: "domaines : civil et pénal" },
    { v: "100%", l: "de suivi personnalisé par dossier" },
    { v: "24 h", l: "pour répondre à votre demande" },
  ],

  tabs: {
    civil: "Droit civil",
    criminal: "Droit pénal",
    all: "Découvrir nos pratiques",
  },

  why: {
    eyebrow: "Pourquoi nous ?",
    title: "Pourquoi les clients choisissent le cabinet Maaroufi",
    sub: "Un avocat proche de votre dossier, engagé sur son résultat",
    text: "Nous ne nous contentons pas d'un avis juridique : nous mettons notre expérience au service de votre décision. Lecture précise des faits et des pièces, puis un parcours clair pour votre dossier, avec la même transparence et le même engagement dès le premier rendez-vous.",
    stats: [
      { v: "15+", l: "années d'expérience" },
      { v: "02", l: "domaines : civil et pénal" },
      { v: "100%", l: "de confidentialité" },
    ],
    features: [
      {
        t: "Expérience en matière civile",
        d: "Contrats et obligations, contentieux immobilier, famille et réparation des préjudices, avec une veille constante sur la jurisprudence.",
      },
      {
        t: "Expérience en matière pénale",
        d: "Défense à tous les stades de l'enquête et du jugement, constitution de partie civile et recours devant la cour d'appel et la Cour de cassation.",
      },
      {
        t: "Un suivi personnel de chaque dossier",
        d: "Le dossier est suivi directement, et le client informé de chaque évolution, sans intermédiaire ni retard.",
      },
      {
        t: "Honoraires et engagements clairs",
        d: "Une convention écrite avant chaque mission, sans frais cachés, avec possibilité d'échelonnement selon la nature du dossier.",
      },
    ],
    badge: "Sur rendez-vous, au cœur du Kef",
    badgeSub: "2, avenue Mongi Slim",
    imgAlt: "Maître Haithem Maaroufi dans son cabinet",
  },

  founder: {
    quote:
      "Notre pratique se concentre sur deux volets : le contentieux civil et le contentieux pénal. Nous croyons que l'avocat porte une mission avant d'exercer un métier — écouter attentivement, évaluer le litige avec franchise et défendre avec rigueur, de la première convocation au dernier degré de juridiction.",
    name: "Haithem Maaroufi",
    role: "Fondateur du cabinet",
  },

  about: {
    eyebrow: "Le cabinet",
    title: "Le cabinet Maaroufi — spécialisé en droit civil et pénal",
    text: "Situé au 2 avenue Mongi Slim au Kef, le cabinet Maître Haithem Maaroufi concentre sa pratique sur le contentieux civil et pénal, et propose un conseil et des services juridiques complets selon les plus hauts standards professionnels. Notre méthode est claire : comprendre les faits, expliquer les voies possibles, puis définir les étapes et les honoraires avant toute procédure.",
    more: "Nous contacter",
    imgAlt: "L'intérieur du cabinet",
    pillars: [
      { t: "Spécialisation civile & pénale", d: "Une pratique dédiée au contentieux civil et pénal devant tous les degrés de juridiction." },
      { t: "Confidentialité totale", d: "Tout ce qui est confié au cabinet est couvert par le secret professionnel." },
      { t: "Honoraires transparents", d: "Une convention écrite et claire avant chaque mission." },
    ],
  },

  services: {
    eyebrow: "Nos services",
    title: "Des services juridiques en matière civile et pénale",
    text: "Une pratique concentrée sur deux volets : le civil (contrats, immobilier, famille, réparation) et le pénal (défense, partie civile, recours).",
    civil: [
      {
        t: "Contrats & obligations",
        d: "Rédaction et révision des contrats de vente, de bail et de prestation, étude des obligations, de la résolution et des indemnités conformément au Code des obligations et des contrats.",
        icon: "fileText",
      },
      {
        t: "Contentieux immobilier",
        d: "Litiges de propriété et droits réels, partage, préemption, possession et litiges de construction et de bail.",
        icon: "building",
      },
      {
        t: "Famille & statut personnel",
        d: "Divorce, garde et pension alimentaire, avec une approche qui préserve les droits des enfants et respecte la dignité des familles.",
        icon: "family",
      },
      {
        t: "Réparation des préjudices",
        d: "Responsabilité civile délictuelle et contractuelle, accidents de la circulation, réparation du préjudice matériel et moral.",
        icon: "handshake",
      },
      {
        t: "Recouvrement & exécution",
        d: "Mises en demeure, actions en justice et règlements amiables, puis suivi de l'exécution forcée des jugements.",
        icon: "coins",
      },
      {
        t: "Successions",
        d: "Partage, sûretés de la succession et gestion des différends entre héritiers, jusqu'à une solution amiable ou judiciaire.",
        icon: "users",
      },
    ],
    criminal: [
      {
        t: "Défense pénale",
        d: "Assistance et plaidoirie à tous les stades de l'enquête, de l'instruction et du jugement, avec une défense fondée sur la précision des faits et le respect des garanties.",
        icon: "gavel",
      },
      {
        t: "Partie civile",
        d: "Représentation des victimes devant le juge pénal et demande d'indemnisation du préjudice né de l'infraction.",
        icon: "shield",
      },
      {
        t: "Infractions économiques & financières",
        d: "Blanchiment, vol, escroquerie, abus de confiance et détournement, et défense dans les dossiers financiers complexes.",
        icon: "coins",
      },
      {
        t: "Détention & liberté provisoire",
        d: "Demandes de mise en liberté, suivi de la situation des détenus et interventions urgentes dans les cas d'urgence.",
        icon: "lock",
      },
      {
        t: "Recours pénaux",
        d: "Opposition et appel des décisions pénales devant la cour d'appel et la Cour de cassation, dans les délais légaux.",
        icon: "landmark",
      },
      {
        t: "Infractions contre les personnes",
        d: "Coups et blessures, menaces, diffamation et atteintes à la vie privée, avec protection de la confidentialité et de la réputation du client.",
        icon: "users",
      },
    ],
  },

  ctaBand: {
    title: "Contactez-nous dès aujourd'hui pour un conseil juridique fiable",
    text: "Nous sommes là pour vous accompagner dans votre dossier civil ou pénal. Contactez le cabinet pour un conseil professionnel qui vous aide à décider en confiance.",
    button: "Nous contacter",
  },

  practices: {
    eyebrow: "Nos pratiques",
    title: "Les pratiques les plus solides du cabinet en matière civile et pénale",
    text: "Nous représentons nos clients devant les tribunaux de première instance, les cours d'appel et la Cour de cassation en matière civile, immobilière et pénale, selon les procédures propres à chaque litige.",
    items: [
      {
        t: "Contentieux civil",
        d: "Gestion des dossiers civils de l'étude du litige à la rédaction des requêtes et mémoires, jusqu'à la plaidoirie et au suivi du jugement.",
      },
      {
        t: "Défense pénale",
        d: "Accompagnement du dossier pénal de l'enquête aux audiences de jugement, avec une défense qui respecte les garanties et s'appuie sur les faits.",
      },
      {
        t: "Contrats & obligations",
        d: "Rédaction et révision des contrats pour fixer les droits et obligations des parties et traiter les risques contractuels.",
      },
      {
        t: "Contentieux immobilier",
        d: "Suivi des litiges de propriété, de possession, de partage et de bornage devant les tribunaux compétents et le Tribunal immobilier.",
      },
      {
        t: "Partie civile & réparation",
        d: "Représentation des victimes et demande d'indemnisation des préjudices nés de l'infraction, avec rédaction des mémoires.",
      },
      {
        t: "Recours & cassation",
        d: "Opposition et recours contre les décisions civiles et pénales devant la cour d'appel et la Cour de cassation, dans les délais légaux.",
      },
    ],
  },

  reviews: {
    eyebrow: "Avis clients",
    title: "La confiance de nos clients est notre vrai capital",
    source: "Client Google",
    items: [
      {
        name: "Slim B.",
        when: "il y a 1 mois",
        text: "Excellent cabinet et un accueil très professionnel de Maître Haithem. Suivi précis de mon dossier immobilier jusqu'au jugement et à son exécution.",
      },
      {
        name: "Mounia K.",
        when: "il y a 3 mois",
        text: "Il a pris en charge une affaire familiale sensible et obtenu la garde avec la pension, en expliquant chaque étape simplement.",
      },
      {
        name: "Abdelmajid R.",
        when: "il y a 4 mois",
        text: "Un conseil clair et détaillé dès le premier rendez-vous, sans promesses exagérées. Je le recommande pour les dossiers civils.",
      },
      {
        name: "Olfa H.",
        when: "il y a 5 mois",
        text: "Il m'a accompagnée dans une affaire pénale de l'enquête au jugement, toujours disponible et respectueux des délais.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Réponses aux questions les plus fréquentes sur nos services",
    items: [
      {
        q: "Comment prendre rendez-vous pour une consultation ?",
        a: "Par téléphone, WhatsApp ou via le formulaire de cette page. Le cabinet fixe un rendez-vous sous 24 à 48 heures et vous indique les pièces à préparer.",
      },
      {
        q: "Quels documents apporter au premier rendez-vous ?",
        a: "Votre pièce d'identité et tout ce qui concerne le litige : contrats, courriers, factures, procès-verbaux et jugements antérieurs, ainsi qu'une chronologie succincte des faits.",
      },
      {
        q: "Comment sont fixés les honoraires ?",
        a: "Selon la nature du dossier, sa complexité et les degrés de juridiction envisagés. Les honoraires sont convenus par écrit avant toute démarche, avec possibilité d'échelonnement.",
      },
      {
        q: "Mes informations restent-elles confidentielles ?",
        a: "Oui. Le secret professionnel est une obligation légale et déontologique de l'avocat. Tout ce que vous partagez reste strictement dans le cadre du dossier.",
      },
      {
        q: "Intervenez-vous en urgence en matière pénale ?",
        a: "Oui. Les gardes à vue, les demandes de mise en liberté et les convocations urgentes sont traitées en priorité absolue, dès votre appel.",
      },
      {
        q: "Le cabinet plaide-t-il en dehors du Kef ?",
        a: "Oui, le cabinet représente ses clients devant toutes les juridictions tunisiennes, à tous les degrés, en matière civile et pénale.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre dossier",
    text: "Le cabinet vous reçoit sur rendez-vous au Kef. Pour toute demande de consultation ou d'information, n'hésitez pas à nous contacter.",
    phone: "Téléphone",
    email: "E-mail",
    address: "Adresse",
    map: "Voir sur la carte",
    hours: "Horaires d'accueil",
    hoursRows: [
      { d: "Lundi — Vendredi", h: "8h30 — 17h30" },
      { d: "Samedi", h: "Sur rendez-vous" },
    ],
    form: {
      title: "Envoyer une demande",
      name: "Nom complet",
      namePh: "Votre nom complet",
      phone: "Téléphone",
      email: "E-mail (facultatif)",
      subject: "Objet de la consultation",
      subjectPh: "Choisir un domaine",
      other: "Autre sujet",
      message: "Votre message",
      messagePh: "Décrivez brièvement votre situation…",
      submit: "Envoyer via WhatsApp",
      submitMail: "Ou envoyer par e-mail",
      note: "Les informations transmises sont confidentielles et couvertes par le secret professionnel.",
      errName: "Veuillez saisir votre nom complet.",
      errPhone: "Veuillez saisir un numéro de téléphone valide.",
      errEmail: "Veuillez vérifier l'adresse e-mail.",
      errMessage: "Veuillez décrire votre situation en quelques mots.",
      msgIntro: "Demande de consultation — Cabinet Maître Haithem Maaroufi",
      mailSubject: "Demande de consultation",
      okTitle: "Votre message est prêt",
      okText:
        "Une nouvelle fenêtre s'est ouverte pour finaliser l'envoi. Sinon, utilisez l'une des options ci-dessous.",
      okWa: "Ouvrir WhatsApp",
      okMail: "Ouvrir l'e-mail",
      again: "Nouvelle demande",
    },
  },

  footer: {
    blurb:
      "Cabinet Maître Haithem Maaroufi — Le Kef. Conseil, représentation et défense en matière civile, immobilière et pénale.",
    navTitle: "Liens rapides",
    servicesTitle: "Nos services",
    contactTitle: "Contact",
    rights: "Cabinet Maître Haithem Maaroufi — Tous droits réservés.",
    disclaimer:
      "Le contenu de ce site est informatif et ne constitue pas un conseil juridique. La relation professionnelle est formalisée par écrit après étude du dossier.",
  },
};

export const content: Record<Lang, Content> = { ar, fr };

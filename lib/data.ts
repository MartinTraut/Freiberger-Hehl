// ============================================================================
// Freiberger & Hehl GbR – Zentrale Daten
// Alle Inhalte basieren auf der bestehenden Website freibergerhehl.de
// ============================================================================

export const company = {
  name: "Freiberger & Hehl GbR",
  shortName: "Freiberger & Hehl",
  tagline: "Dein Partner in der Region",
  heroHeadline: "Erdbau & Baggerarbeiten in Heilbronn & Umgebung",
  heroSubline: "Zuverlässig. Präzise. Termintreu.",
  phone: "+491704051040",
  phoneDisplay: "0170 405 10 40",
  email: "info@freibergerhehl.de",
  website: "https://www.freibergerhehl.de",
  address: {
    street: "Christian-Leichtle-Straße 58",
    zip: "74388",
    city: "Talheim",
    state: "Baden-Württemberg",
    country: "DE",
  },
  region: "Heilbronn & Umgebung",
  nearCities: [
    "Talheim",
    "Heilbronn",
    "Lauffen am Neckar",
    "Flein",
    "Neckarwestheim",
    "Nordheim",
    "Schwaigern",
  ],
  coordinates: { lat: 49.0836, lng: 9.1543 },
  founders: [
    {
      name: "Sascha Freiberger",
      role: "Geschäftsführer",
      training: "Gelernter Land- und Baumaschinen Mechaniker",
      experience: "Über 10 Jahre Erfahrung im Nutzfahrzeuge-Sektor",
    },
    {
      name: "Erik Hehl",
      role: "Geschäftsführer",
      training: "Gelernter Garten- und Landschaftsbauer",
      experience: "Langjähriger Erfahrungsschatz im GaLaBau",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/freibergerhehlgbr",
    instagram: "https://www.instagram.com/freibergerhehlgbr/",
  },
  legal: {
    taxOffice: "Heilbronn",
    taxNumber: "65213/19855",
    court: "Heilbronn",
  },
} as const;

export const images = {
  logo: "/logo-clean.png",
  logoWhite: "/logo-clean.png",
  favicon:
    "https://www.freibergerhehl.de/wp-content/uploads/2021/10/cropped-Design-ohne-Titel1.png",
  hero: "/hero.png",
  heroMobile: "/hero-mobile.png",
  heroAlt: "Freiberger & Hehl – Erdbau & Baggerbetrieb",
  team: "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel4.png",
  teamAlt: "Sascha Freiberger und Erik Hehl",
  weinbergRigolen:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Kein-Titel-1920-%C3%97-865-px.png",
  erdeAbtragen:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Kein-Titel-1920-%C3%97-733-px-1920-%C3%97-865-px.png",
  zisterneBagger:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Kein-Titel-1920-%C3%97-733-px.png",
  erdarbeitenFundament:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel9.png",
  natursteinmauer:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel7.png",
  zisterneEinbauen:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel5.png",
  erdarbeitenSquare:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/3-1.png",
  weinbergSquare:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/2-1.png",
  carportSquare:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/1-1.png",
  steine:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel2.png",
  erdeAbtragen2:
    "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel1.png",
} as const;

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "erdarbeiten",
    title: "Erdarbeiten & Erdbau",
    shortTitle: "Erdarbeiten",
    description:
      "Professionelle Erdarbeiten für Ihr Bauvorhaben – von der Geländemodellierung bis zum Erdabtrag.",
    longDescription:
      "Als Ihr erfahrener Partner für Erdarbeiten in der Region Heilbronn übernehmen wir sämtliche Erdbauarbeiten zuverlässig und termingerecht. Ob Erde abtragen, Gelände modellieren oder Flächen vorbereiten – wir setzen Ihr Projekt mit modernster Technik und Know-how um.",
    image: images.erdarbeitenSquare,
    imageAlt: "Erdarbeiten und Erdbau in Heilbronn",
    features: [
      "Erde abtragen und entsorgen",
      "Geländemodellierung",
      "Flächen vorbereiten",
      "Erdaushub für Fundamente",
      "Bodenaustausch",
    ],
    metaTitle: "Erdarbeiten Heilbronn | Freiberger & Hehl GbR",
    metaDescription:
      "Professionelle Erdarbeiten in Heilbronn & Umgebung. Erde abtragen, Geländemodellierung, Erdaushub. ✓ Zuverlässig ✓ Termingerecht ✓ Faire Preise",
  },
  {
    slug: "baggerarbeiten",
    title: "Baggerarbeiten",
    shortTitle: "Baggerarbeiten",
    description:
      "Präzise Baggerarbeiten für jedes Projekt – vom privaten Garten bis zum gewerblichen Bauprojekt.",
    longDescription:
      "Mit unserer Erfahrung und leistungsfähiger Technik führen wir Baggerarbeiten jeder Größenordnung durch. Egal ob Sie einen Pool ausheben, eine Baugrube benötigen oder Erdreich bewegen möchten – wir sind Ihr kompetenter Partner in der Region Heilbronn.",
    image: images.carportSquare,
    imageAlt: "Baggerarbeiten in Heilbronn und Umgebung",
    features: [
      "Baggerarbeiten aller Art",
      "Pool ausheben",
      "Baugruben erstellen",
      "Gräben ziehen",
      "Erdreich bewegen",
    ],
    metaTitle: "Baggerarbeiten Heilbronn | Freiberger & Hehl GbR",
    metaDescription:
      "Professionelle Baggerarbeiten in Heilbronn & Umgebung. Pool ausheben, Baugruben, Erdreich bewegen. ✓ Erfahren ✓ Zuverlässig ✓ Jetzt anfragen",
  },
  {
    slug: "aushubarbeiten",
    title: "Aushubarbeiten",
    shortTitle: "Aushub",
    description:
      "Fachgerechte Aushubarbeiten für Pool, Baugrube, Zisterne und mehr – sauber und termingerecht.",
    longDescription:
      "Wir führen Aushubarbeiten für verschiedenste Projekte durch: Pool ausheben, Baugrube für Ihr neues Zuhause, Zisterne einbauen oder Carport-Fundament vorbereiten. Mit Präzision und Erfahrung sorgen wir für ein sauberes Ergebnis.",
    image: images.zisterneEinbauen,
    imageAlt: "Aushubarbeiten – Zisterne einbauen",
    features: [
      "Pool ausheben",
      "Baugrube ausheben",
      "Zisterne einbauen",
      "Carport-Fundament",
      "Kellerbau-Vorbereitung",
    ],
    metaTitle: "Aushubarbeiten Heilbronn | Pool & Baugrube | Freiberger & Hehl",
    metaDescription:
      "Aushubarbeiten in Heilbronn & Umgebung. Pool ausheben, Baugrube, Zisterne einbauen. ✓ Sauber ✓ Präzise ✓ Faire Preise. Jetzt Angebot anfordern!",
  },
  {
    slug: "weinberg-rigolen",
    title: "Weinberg Rigolen",
    shortTitle: "Weinberg Rigolen",
    description:
      "Wir übernehmen die komplette Rodung und das Rigolen von Weinbergen in der Region.",
    longDescription:
      "Als Spezialisten für Weinberg-Rigolen in der Region Heilbronn übernehmen wir die komplette Rodung von Weinbergen. Mit unserer Erfahrung und passender Technik bereiten wir Ihre Weinbergflächen professionell für die Neuanlage vor.",
    image: images.weinbergSquare,
    imageAlt: "Weinberg rigolen in der Region Heilbronn",
    features: [
      "Komplette Rodung von Weinbergen",
      "Tiefenlockerung des Bodens",
      "Flächenvorbereitung für Neuanlage",
      "Erdarbeiten im Weinberg",
    ],
    metaTitle: "Weinberg Rigolen Heilbronn | Freiberger & Hehl GbR",
    metaDescription:
      "Weinberg rigolen in Heilbronn & Umgebung. Komplette Rodung und Bodenvorbereitung für Weinberge. ✓ Erfahren ✓ Zuverlässig ✓ Regional",
  },
  {
    slug: "natursteinmauern",
    title: "Natursteinmauern setzen",
    shortTitle: "Natursteinmauern",
    description:
      "Natursteinmauern für Ihren Garten oder Ihr Grundstück – robust, langlebig und optisch ansprechend.",
    longDescription:
      "Wir setzen Natursteinmauern, die Ihrem Garten oder Grundstück Charakter verleihen. Ob als Stützmauer, Begrenzung oder gestalterisches Element – unsere Natursteinmauern sind robust, langlebig und passen perfekt in die Landschaft der Region Heilbronn.",
    image: images.natursteinmauer,
    imageAlt: "Natursteinmauer setzen",
    features: [
      "Natursteinmauern setzen",
      "Stützmauern bauen",
      "Gartengestaltung mit Naturstein",
      "Sandsteinmauern",
    ],
    metaTitle:
      "Natursteinmauern setzen Heilbronn | Freiberger & Hehl GbR",
    metaDescription:
      "Natursteinmauern setzen in Heilbronn & Umgebung. Stützmauern, Gartenmauern, Sandsteinmauern. ✓ Langlebig ✓ Professionell ✓ Jetzt anfragen",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  location: string;
}

export const projects: Project[] = [
  {
    title: "Zisterne einbauen",
    description:
      "Auch wenn sich Deine Pläne mal ändern sollten und der neue Zaun schon fest eingebaut ist. Bei uns ist fast alles möglich. Mit unserem Know-how und unserer Erfahrung hast Du immer ein sicheres Gefühl.",
    image: images.zisterneEinbauen,
    imageAlt: "Zisterne einbauen – Baggerarbeiten",
    location: "Region Heilbronn",
  },
  {
    title: "Natursteinmauer setzen",
    description:
      "Du hast einen Garten oder ein Wochenend-Grundstück? Hier haben wir eine Natursteinmauer gesetzt, welche jetzt zum Relaxen und Feiern genutzt wird.",
    image: images.natursteinmauer,
    imageAlt: "Natursteinmauer setzen – Gartengestaltung",
    location: "Region Heilbronn",
  },
  {
    title: "Erdarbeiten für Fundament",
    description:
      "Professioneller Erdaushub und Bodenvorbereitung für ein stabiles Fundament. Sauber, präzise und termingerecht umgesetzt.",
    image: images.erdarbeitenFundament,
    imageAlt: "Erdarbeiten für Fundament",
    location: "Region Heilbronn",
  },
  {
    title: "Weinberg Rigolen",
    description:
      "Komplette Rodung und Rigolen eines Weinbergs – professionelle Flächenvorbereitung für die Neuanlage.",
    image: images.weinbergRigolen,
    imageAlt: "Weinberg rigolen",
    location: "Region Heilbronn",
  },
  {
    title: "Pool & Erdaushub",
    description:
      "Fachgerechter Erdaushub für einen neuen Pool – sauber und mit der nötigen Präzision ausgeführt.",
    image: images.erdeAbtragen,
    imageAlt: "Erdaushub für Pool",
    location: "Region Heilbronn",
  },
];

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    name: "Kathrin Tesoro",
    text: "Die beiden haben wirklich super Arbeit geleistet! Sie sind extrem sympathisch und Absprachen waren jederzeit problemlos/unkompliziert möglich.",
    rating: 5,
  },
  {
    name: "Lucas Dürr",
    text: "Super Team mit einem guten Service. Zuverlässig und empfehlenswert.",
    rating: 5,
  },
  {
    name: "Patrick Schmidt",
    text: "Super Arbeit und sehr zuverlässig und menschlich! Terminabsprache war auch schnell.",
    rating: 5,
  },
  {
    name: "Chantal Loy",
    text: "Zuverlässig, Preis Leistung sehr in Ordnung, freundlich und kompetent.",
    rating: 5,
  },
  {
    name: "Michael Stanko",
    text: "Absolut zufrieden. Mega sympathische Jungs und 1a Qualität.",
    rating: 5,
  },
  {
    name: "Paddy Wendel",
    text: "Top Preis-/Leistungsverhältnis, hohe Zuverlässigkeit, präzise, schnelle & saubere Ausführung.",
    rating: 5,
  },
  {
    name: "Wiebke Freudling",
    text: "Freundliche und gute Kommunikation, Absprachen werden eingehalten, zuverlässige Arbeit.",
    rating: 5,
  },
  {
    name: "Andreas Schenk",
    text: "Äußerst zuverlässiger Partner für Erdarbeiten. Sehr kompetente Beratung.",
    rating: 5,
  },
  {
    name: "Tim R.",
    text: "Sehr zuverlässig und super gearbeitet. Mehr kann man sich nicht wünschen!",
    rating: 5,
  },
  {
    name: "SB",
    text: "Das Duo Erik und Sascha liefert sehr gute und zuverlässige Arbeit. Vielen Dank für eure Flexibilität und fairen Preise.",
    rating: 5,
  },
];

export interface Machine {
  name: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  imageAlt: string;
}

export const machines: Machine[] = [
  {
    name: "Kettenbagger 8t",
    category: "Bagger",
    description:
      "Unser Allrounder für mittlere bis große Erdarbeiten. Ideal für Baugruben, Aushubarbeiten und Geländemodellierung.",
    specs: [
      "Einsatzgewicht: ca. 8 Tonnen",
      "Grabtiefe: bis 4,5 m",
      "Vielseitige Anbaugeräte",
      "Für Erdarbeiten & Aushub",
    ],
    image: images.erdarbeitenFundament,
    imageAlt: "Kettenbagger bei Erdarbeiten für Fundament",
  },
  {
    name: "Mobilbagger",
    category: "Bagger",
    description:
      "Schnell und flexibel einsetzbar – perfekt für Arbeiten auf wechselnden Baustellen und beengten Zufahrten.",
    specs: [
      "Straßentauglich",
      "Schnelle Verlagerung",
      "Ideal für enge Zufahrten",
      "Für Bagger- & Erdarbeiten",
    ],
    image: images.zisterneBagger,
    imageAlt: "Mobilbagger bei Baggerarbeiten",
  },
  {
    name: "Minibagger",
    category: "Bagger",
    description:
      "Kompakt und wendig – ideal für Arbeiten im Garten, neben Gebäuden oder auf engem Raum.",
    specs: [
      "Kompakte Abmessungen",
      "Schonend für den Untergrund",
      "Zugang durch Gartentore",
      "Für Pool, Zisterne & Garten",
    ],
    image: images.carportSquare,
    imageAlt: "Minibagger bei Aushubarbeiten",
  },
  {
    name: "Radlader",
    category: "Transport",
    description:
      "Leistungsstark beim Laden, Transportieren und Verfüllen von Erdmassen und Schüttgut.",
    specs: [
      "Hohe Schaufelkapazität",
      "Schneller Materialtransport",
      "Vielseitig einsetzbar",
      "Für Erd- & Weinbergarbeiten",
    ],
    image: images.weinbergRigolen,
    imageAlt: "Radlader beim Weinberg rigolen",
  },
  {
    name: "Dumper / Raupenträger",
    category: "Transport",
    description:
      "Für den effizienten Materialtransport auf der Baustelle – auch in schwierigem Gelände.",
    specs: [
      "Geländegängig",
      "Hohe Nutzlast",
      "Auch in Hanglagen einsetzbar",
      "Für Abtransport & Anlieferung",
    ],
    image: images.erdeAbtragen,
    imageAlt: "Materialtransport auf der Baustelle",
  },
  {
    name: "Verdichtungstechnik",
    category: "Spezialgeräte",
    description:
      "Rüttelplatten und Walzen für die fachgerechte Verdichtung von Böden und Tragschichten.",
    specs: [
      "Rüttelplatten verschiedener Größen",
      "Für Tragschichten & Verfüllungen",
      "Normgerechte Verdichtung",
      "Für Fundamente & Wegebau",
    ],
    image: images.erdeAbtragen2,
    imageAlt: "Verdichtungsarbeiten auf der Baustelle",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Anfrage senden",
    description:
      "Beschreibe uns Dein Projekt – per Telefon, E-Mail oder Kontaktformular. Wir melden uns schnell zurück.",
  },
  {
    step: 2,
    title: "Besichtigung & Angebot",
    description:
      "Wir besichtigen die Baustelle vor Ort und erstellen Dir ein faires, transparentes Angebot.",
  },
  {
    step: 3,
    title: "Umsetzung",
    description:
      "Wir setzen Dein Projekt termingerecht und professionell um – sauber, präzise und zuverlässig.",
  },
] as const;

export const navigation = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Maschinenpark", href: "/maschinen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

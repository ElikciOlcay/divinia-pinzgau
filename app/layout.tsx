import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bodyshaping.skinlux.at"),
  title:
    "Abnehmen ohne OP in Saalfelden | Body Shaping Pinzgau | DIVINIA Eclibs 5-in-1 | Skinlux",
  description:
    "Abnehmen ohne Operation in Saalfelden, Pinzgau. DIVINIA Eclibs 5-in-1 Body Shaping: Fettreduktion, Hautstraffung, Muskelaufbau, Cellulite-Behandlung und Lymphdrainage in einer Sitzung. 7 Technologien, 30 Minuten, 0 Ausfallzeit. Kostenlose Erstberatung bei Skinlux Medical Beauty Studio.",
  keywords: [
    "abnehmen Saalfelden",
    "abnehmen ohne OP Pinzgau",
    "abnehmen ohne Operation Salzburg",
    "Body Shaping Saalfelden",
    "Body Shaping Pinzgau",
    "Body Contouring Salzburg",
    "Fettreduktion Saalfelden",
    "Fettreduktion ohne OP",
    "Hautstraffung Pinzgau",
    "Cellulite Behandlung Saalfelden",
    "DIVINIA Eclibs",
    "Skinlux Saalfelden",
    "Skinlux Pinzgau",
    "Koerperformung Salzburg",
    "nicht-invasiv abnehmen",
    "Muskelaufbau ohne Training",
    "Lymphdrainage Saalfelden",
    "Zell am See abnehmen",
    "Leogang Body Shaping",
    "beste Fettreduktion Salzburg",
  ],
  authors: [{ name: "Skinlux Medical Beauty Studio Pinzgau" }],
  creator: "Skinlux Medical Beauty Studio",
  publisher: "Skinlux Medical Beauty Studio Pinzgau",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://bodyshaping.skinlux.at",
  },
  openGraph: {
    title: "Abnehmen ohne OP | 5-in-1 Body Shaping | Skinlux Pinzgau",
    description:
      "DIVINIA Eclibs: 5 Behandlungen in einer Sitzung. Fettreduktion, Hautstraffung, Muskelaufbau -- ohne Operation, ohne Ausfallzeit. Jetzt kostenlose Beratung in Saalfelden buchen.",
    type: "website",
    locale: "de_AT",
    url: "https://bodyshaping.skinlux.at",
    siteName: "Skinlux Medical Beauty Studio Pinzgau",
    images: [
      {
        url: "/images/divinia/behandlung.jpg",
        width: 1200,
        height: 630,
        alt: "DIVINIA Eclibs Body Shaping Behandlung bei Skinlux Saalfelden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abnehmen ohne OP | Body Shaping Saalfelden | Skinlux",
    description:
      "5-in-1 Body Shaping mit 7 Technologien. Fettreduktion, Straffung, Muskelaufbau in 30 Minuten. Kostenlose Erstberatung.",
    images: ["/images/divinia/behandlung.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://bodyshaping.skinlux.at/#organization",
  name: "Skinlux Medical Beauty Studio Pinzgau",
  alternateName: ["Skinlux Saalfelden", "Skinlux Pinzgau"],
  description:
    "Skinlux Medical Beauty Studio in Saalfelden bietet professionelles Body Shaping und Abnehmen ohne OP mit der DIVINIA Eclibs Weltneuheit. 5-in-1 Behandlung mit 7 Technologien fuer Fettreduktion, Hautstraffung und Muskelaufbau im Pinzgau.",
  url: "https://bodyshaping.skinlux.at",
  telephone: "+436644568454",
  email: "pinzgau@skinlux.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leogangerstrasse 12/Top 1c",
    addressLocality: "Saalfelden am Steinernen Meer",
    postalCode: "5760",
    addressRegion: "Salzburg",
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.4286",
    longitude: "12.8472",
  },
  areaServed: [
    { "@type": "City", name: "Saalfelden am Steinernen Meer" },
    { "@type": "City", name: "Zell am See" },
    { "@type": "City", name: "Leogang" },
    { "@type": "City", name: "Mittersill" },
    { "@type": "City", name: "Lofer" },
    { "@type": "City", name: "Salzburg" },
    { "@type": "AdministrativeArea", name: "Pinzgau" },
    { "@type": "State", name: "Salzburg" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "DIVINIA Eclibs 5-in-1 Body Shaping",
  alternateName: [
    "Body Contouring Saalfelden",
    "Abnehmen ohne OP Pinzgau",
    "Fettreduktion Salzburg",
    "Nicht-invasive Koerperformung",
  ],
  description:
    "Die DIVINIA Eclibs ist eine revolutionaere 5-in-1 Body-Shaping-Behandlung, die 7 Technologien (Chip-Technologie, Radiofrequenz, Elektroporation, Kavitation, EMS, LED-Therapie und Vakuum) in einem Geraet vereint. In einer 30-minuetigen Sitzung werden gleichzeitig Fettreduktion (bis zu 30%), Hautstraffung, Muskelaufbau, Cellulite-Behandlung und Lymphdrainage durchgefuehrt. Die Behandlung ist schmerzfrei, erfordert keine Ausfallzeit und ist fuer alle Koerpertypen geeignet.",
  procedureType: "Non-invasive Body Contouring",
  howPerformed:
    "7 Technologien wirken gleichzeitig auf das Behandlungsareal: Radiofrequenz zur Hautstraffung, Kavitation zur Fettzellenreduktion, EMS zum Muskelaufbau, Elektroporation fuer Wirkstofftransport, LED-Therapie zur Regeneration, Vakuum fuer Lymphdrainage und eine eigens entwickelte Chip-Technologie als Herzsteueck.",
  preparation:
    "Kostenlose Erstberatung mit individueller Analyse und Behandlungsplanung. Keine spezielle Vorbereitung noetig.",
  followup:
    "Keine Ausfallzeit. Empfohlen werden 6-10 Sitzungen im Abstand von 3-5 Tagen fuer optimale Ergebnisse.",
  indication: [
    "Uebermaessiges Koerperfett",
    "Erschlaffte Haut",
    "Cellulite",
    "Mangelnde Koerperdefinition",
    "Lymphstau",
    "Wunsch nach Abnehmen ohne Operation",
  ],
  provider: {
    "@type": "MedicalBusiness",
    "@id": "https://bodyshaping.skinlux.at/#organization",
  },
  offers: {
    "@type": "Offer",
    name: "Kostenlose Erstberatung Body Shaping",
    description:
      "Unverbindliche Beratung mit individueller Koerperanalyse und Behandlungsplanung",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://connect.shore.com/bookings/skinlux-pinzgau/services?locale=de",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell sehe ich Ergebnisse beim Body Shaping mit DIVINIA Eclibs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bereits nach der ersten Behandlung sind messbare Veraenderungen moeglich. Viele Kunden berichten von sofort spuerbarer Hautstraffung. Optimale Ergebnisse bei der Fettreduktion zeigen sich nach 6-8 Sitzungen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Abnehmen ohne OP mit DIVINIA Eclibs schmerzhaft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Die Behandlung ist schmerzfrei und wird von den meisten Kunden als angenehm warm und entspannend empfunden. Es sind keine Betaeubung und keine Nadeln noetig.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert eine Body-Shaping-Sitzung bei Skinlux Saalfelden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Sitzung dauert ca. 30-45 Minuten. Es gibt keine Ausfallzeit -- du kannst direkt danach wieder deinem Alltag nachgehen.",
      },
    },
    {
      "@type": "Question",
      name: "Fuer wen ist die DIVINIA Eclibs Body-Shaping-Behandlung geeignet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Behandlung eignet sich fuer alle, die gezielt Fett reduzieren, Haut straffen oder Muskeln aufbauen moechten -- unabhaengig von Alter oder Geschlecht. In der kostenlosen Erstberatung pruefen wir die individuelle Eignung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viele Body-Shaping-Behandlungen brauche ich zum Abnehmen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das besprechen wir individuell in der kostenlosen Erstberatung. Fuer optimale Ergebnisse bei der Fettreduktion werden 6-10 Sitzungen im Abstand von 3-5 Tagen empfohlen.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet Body Shaping bei Skinlux in Saalfelden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Erstberatung ist kostenlos und unverbindlich. Die Preise fuer die Behandlung besprechen wir persoenlich, da sie vom individuellen Behandlungsplan abhaengen. Buche jetzt deine kostenlose Beratung.",
      },
    },
    {
      "@type": "Question",
      name: "Wo kann ich in Salzburg ohne OP abnehmen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skinlux Medical Beauty Studio in Saalfelden (Pinzgau) bietet mit der DIVINIA Eclibs die modernste nicht-invasive Body-Shaping-Behandlung in Salzburg. Wir sind erreichbar fuer Kunden aus Saalfelden, Zell am See, Leogang, Mittersill und dem gesamten Pinzgau.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${lato.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

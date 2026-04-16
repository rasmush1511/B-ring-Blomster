import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { virksomhed } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baaringblomster.dk"),
  title: {
    default: "Båring Blomster — Selvbetjening på Båring Bakke",
    template: "%s — Båring Blomster",
  },
  description:
    "Blomsterbutik på toppen af Båring Bakke. Selvbetjening med MobilePay. Forårsblomster, sommerplanter, buketter og haveplanter. Åbent marts–oktober.",
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://baaringblomster.dk",
    siteName: "Båring Blomster",
    title: "Båring Blomster — Selvbetjening på Båring Bakke",
    description:
      "Blomsterbutik på toppen af Båring Bakke. Selvbetjening med MobilePay. Forårsblomster, sommerplanter, buketter og haveplanter.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Båring Blomster — Blomster fra bakken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://baaringblomster.dk",
  name: virksomhed.navn,
  url: "https://baaringblomster.dk",
  telephone: virksomhed.telefon,
  address: {
    "@type": "PostalAddress",
    streetAddress: virksomhed.adresse,
    postalCode: virksomhed.postnummer,
    addressLocality: virksomhed.by,
    addressCountry: "DK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: virksomhed.koordinater.lat,
    longitude: virksomhed.koordinater.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [virksomhed.facebook],
  description:
    "Selvbetjeningsblomsterbutik på Båring Bakke. Forårsblomster, sommerplanter, buketter og haveplanter. Betaling med MobilePay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--color-primary)] focus:text-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Gå til indhold
        </a>
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

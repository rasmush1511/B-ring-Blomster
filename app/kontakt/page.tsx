import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import KontaktForm from "@/components/sections/KontaktForm";
import FAQ from "@/components/sections/FAQ";
import SectionDivider from "@/components/ui/SectionDivider";
import { virksomhed, åbningstider } from "@/lib/data";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & find vej",
  description:
    "Find Båring Blomster på Middelfartvej 103, 5466 Asperup. Ring på 60 12 54 66. Åbent mandag–fredag 10–17, lørdag–søndag 09–15 i sæsonen.",
  openGraph: {
    title: "Kontakt & find vej — Båring Blomster",
    description: "Åbningstider, adresse og kontaktformular til Båring Blomster på Båring Bakke.",
  },
};

const iconBoxStyle: React.CSSProperties = {
  backgroundColor: "var(--color-accent)",
  color: "var(--color-secondary)",
  flexShrink: 0,
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[62px]"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-labelledby="kontakt-titel"
      >
        <Container>
          <div className="py-14 lg:py-20">
            <FadeIn>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/60">
                Middelfartvej 103 · 5466 Asperup
              </p>
              <div className="inline-block mb-4">
                <h1 id="kontakt-titel" className="text-white">
                  Kontakt &<br />find vej
                </h1>
                <RoughUnderline className="mt-2" width="45%" />
              </div>
              <p className="text-white/70 max-w-sm leading-relaxed text-sm mt-2">
                Vi er på toppen af Båring Bakke — ca. 5 minutter fra Middelfart.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Kontaktinfo + kort */}
      <section className="py-14 lg:py-20 texture-white" aria-labelledby="findvej-titel">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

              {/* Venstre: kontaktinfo */}
              <div className="lg:col-span-5">
                <h2 id="findvej-titel" className="mb-8 lg:mb-10">Kom forbi</h2>

                <ul className="space-y-7 sm:space-y-8">

                  {/* Adresse */}
                  <li className="flex items-start gap-4">
                    <span style={iconBoxStyle} aria-hidden="true">
                      <MapPin size={16} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] mb-2">
                        Adresse
                      </p>
                      <address
                        className="not-italic text-lg leading-snug text-[var(--color-secondary)] sm:text-xl"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {virksomhed.adresse}<br />
                        {virksomhed.postnummer} {virksomhed.by}
                      </address>
                      <a
                        href={`https://maps.google.com/?q=${virksomhed.adresse},${virksomhed.postnummer}+${virksomhed.by}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors link-underline"
                      >
                        Åbn i Google Maps
                      </a>
                    </div>
                  </li>

                  {/* Telefon */}
                  <li className="flex items-start gap-4">
                    <span style={iconBoxStyle} aria-hidden="true">
                      <Phone size={16} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] mb-2">
                        Telefon
                      </p>
                      <a
                        href={`tel:${virksomhed.telefon}`}
                        className="text-lg text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors link-underline sm:text-xl"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {virksomhed.telefonDisplay}
                      </a>
                    </div>
                  </li>

                  {/* Åbningstider */}
                  <li className="flex items-start gap-4">
                    <span style={iconBoxStyle} aria-hidden="true">
                      <Clock size={16} strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] mb-2">
                        Åbningstider
                      </p>
                      <ul className="space-y-2">
                        {åbningstider.map((entry) => (
                          <li key={entry.dage} className="grid grid-cols-2 gap-4 text-sm max-w-xs sm:gap-6">
                            <span className="text-[var(--color-muted)]">{entry.dage}</span>
                            <span className="text-[var(--color-secondary)] font-medium">{entry.tid}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-xs text-[var(--color-muted)]">Sæson: {virksomhed.sæson}</p>
                    </div>
                  </li>

                </ul>
              </div>

              {/* Højre: kort */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <iframe
                    title="Båring Blomster på Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.0!2d9.9833!3d55.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9e3c4b5d7c6f%3A0x1234567890abcdef!2sMiddelfartvej%20103%2C%205466%20Asperup!5e0!3m2!1sda!2sdk!4v1699999999999"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Google Maps med markering på Middelfartvej 103, 5466 Asperup"
                  />
                </div>
                <p className="mt-3 text-xs text-[var(--color-muted)]">
                  Middelfartvej 103, 5466 Asperup — øverst på Båring Bakke
                </p>
              </div>

            </div>
          </FadeIn>
        </Container>
      </section>

      <SectionDivider variant="flower" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" />
      <KontaktForm />
      <FAQ />
    </>
  );
}

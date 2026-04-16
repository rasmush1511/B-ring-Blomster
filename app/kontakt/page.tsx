import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import KontaktForm from "@/components/sections/KontaktForm";
import Kort from "@/components/sections/Kort";
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
    description:
      "Åbningstider, adresse og kontaktformular til Båring Blomster på Båring Bakke.",
  },
};

export default function Kontakt() {
  return (
    <>
      {/* Mini-hero */}
      <section className="pt-16 pb-12 bg-[var(--color-primary)]" aria-labelledby="kontakt-titel">
        <Container>
          <FadeIn className="pt-12">
            <div className="inline-block mb-4">
              <h1
                id="kontakt-titel"
                className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Kontakt & find vej
              </h1>
              <RoughUnderline className="mt-2" width="50%" />
            </div>
            <p className="text-white/65 max-w-md leading-relaxed text-sm mt-2">
              Vi er på toppen af Båring Bakke. Kend vejen — og kom forbi.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Kontaktinfo */}
      <section className="py-14 texture-white" aria-labelledby="kontaktinfo-titel">
        <Container>
          <FadeIn>
            <h2 id="kontaktinfo-titel" className="sr-only">Kontaktoplysninger</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[var(--color-accent)]">
                  <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">Adresse</span>
                </div>
                <address className="not-italic text-[var(--color-secondary)] text-lg leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {virksomhed.adresse}<br />
                  {virksomhed.postnummer} {virksomhed.by}
                </address>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Phone size={20} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">Telefon</span>
                </div>
                <a
                  href={`tel:${virksomhed.telefon}`}
                  className="text-[var(--color-secondary)] text-lg hover:text-[var(--color-primary)] transition-colors link-underline"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {virksomhed.telefonDisplay}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Clock size={20} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">Åbningstider</span>
                </div>
                <ul className="space-y-2">
                  {åbningstider.map((entry) => (
                    <li key={entry.dage} className="text-[var(--color-ink)]">
                      <span className="text-xs text-[var(--color-muted)] block">{entry.dage}</span>
                      <span className="text-lg" style={{ fontFamily: "var(--font-serif)" }}>{entry.tid}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--color-muted)]">Sæson: {virksomhed.sæson}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Kort />
      <SectionDivider variant="flower" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12" />
      <KontaktForm />
      <FAQ />
    </>
  );
}

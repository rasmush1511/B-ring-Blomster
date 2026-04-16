import { MapPin, Phone, Clock, CreditCard } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { virksomhed, åbningstider } from "@/lib/data";

export default function PraktiskInfo() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="praktisk-titel">
      <Container>
        <FadeIn>
          <h2
            id="praktisk-titel"
            className="mb-12 text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Åbningstider & adresse
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Adresse */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[var(--color-primary)]">
                <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                  Adresse
                </span>
              </div>
              <div className="text-[var(--color-ink)]">
                <p>{virksomhed.adresse}</p>
                <p>
                  {virksomhed.postnummer} {virksomhed.by}
                </p>
              </div>
              <a
                href={`https://maps.google.com/?q=${virksomhed.adresse},${virksomhed.postnummer}+${virksomhed.by}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-[var(--color-primary)] self-start"
                aria-label="Åbn adresse i Google Maps (nyt vindue)"
              >
                Vis på kort
              </a>
            </div>
          </FadeIn>

          {/* Åbningstider */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Clock size={18} strokeWidth={1.5} className="text-[var(--color-primary)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                  Åbningstider
                </span>
              </div>
              <ul className="space-y-1.5 text-sm text-[var(--color-ink)]">
                {åbningstider.map((entry) => (
                  <li key={entry.dage} className="flex flex-col">
                    <span className="text-[var(--color-muted)] text-xs">{entry.dage}</span>
                    <span>{entry.tid}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--color-muted)]">Sæson: {virksomhed.sæson}</p>
            </div>
          </FadeIn>

          {/* Telefon */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone size={18} strokeWidth={1.5} className="text-[var(--color-primary)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                  Telefon
                </span>
              </div>
              <a
                href={`tel:${virksomhed.telefon}`}
                className="link-underline text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors self-start"
              >
                {virksomhed.telefonDisplay}
              </a>
            </div>
          </FadeIn>

          {/* Betaling */}
          <FadeIn delay={0.25}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CreditCard size={18} strokeWidth={1.5} className="text-[var(--color-primary)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                  Betaling
                </span>
              </div>
              <p className="text-[var(--color-ink)]">MobilePay</p>
              <p className="text-sm text-[var(--color-muted)]">Selvbetjening — tag hvad du vil have, betal på stedet.</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

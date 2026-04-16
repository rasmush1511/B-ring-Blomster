import { MapPin, Phone, Clock, CreditCard } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RoughUnderline from "@/components/ui/RoughUnderline";
import BotanicalDecor from "@/components/ui/BotanicalDecor";
import { virksomhed, åbningstider } from "@/lib/data";

export default function PraktiskInfo() {
  return (
    <section
      className="relative py-16 lg:py-24 overflow-hidden bg-[var(--color-primary)]"
      aria-labelledby="praktisk-titel"
    >
      <BotanicalDecor
        variant="leaves-left"
        className="left-0 bottom-0 w-56 h-full"
        opacity={0.12}
      />
      <BotanicalDecor
        variant="stem-right"
        className="right-8 top-0 w-20 h-full"
        opacity={0.1}
      />

      <Container>
        <FadeIn>
          <div className="inline-block mb-12">
            <h2
              id="praktisk-titel"
              className="text-2xl font-normal text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Åbningstider & adresse
            </h2>
            <RoughUnderline className="mt-2" width="60%" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Adresse */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin size={17} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-white/40">Adresse</span>
              </div>
              <div className="text-white/90">
                <p>{virksomhed.adresse}</p>
                <p>{virksomhed.postnummer} {virksomhed.by}</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${virksomhed.adresse},${virksomhed.postnummer}+${virksomhed.by}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-accent)] hover:text-white transition-colors self-start link-underline"
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
                <Clock size={17} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-white/40">Åbningstider</span>
              </div>
              <ul className="space-y-2 text-sm text-white/90">
                {åbningstider.map((entry) => (
                  <li key={entry.dage} className="flex flex-col">
                    <span className="text-white/40 text-xs">{entry.dage}</span>
                    <span>{entry.tid}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/35">Sæson: {virksomhed.sæson}</p>
            </div>
          </FadeIn>

          {/* Telefon */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone size={17} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-white/40">Telefon</span>
              </div>
              <a
                href={`tel:${virksomhed.telefon}`}
                className="text-white/90 hover:text-[var(--color-accent)] transition-colors self-start link-underline"
              >
                {virksomhed.telefonDisplay}
              </a>
            </div>
          </FadeIn>

          {/* Betaling */}
          <FadeIn delay={0.25}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CreditCard size={17} strokeWidth={1.5} className="text-[var(--color-accent)]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-white/40">Betaling</span>
              </div>
              <p className="text-white/90">MobilePay</p>
              <p className="text-sm text-white/50">Selvbetjening — tag hvad du vil have, betal på stedet.</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

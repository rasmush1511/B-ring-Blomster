import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import LogoSvg from "@/components/ui/LogoSvg";
import { virksomhed, åbningstider } from "@/lib/data";

export default function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-secondary)] text-white/80 mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">

          {/* Kolonne 1 */}
          <div>
            <Link href="/" aria-label="Båring Blomster — gå til forsiden">
              <LogoSvg variant="light" size="md" showTagline />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/50 max-w-xs">
              Selvbetjeningsbutik på toppen af Båring Bakke. Åbent fra forår til efterår.
            </p>
            <a
              href={virksomhed.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors"
              aria-label="Båring Blomster på Facebook (åbner i nyt vindue)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>

          {/* Kolonne 2: Åbningstider */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]/80">
              Åbningstider
            </h3>
            <ul className="space-y-2.5 text-sm">
              {åbningstider.map((entry) => (
                <li key={entry.dage} className="flex justify-between gap-4">
                  <span className="text-white/50">{entry.dage}</span>
                  <span className="text-white/90">{entry.tid}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/35">Sæson: {virksomhed.sæson}</p>
          </div>

          {/* Kolonne 3: Kontakt */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]/80">
              Find vej
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${virksomhed.adresse},${virksomhed.postnummer}+${virksomhed.by}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/50 hover:text-white transition-colors"
                  aria-label="Åbn adresse i Google Maps"
                >
                  <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>
                    {virksomhed.adresse}<br />
                    {virksomhed.postnummer} {virksomhed.by}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${virksomhed.telefon}`}
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                >
                  <Phone size={15} strokeWidth={1.5} className="shrink-0" />
                  {virksomhed.telefonDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/50">
                <Clock size={15} strokeWidth={1.5} className="shrink-0" />
                Betaling via MobilePay
              </li>
            </ul>
          </div>
        </div>

        {/* Nav-links i footer */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex gap-6 text-xs text-white/35" aria-label="Footernavigation">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
            <Link href="/sortiment" className="hover:text-white transition-colors">Sortiment</Link>
            <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
          </nav>
          <p className="text-xs text-white/25">
            © {år} Båring Blomster — Middelfartvej 103, 5466 Asperup
          </p>
        </div>
      </Container>
    </footer>
  );
}

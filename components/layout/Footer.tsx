import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import LogoSvg from "@/components/ui/LogoSvg";
import { virksomhed, åbningstider } from "@/lib/data";

export default function Footer() {
  const år = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-secondary)" }} className="mt-16 lg:mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-3 lg:gap-12">

          {/* Kolonne 1: Logo */}
          <div>
            <Link href="/" aria-label="Båring Blomster — gå til forsiden" className="inline-block">
              <LogoSvg variant="light" size="md" showTagline />
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-[26ch]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Selvbetjenings blomsterbutik på toppen af Båring Bakke. Åbent fra forår til efterår.
            </p>
            <a
              href={virksomhed.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/45 hover:text-[#F5C030] transition-colors duration-200"
              aria-label="Båring Blomster på Facebook (åbner i nyt vindue)"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>

          {/* Kolonne 2: Åbningstider — centreret i kolonnen */}
          <div className="lg:w-fit lg:mx-auto">
            <h3
              className="mb-5 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
            >
              Åbningstider
            </h3>
            <ul className="space-y-3 text-sm">
              {åbningstider.map((entry) => (
                <li key={entry.dage} className="flex justify-between gap-6">
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>{entry.dage}</span>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>{entry.tid}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Sæson: {virksomhed.sæson}
            </p>
          </div>

          {/* Kolonne 3: Find vej — højrestillet, tekst flugter med dividerens højre kant */}
          <div>
          <div className="lg:w-fit lg:ml-auto">
            <h3
              className="mb-5 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
            >
              Find vej
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${virksomhed.adresse},${virksomhed.postnummer}+${virksomhed.by}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  aria-label="Åbn adresse i Google Maps"
                >
                  <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>
                    {virksomhed.adresse}<br />
                    {virksomhed.postnummer} {virksomhed.by}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${virksomhed.telefon}`}
                  className="flex items-center gap-2.5 transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <Phone size={14} strokeWidth={1.5} />
                  {virksomhed.telefonDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Clock size={14} strokeWidth={1.5} />
                Betaling via MobilePay
              </li>
            </ul>
          </div>
          </div>

        </div>

        {/* Bundlinje */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <nav className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }} aria-label="Footernavigation">
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
            <Link href="/sortiment" className="hover:text-white transition-colors">Sortiment</Link>
            <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
          </nav>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {år} Båring Blomster
          </p>
        </div>
      </Container>
    </footer>
  );
}

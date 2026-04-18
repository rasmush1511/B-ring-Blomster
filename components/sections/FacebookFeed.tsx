import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionDivider from "@/components/ui/SectionDivider";
import { virksomhed } from "@/lib/data";

export default function FacebookFeed() {
  return (
    <section className="py-14 lg:py-24 texture-white" aria-labelledby="facebook-titel">
      <Container>
        <SectionDivider variant="flower" className="mb-10 lg:mb-12" />

        <FadeIn>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-center">

            {/* Venstre: tekst + CTA */}
            <div className="text-center lg:text-left">
              <h2
                id="facebook-titel"
                className="mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Følg med på Facebook
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-6 mx-auto lg:mx-0" style={{ maxWidth: "36ch" }}>
                Vi deler nyankomne planter, åbningstider og sæsonsnyt på Facebook. Det er den hurtigste måde at holde sig opdateret på hvad der er fremme på bakken.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href={virksomhed.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] px-5 py-3 text-sm text-white hover:bg-[var(--color-primary-dark)] transition-colors"
                  aria-label="Gå til Båring Blomsters Facebook-side (åbner i nyt vindue)"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Besøg vores Facebook-side
                  <ExternalLink size={13} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Højre: Facebook Page Plugin */}
            <div className="overflow-hidden w-full" style={{ minHeight: 320, maxHeight: 500 }}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbaaringblomster&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                width="100%"
                height="460"
                style={{ border: "none", overflow: "hidden", display: "block" }}
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Båring Blomster på Facebook"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

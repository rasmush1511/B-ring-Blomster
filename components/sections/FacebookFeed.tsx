import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { virksomhed } from "@/lib/data";

// TODO: For at vise et rigtigt embedded Facebook-feed:
// 1. Opret en Facebook-app på developers.facebook.com
// 2. Hent din App ID
// 3. Erstat denne komponent med Facebook Page Plugin:
//    <div class="fb-page" data-href="https://www.facebook.com/baaringblomster/"
//         data-tabs="timeline" data-width="500" data-small-header="true"
//         data-adapt-container-width="true" data-hide-cover="false"
//         data-show-facepile="false"></div>
// 4. Husk at indlæse Facebook SDK i layout.tsx

export default function FacebookFeed() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="facebook-titel">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm">
              <h2
                id="facebook-titel"
                className="mb-3 text-2xl font-normal text-[var(--color-ink)] sm:text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Følg med på Facebook
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                Vi deler nyankomne planter, åbningstider og nyt fra sæsonen på Facebook. Det er den hurtigste måde at holde sig opdateret.
              </p>
              <a
                href={virksomhed.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 border border-[var(--color-primary)] px-5 py-3 text-sm text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                aria-label="Gå til Båring Blomsters Facebook-side (åbner i nyt vindue)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
                Besøg vores Facebook-side
                <ExternalLink size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </div>

            {/* Placeholder-kasse — erstattes med Facebook Page Plugin */}
            <div
              className="w-full sm:w-80 lg:w-96 border border-[var(--color-ink)]/10 bg-[var(--color-cream)] p-8 flex flex-col items-center justify-center gap-4 min-h-48"
              aria-hidden="true"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--color-primary)]" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              <p className="text-center text-sm text-[var(--color-muted)]">
                Facebook-feed vises her
                <br />
                <span className="text-xs">
                  (kræver Facebook App ID — se kommentar i koden)
                </span>
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import MobileNav from "./MobileNav";
import { virksomhed } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/sortiment", label: "Sortiment" },
  { href: "/kontakt", label: "Kontakt & find vej" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-ink)]/8">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            aria-label={`${virksomhed.navn} — gå til forsiden`}
          >
            {/* TODO: Udskift med rigtigt logo — se public/logo.png */}
            <span
              className="font-serif text-xl text-[var(--color-ink)] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Båring Blomster
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Hovednavigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-primary)] font-medium"
                    : "text-[var(--color-ink)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

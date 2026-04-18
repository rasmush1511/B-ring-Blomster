"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import LogoSvg from "@/components/ui/LogoSvg";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/sortiment", label: "Sortiment" },
  { href: "/kontakt", label: "Kontakt & find vej" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <Container>
        <div className="flex h-[62px] items-center justify-between">
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)] rounded-sm"
            aria-label="Båring Blomster — gå til forsiden"
          >
            <LogoSvg variant="light" size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Hovednavigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[var(--color-accent)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

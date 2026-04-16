"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { virksomhed } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/sortiment", label: "Sortiment" },
  { href: "/kontakt", label: "Kontakt & find vej" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center text-[var(--color-ink)] md:hidden"
        aria-label={open ? "Luk menu" : "Åbn menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-[var(--color-cream)] pt-20"
          role="dialog"
          aria-modal="true"
          aria-label="Navigationsmenu"
        >
          <nav className="flex flex-col gap-1 px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-[var(--color-ink)]/10 py-5 font-serif text-2xl tracking-tight transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-12 text-sm text-[var(--color-muted)]">
            <p>{virksomhed.adresse}</p>
            <p>
              {virksomhed.postnummer} {virksomhed.by}
            </p>
            <a
              href={`tel:${virksomhed.telefon}`}
              className="mt-2 block hover:text-[var(--color-primary)]"
            >
              {virksomhed.telefonDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

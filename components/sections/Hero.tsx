"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { heroBillede } from "@/lib/images";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: "92vh", minHeight: "600px" }}
      aria-label="Forsidebillede"
    >
      {/* Parallax-billede */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image
          src={heroBillede.url}
          alt={heroBillede.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient fra bund: giver kontrast til tekst uden at ødelægge billedet */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f14]/75 via-[#0d1f14]/20 to-transparent" />
      </motion.div>

      {/* Indhold — placeret i bund-venstre */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]/90">
            Båring Bakke · Nordvestfyn
          </p>
          <h1
            className="mb-5 text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.25)" }}
          >
            Blomster
            <br />
            fra bakken
          </h1>
          <p className="mb-8 text-base text-white/75 leading-relaxed max-w-sm">
            Selvbetjenings blomsterbutik åben fra marts til oktober. Tag hvad du vil have — betal med MobilePay.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center px-7 bg-white text-[var(--color-secondary)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-secondary)] transition-colors duration-300"
            >
              Find vej til butikken
            </Link>
            <Link
              href="/sortiment"
              className="inline-flex h-12 items-center px-7 border border-white/50 text-white text-sm hover:border-white hover:bg-white/10 transition-colors duration-300"
            >
              Se sortiment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

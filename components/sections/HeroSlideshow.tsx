"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { slideshowBilleder } from "@/lib/images";

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slideshowBilleder.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused, reducedMotion, next]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "92vh", minHeight: "600px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Forsidebillede — billedgalleri af sæsonens planter"
    >
      {/* Billeder med fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slideshowBilleder[current].url}
            alt={slideshowBilleder[current].alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={current === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay: stærk i bunden, let i toppen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(13,31,20,0.82) 0%, rgba(13,31,20,0.30) 45%, rgba(13,31,20,0.10) 100%)",
        }}
      />

      {/* Hero-tekst */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-18 lg:px-12 lg:pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/70">
            Båring Bakke · Nordvestfyn
          </p>
          <h1
            className="mb-5 text-white"
            style={{ fontFamily: "var(--font-serif)", textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
          >
            Blomster
            <br />
            fra bakken
          </h1>
          <p className="mb-8 text-base text-white/75 leading-relaxed max-w-sm" style={{ maxWidth: "34ch" }}>
            Selvbetjeningsbutik åben fra marts til oktober. Tag hvad du vil have — betal med MobilePay.
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
              className="inline-flex h-12 items-center px-7 border border-white/60 text-white text-sm hover:border-white hover:bg-white/10 transition-colors duration-300"
            >
              Se sortiment
            </Link>
          </div>
        </motion.div>

        {/* Navigation-prikker */}
        <div
          className="absolute bottom-6 right-6 sm:right-8 lg:right-12 flex gap-2"
          role="tablist"
          aria-label="Slide-navigation"
        >
          {slideshowBilleder.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === current
                  ? "w-6 bg-[var(--color-accent)]"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Billede ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

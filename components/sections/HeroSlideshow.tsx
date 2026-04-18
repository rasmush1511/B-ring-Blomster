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
      className="relative overflow-hidden w-full"
      style={{ height: "100dvh", minHeight: "560px" }}
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

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(13,31,20,0.85) 0%, rgba(13,31,20,0.35) 45%, rgba(13,31,20,0.15) 100%)",
        }}
      />

      {/* Hero-tekst */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1
            className="mb-4 text-white sm:mb-5"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
          >
            Blomster
            <br />
            på bakken
          </h1>
          <p className="mb-6 text-sm text-white/75 leading-relaxed sm:mb-8 sm:text-base" style={{ maxWidth: "34ch" }}>
            Selvbetjeningsbutik åben fra marts til oktober. Tag hvad du vil have — betal med MobilePay.
          </p>

          <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center px-6 bg-white text-[var(--color-secondary)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-secondary)] transition-colors duration-300 sm:px-7"
            >
              Find vej til butikken
            </Link>
            <Link
              href="/sortiment"
              className="inline-flex h-12 items-center justify-center px-6 border border-white/60 text-white text-sm hover:border-white hover:bg-white/10 transition-colors duration-300 sm:px-7"
            >
              Se sortiment
            </Link>
          </div>
        </motion.div>

        {/* Navigation-prikker */}
        <div
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 lg:right-12 flex gap-2"
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

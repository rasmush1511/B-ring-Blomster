"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { heroBilleder } from "@/lib/images";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const billede = heroBilleder[0];

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] min-h-[560px] overflow-hidden"
      aria-label="Forsidebillede"
    >
      {/* Parallax-billede */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src={billede.url}
          alt={billede.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/30" />
      </motion.div>

      {/* Indhold */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end pb-16 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="mb-5 text-4xl font-normal text-white sm:text-5xl lg:text-6xl max-w-xl"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Blomster fra bakken
          </h1>
          <p className="mb-8 text-base text-white/80 max-w-sm leading-relaxed">
            Selvbetjeningsbutik på Båring Bakke — åben fra forår til efterår.
          </p>
          <Button href="/kontakt" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--color-ink)]">
            Find vej til butikken
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

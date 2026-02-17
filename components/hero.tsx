"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { company, images } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt={images.heroAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Nur unten ein Gradient für Lesbarkeit der Schrift */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 via-30% to-transparent" />
      </div>

      {/* Content – kompakt am unteren Rand */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            {/* Headline */}
            <h1 className="mb-2 font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-white sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
              {company.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="mb-5 text-sm text-brand-gray-300 sm:mb-6 sm:text-base md:text-lg">
              {company.heroSubline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="group flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-red px-6 text-sm font-semibold text-white transition-all hover:bg-brand-red-light hover:shadow-xl hover:shadow-brand-red/30 sm:h-14 sm:px-8 sm:text-base"
              >
                Jetzt Angebot anfordern
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-6 text-sm font-semibold text-brand-gold backdrop-blur-sm transition-all hover:border-brand-gold/50 hover:bg-brand-gold/20 sm:h-14 sm:px-8 sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                {company.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-brand-gold/20 bg-brand-dark/70 backdrop-blur-lg"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/5 sm:grid-cols-4">
            {[
              { value: "5/5", label: "Google Bewertung" },
              { value: "15+", label: "Zufriedene Kunden" },
              { value: "10+", label: "Jahre Erfahrung" },
              { value: "100%", label: "Einsatz" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-dark/50 px-4 py-3.5 text-center backdrop-blur-sm sm:px-6 sm:py-5"
              >
                <div className="font-display text-lg font-bold text-brand-red sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[10px] text-brand-gray-400 sm:mt-1 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

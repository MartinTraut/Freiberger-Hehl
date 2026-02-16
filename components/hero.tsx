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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40 sm:from-brand-dark/90 sm:via-brand-dark/65 sm:to-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 pb-32 pt-28 sm:px-6 sm:pb-36 sm:pt-32 md:pb-40 lg:px-8 lg:pb-44">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tagline – Gold */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3.5 py-1.5 text-xs font-medium text-brand-gold sm:mb-5 sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Erdbau- & Baggerbetrieb in {company.address.city}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {company.heroHeadline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 text-base text-brand-gray-300 sm:mb-10 sm:text-lg md:text-xl lg:text-2xl"
            >
              {company.heroSubline}
            </motion.p>

            {/* CTAs – Rot als Primär */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
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
            </motion.div>
          </div>
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

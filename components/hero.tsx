"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { company, images } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-dark">
      {/* Background Image – Querformat (Desktop/Tablet landscape) */}
      <div className="absolute inset-0 hidden landscape:block">
        <Image
          src={images.hero}
          alt={images.heroAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* Background Image – Hochformat (Handy/Tablet portrait) */}
      <div className="absolute inset-0 landscape:hidden">
        <Image
          src={images.heroMobile}
          alt={images.heroAlt}
          fill
          className="object-cover object-[center_top]"
          priority
          sizes="100vw"
        />
      </div>
      {/* Gradient Overlay – stärker für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 via-35% to-brand-dark/20" />

      {/* Content – kompakt am unteren Rand */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            {/* Headline */}
            <h1 className="mb-2 font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
              {company.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="mb-5 text-sm text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:mb-6 sm:text-base md:text-lg">
              {company.heroSubline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/kontakt"
                className="group flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-red px-6 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-light hover:shadow-xl hover:shadow-brand-red/30 sm:h-14 sm:px-8 sm:text-base"
              >
                Jetzt Angebot anfordern
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 sm:h-14 sm:px-8 sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                {company.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar – volle Breite ohne schwarze Ränder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-white/10 bg-brand-dark/80 backdrop-blur-lg"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {[
              { value: "5/5", label: "Google Bewertung" },
              { value: "15+", label: "Zufriedene Kunden" },
              { value: "10+", label: "Jahre Erfahrung" },
              { value: "100%", label: "Einsatz" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-3.5 text-center sm:px-6 sm:py-5"
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

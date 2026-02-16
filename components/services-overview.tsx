import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

export function ServicesOverview() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mb-10 max-w-2xl sm:mb-16">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-gold">
            Unsere Leistungen
          </p>
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight text-brand-dark sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Von Erdarbeiten bis Natursteinmauern
          </h2>
          <p className="text-base text-brand-gray-500 sm:text-lg">
            Egal ob Weinberg rigolen, Pool oder Baugrube ausheben – wir sind
            Dein erstklassiger Partner für die Umsetzung von Bagger- &
            Erdbauarbeiten.
          </p>
        </FadeIn>

        {/* Services Grid – Flexbox für symmetrische Zentrierung */}
        <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <Link
                href={`/leistungen/${service.slug}`}
                className="group block overflow-hidden rounded-2xl border border-brand-gray-200 bg-white transition-all hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-red/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 font-display text-lg font-bold text-white sm:bottom-4 sm:left-4 sm:text-xl">
                    {service.shortTitle}
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="mb-4 text-sm leading-relaxed text-brand-gray-500">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition-colors group-hover:text-brand-red-dark">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Link to all services */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-dark transition-colors hover:text-brand-red"
          >
            Alle Leistungen ansehen
            <ArrowRight className="h-5 w-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { machines, company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Wrench, Truck, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Maschinenpark – Leistungsfähige Technik",
  description: `Unser Maschinenpark: Leistungsfähige Bagger und Baumaschinen für Erdarbeiten, Aushub und Baggerarbeiten in ${company.region}. Professionelle Technik für jedes Projekt.`,
  alternates: { canonical: "https://www.freibergerhehl.de/maschinen" },
};

const categoryIcons: Record<string, React.ReactNode> = {
  Bagger: <Wrench className="h-5 w-5" />,
  Transport: <Truck className="h-5 w-5" />,
  Spezialgeräte: <Settings className="h-5 w-5" />,
};

export default function MaschinenPage() {
  const categories = [...new Set(machines.map((m) => m.category))];

  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Maschinenpark", href: "/maschinen" }]}
      />
      <PageHeader
        title="Unser Maschinenpark"
        description="Mit unserer leistungsfähigen Technik setzen wir Dein Projekt zuverlässig und effizient um. Sascha bringt als gelernter Land- und Baumaschinen Mechaniker das nötige Know-how mit."
        breadcrumbs={[{ label: "Maschinenpark", href: "/maschinen" }]}
      />

      {/* Maschinen nach Kategorie */}
      {categories.map((category) => (
        <section
          key={category}
          className="border-b border-brand-gray-100 bg-white py-16 first:pt-20 last:border-b-0 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Kategorie-Header */}
            <FadeIn className="mb-10 sm:mb-14">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark text-brand-gold sm:h-12 sm:w-12">
                  {categoryIcons[category]}
                </div>
                <h2 className="font-display text-xl font-bold text-brand-dark sm:text-2xl lg:text-3xl">
                  {category}
                </h2>
              </div>
            </FadeIn>

            {/* Maschinen-Grid */}
            <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {machines
                .filter((m) => m.category === category)
                .map((machine) => (
                  <StaggerItem key={machine.name}>
                    <div className="group h-full overflow-hidden rounded-2xl border border-brand-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-black/10">
                      {/* Bild */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={machine.image}
                          alt={machine.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute bottom-3 left-3 rounded-lg bg-brand-dark/80 px-3 py-1 text-xs font-semibold text-brand-gold backdrop-blur-sm sm:bottom-4 sm:left-4">
                          {machine.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <h3 className="mb-2 font-display text-lg font-bold text-brand-dark sm:text-xl">
                          {machine.name}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed text-brand-gray-500">
                          {machine.description}
                        </p>

                        {/* Specs */}
                        <ul className="space-y-2">
                          {machine.specs.map((spec) => (
                            <li
                              key={spec}
                              className="flex items-start gap-2 text-sm text-brand-gray-600"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Trust Section */}
      <section className="bg-brand-dark py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Technik, auf die Sie sich verlassen können
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-brand-gray-400 sm:text-base">
              Unsere Maschinen werden regelmäßig gewartet und sind jederzeit einsatzbereit.
              So garantieren wir reibungslose Abläufe auf jeder Baustelle.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { value: "10+", label: "Jahre Erfahrung", sub: "im Umgang mit Baumaschinen" },
              { value: "100%", label: "Einsatzbereit", sub: "regelmäßig gewartet & gepflegt" },
              { value: "5/5", label: "Kundenzufriedenheit", sub: "durchgehend 5 Sterne" },
              { value: "6+", label: "Maschinen", sub: "für jeden Einsatz gerüstet" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8">
                  <div className="mb-2 font-display text-3xl font-bold text-brand-gold sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mb-1 font-display text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-brand-gray-400">
                    {stat.sub}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Projekt geplant? Wir bringen die Maschinen."
        text="Erzähl uns von Deinem Vorhaben und wir setzen die passende Technik ein."
      />
    </>
  );
}

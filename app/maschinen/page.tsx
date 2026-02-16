import type { Metadata } from "next";
import Image from "next/image";
import { images, company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Maschinenpark – Leistungsfähige Technik",
  description: `Unser Maschinenpark: Leistungsfähige Bagger und Baumaschinen für Erdarbeiten, Aushub und Baggerarbeiten in ${company.region}. Professionelle Technik für jedes Projekt.`,
  alternates: { canonical: "https://www.freibergerhehl.de/maschinen" },
};

const machineImages = [
  {
    src: images.erdarbeitenFundament,
    alt: "Bagger bei Erdarbeiten für Fundament",
    caption: "Professionelle Erdarbeiten mit leistungsfähiger Technik",
  },
  {
    src: images.zisterneBagger,
    alt: "Bagger bei Aushubarbeiten für Zisterne",
    caption: "Präzise Baggerarbeiten auch auf engem Raum",
  },
  {
    src: images.erdeAbtragen,
    alt: "Bagger beim Erde abtragen",
    caption: "Erde abtragen und Gelände modellieren",
  },
  {
    src: images.weinbergRigolen,
    alt: "Maschinen beim Weinberg rigolen",
    caption: "Spezialgerät für Weinberg-Rigolen",
  },
  {
    src: images.carportSquare,
    alt: "Bagger bei Aushubarbeiten für Carport",
    caption: "Kompakte Maschinen für verschiedene Einsatzbereiche",
  },
  {
    src: images.erdeAbtragen2,
    alt: "Erdaushub und Pool ausheben",
    caption: "Leistungsfähige Technik für effizientes Arbeiten",
  },
];

export default function MaschinenPage() {
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

      {/* Intro Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-display text-2xl font-bold text-brand-dark sm:text-3xl">
              Professionelle Technik für jedes Projekt
            </h2>
            <p className="text-base leading-relaxed text-brand-gray-600">
              Als gelernter Land- und Baumaschinen Mechaniker mit über 10 Jahren
              Erfahrung kennt Sascha Freiberger jede Maschine in- und auswendig.
              Zusammen mit Eriks Expertise im Garten- und Landschaftsbau
              garantieren wir den fachgerechten Einsatz unserer Technik bei
              jedem Projekt.
            </p>
          </FadeIn>

          {/* Machine Gallery */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machineImages.map((machine) => (
              <StaggerItem key={machine.alt}>
                <div className="group overflow-hidden rounded-2xl border border-brand-gray-200 bg-white transition-all hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={machine.src}
                      alt={machine.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-brand-gray-600">
                      {machine.caption}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-brand-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <FadeIn>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-dark">
                  <span className="font-display text-2xl font-bold text-brand-gold">
                    10+
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-dark">
                  Jahre Erfahrung
                </h3>
                <p className="text-sm text-brand-gray-500">
                  im Umgang mit Baumaschinen und Nutzfahrzeugen
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-dark">
                  <span className="font-display text-2xl font-bold text-brand-gold">
                    100%
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-dark">
                  Einsatzbereit
                </h3>
                <p className="text-sm text-brand-gray-500">
                  Gepflegte und gewartete Maschinen für zuverlässigen Einsatz
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-dark">
                  <span className="font-display text-2xl font-bold text-brand-gold">
                    5/5
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-dark">
                  Kundenzufriedenheit
                </h3>
                <p className="text-sm text-brand-gray-500">
                  Durchgehend 5-Sterne-Bewertungen auf Google
                </p>
              </div>
            </FadeIn>
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

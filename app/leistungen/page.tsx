import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Leistungen – Erdarbeiten, Baggerarbeiten & mehr",
  description:
    "Unsere Leistungen: Erdarbeiten, Baggerarbeiten, Aushubarbeiten, Weinberg Rigolen, Natursteinmauern in Heilbronn & Umgebung. Jetzt Angebot anfordern!",
  alternates: { canonical: "https://www.freibergerhehl.de/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Leistungen", href: "/leistungen" }]}
      />
      <PageHeader
        title="Unsere Leistungen"
        description="Von Erdarbeiten über Baggerarbeiten bis hin zu Natursteinmauern – wir bieten Dir ein breites Leistungsspektrum rund um Erdbau und Baggerarbeiten."
        breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.slug} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.334rem)]">
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-brand-gray-200 bg-white transition-all hover:border-brand-red/30 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 font-display text-xl font-bold text-white">
                      {service.shortTitle}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-sm leading-relaxed text-brand-gray-500">
                      {service.description}
                    </p>
                    <ul className="mb-4 space-y-1.5">
                      {service.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-brand-gray-600"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red group-hover:text-brand-red-dark">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection
        headline="Dein Projekt wartet – wir auch!"
        text="Erzähl uns von Deinem Vorhaben. Wir erstellen Dir ein faires Angebot – schnell und unkompliziert."
      />
    </>
  );
}

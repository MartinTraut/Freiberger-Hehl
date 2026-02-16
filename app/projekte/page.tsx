import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { projects, company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Projekte & Referenzen",
  description: `Unsere Projekte und Referenzen: Erdarbeiten, Baggerarbeiten, Zisterne, Natursteinmauern und mehr in ${company.region}. Überzeugen Sie sich selbst.`,
  alternates: { canonical: "https://www.freibergerhehl.de/projekte" },
};

export default function ProjektePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Projekte", href: "/projekte" }]}
      />
      <PageHeader
        title="Unsere Projekte"
        description="Ein Auszug unserer Arbeit – jedes Projekt wird mit vollem Einsatz, Präzision und Leidenschaft umgesetzt."
        breadcrumbs={[{ label: "Projekte", href: "/projekte" }]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="group overflow-hidden rounded-2xl border border-brand-gray-200 bg-white transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                      {project.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-brand-gray-500">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brand-gray-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection
        headline="Dein Projekt könnte das nächste sein"
        text="Erzähl uns von Deinem Vorhaben – wir freuen uns darauf, auch Dein Projekt erfolgreich umzusetzen."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

export function ProjectsTeaser() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-brand-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end sm:gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-gold">
              Referenzen
            </p>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl md:text-4xl lg:text-5xl">
              Unsere Projekte sprechen für sich
            </h2>
          </div>
          <Link
            href="/projekte"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
          >
            Alle Projekte
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.title}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 font-display text-base font-bold text-brand-dark sm:text-lg">
                    {project.title}
                  </h3>
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
  );
}

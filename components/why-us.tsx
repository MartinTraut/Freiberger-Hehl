import { Wrench, Shield, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const reasons = [
  {
    icon: Wrench,
    title: "Erfahrung & Know-how",
    description:
      "Mit über 10 Jahren Erfahrung im Baumaschinen- und GaLaBau-Bereich bringen wir das nötige Fachwissen für jedes Projekt mit.",
  },
  {
    icon: Shield,
    title: "Zuverlässig & Fair",
    description:
      "Wir halten, was wir versprechen. Transparente Angebote, faire Preise und eine saubere Ausführung – darauf kannst Du Dich verlassen.",
  },
  {
    icon: Clock,
    title: "Termingerecht & Präzise",
    description:
      "Absprachen werden eingehalten. Wir arbeiten schnell, sauber und präzise – damit Dein Projekt reibungslos vorankommt.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-brand-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mb-10 text-center sm:mb-14">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-gold">
            Warum wir
          </p>
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Dein zuverlässiger Partner in der Region
          </h2>
          <p className="mx-auto max-w-2xl text-base text-brand-gray-400 sm:text-lg">
            Sascha & Erik verbindet die Begeisterung fürs MACHEN. Als Team
            ergänzen sie sich perfekt – und genau das merken unsere Kunden.
          </p>
        </FadeIn>

        {/* Reasons Grid */}
        <StaggerContainer className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 sm:p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10">
                  <reason.icon className="h-7 w-7 text-brand-red" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-gray-400">
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

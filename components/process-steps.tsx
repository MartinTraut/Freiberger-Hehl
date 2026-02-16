import { Send, MapPin, Hammer } from "lucide-react";
import { processSteps } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

const icons = [Send, MapPin, Hammer];

export function ProcessSteps() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-gold">
            So einfach geht&apos;s
          </p>
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight text-brand-dark sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            In 3 Schritten zu Deinem Projekt
          </h2>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="grid gap-6 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={step.step}>
                <div className="relative text-center">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-10 hidden h-px w-full bg-brand-gray-200 md:block" />
                  )}

                  {/* Step Number */}
                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-dark sm:mb-6 sm:h-20 sm:w-20">
                    <Icon className="h-7 w-7 text-brand-gold sm:h-8 sm:w-8" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold font-display text-[10px] font-bold text-brand-dark sm:-right-2 sm:-top-2 sm:h-7 sm:w-7 sm:text-xs">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mb-3 font-display text-xl font-bold text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-brand-gray-500">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

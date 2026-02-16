import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { WhyUs } from "@/components/why-us";
import { ProjectsTeaser } from "@/components/projects-teaser";
import { ProcessSteps } from "@/components/process-steps";
import { Reviews } from "@/components/reviews";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <ProjectsTeaser />
      <ProcessSteps />
      <Reviews />
      <CTASection />
    </>
  );
}

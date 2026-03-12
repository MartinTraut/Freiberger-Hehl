import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Clock, Wallet, MapPin } from "lucide-react";
import { images, company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeIn } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Über uns – Sascha Freiberger & Erik Hehl",
  description: `Lerne Sascha Freiberger und Erik Hehl kennen – die Gründer von Freiberger & Hehl GbR. Erfahren, zuverlässig und motiviert. Dein Partner für Erdbau in ${company.region}.`,
  alternates: { canonical: "https://www.freibergerhehl.de/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Über uns", href: "/ueber-uns" }]}
      />
      <PageHeader
        title="Über uns"
        description="Zuverlässig – Erfahren – Motiviert"
        breadcrumbs={[{ label: "Über uns", href: "/ueber-uns" }]}
      />

      {/* Story Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={images.team}
                  alt={images.teamAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right" delay={0.2}>
              <div>
                <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-gold">
                  Sascha & Erik
                </p>
                <h2 className="mb-6 font-display text-2xl font-bold text-brand-dark sm:text-3xl">
                  Die Profis für Dein Projekt
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-brand-gray-600">
                  <p>
                    Erik Hehl ist gelernter Garten- und Landschaftsbauer mit
                    langjährigem Erfahrungsschatz im GaLaBau. Sascha Freiberger
                    ist gelernter Land- und Baumaschinen Mechaniker mit über
                    10 Jahren Erfahrung im Nutzfahrzeuge-Sektor.
                  </p>
                  <p>
                    Bereits mit 18 Jahren gründete jeder sein eigenes
                    Unternehmen. Beide verbindet seit frühester Kindheit eine
                    große Liebe zu allen Arten von Fahrzeugen.
                  </p>
                  <p>
                    Ihre Begeisterung &ldquo;fürs MACHEN&rdquo; hat beide
                    zusammengeführt und nach kurzer Zeit war klar, dass sie sich
                    perfekt ergänzen.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-dark py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center sm:mb-16">
            <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-red">
              Wofür wir stehen
            </p>
            <h2 className="mb-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Unsere Werte
            </h2>
            <p className="mx-auto max-w-2xl text-brand-gray-400">
              Das zeichnet uns als Team aus – und dafür stehen wir bei jedem
              Projekt.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Zuverlässigkeit",
                text: "Absprachen werden eingehalten. Wenn wir zusagen, dann liefern wir – termingerecht und in der vereinbarten Qualität.",
              },
              {
                icon: Clock,
                title: "Erfahrung",
                text: "Über 10 Jahre Erfahrung im Baumaschinen- und GaLaBau-Bereich. Wir wissen, was wir tun.",
              },
              {
                icon: Wallet,
                title: "Faire Preise",
                text: "Transparente Angebote ohne versteckte Kosten. Du weißt vorher, was Dich erwartet.",
              },
              {
                icon: MapPin,
                title: "Regional",
                text: `Fest verwurzelt in ${company.address.city} und der Region ${company.region}. Kurze Wege, schnelle Reaktion.`,
              },
            ].map((value) => (
              <FadeIn key={value.title}>
                <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10">
                    <value.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-brand-gray-400">
                    {value.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center sm:mb-14">
            <h2 className="mb-4 font-display text-2xl font-bold text-brand-dark sm:text-3xl">
              Das Team
            </h2>
          </FadeIn>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {company.founders.map((founder) => (
              <FadeIn key={founder.name}>
                <div className="flex h-full flex-col items-center rounded-xl border border-brand-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-dark font-display text-2xl font-bold text-brand-red">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mb-1 font-display text-lg font-bold text-brand-dark">
                    {founder.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-brand-red">
                    {founder.role}
                  </p>
                  <p className="text-sm text-brand-gray-500">
                    {founder.training}
                  </p>
                  <p className="mt-1 flex-1 text-sm text-brand-gray-500">
                    {founder.experience}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Bereit für Dein nächstes Projekt?"
        text="Lass uns gemeinsam loslegen. Wir freuen uns auf Deine Anfrage!"
      />
    </>
  );
}

import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeIn } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Kontakt – Jetzt Angebot anfordern",
  description: `Kontaktiere Freiberger & Hehl GbR für Dein Bau-Projekt. Erdarbeiten, Baggerarbeiten und mehr in ${company.region}. Telefon: ${company.phoneDisplay}`,
  alternates: { canonical: "https://www.freibergerhehl.de/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Kontakt", href: "/kontakt" }]}
      />
      <PageHeader
        title="Kontakt"
        description="Erzähl uns von Deinem Projekt – wir melden uns schnell zurück."
        breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-brand-dark">
                  So erreichst Du uns
                </h2>
                <div className="space-y-6">
                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark transition-colors group-hover:bg-brand-red">
                      <Phone className="h-5 w-5 text-brand-gold transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-gray-500">
                        Telefon
                      </p>
                      <p className="text-lg font-semibold text-brand-dark">
                        {company.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark transition-colors group-hover:bg-brand-red">
                      <Mail className="h-5 w-5 text-brand-gold transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-gray-500">
                        E-Mail
                      </p>
                      <p className="text-lg font-semibold text-brand-dark">
                        {company.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark">
                      <MapPin className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-gray-500">
                        Adresse
                      </p>
                      <p className="text-lg font-semibold text-brand-dark">
                        {company.address.street}
                        <br />
                        {company.address.zip} {company.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-dark">
                      <Clock className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-gray-500">
                        Erreichbarkeit
                      </p>
                      <p className="text-lg font-semibold text-brand-dark">
                        Mo–Fr: 7:00 – 18:00 Uhr
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder (privacy-friendly) */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-brand-gray-200 bg-brand-gray-50 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                    <h3 className="font-display text-sm font-bold text-brand-dark">
                      Standort
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-brand-gray-500">
                    {company.name}
                    <br />
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${company.address.street}, ${company.address.zip} ${company.address.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                  >
                    In Google Maps öffnen
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
              <div className="rounded-2xl border border-brand-gray-200 bg-white p-8 shadow-sm lg:p-10">
                <h2 className="mb-2 font-display text-2xl font-bold text-brand-dark">
                  Anfrage senden
                </h2>
                <p className="mb-8 text-sm text-brand-gray-500">
                  Beschreibe Dein Projekt und wir melden uns zeitnah mit einem
                  Angebot bei Dir.
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

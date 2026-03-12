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

      <section className="bg-white py-16 sm:py-20 lg:py-24">
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
                      <Phone className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
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
                      <Mail className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
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
                      <MapPin className="h-5 w-5 text-brand-red" />
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
                      <Clock className="h-5 w-5 text-brand-red" />
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

                {/* Google Maps Karte */}
                <div className="mt-10 overflow-hidden rounded-xl border border-brand-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d9.1518!3d49.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982930542d7b7f%3A0x4e0b1b1b1b1b1b1b!2sChristian-Leichtle-Stra%C3%9Fe%2058%2C%2074388%20Talheim!5e0!3m2!1sde!2sde!4v1"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort Freiberger & Hehl GbR – Talheim"
                  />
                  <div className="flex items-center justify-between bg-brand-gray-50 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-brand-red" />
                      <p className="text-xs font-medium text-brand-gray-600">
                        {company.address.street}, {company.address.zip} {company.address.city}
                      </p>
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${company.address.street}, ${company.address.zip} ${company.address.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                    >
                      Route planen
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
              <div className="rounded-xl border border-brand-gray-200 bg-white p-8 shadow-sm lg:p-10">
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

import type { Metadata } from "next";
import { company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${company.name}, ${company.address.street}, ${company.address.zip} ${company.address.city}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.freibergerhehl.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Impressum", href: "/impressum" }]}
      />
      <PageHeader
        title="Impressum"
        breadcrumbs={[{ label: "Impressum", href: "/impressum" }]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-brand-gray-600 [&_p]:leading-relaxed [&_a]:text-brand-red [&_a]:no-underline hover:[&_a]:underline">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </p>

            <h2>Vertreten durch</h2>
            <p>
              {company.founders.map((f) => f.name).join(", ")}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon:{" "}
              <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>

            <h2>Finanzamt</h2>
            <p>
              Finanzamt: {company.legal.taxOffice}
              <br />
              Steuernummer: {company.legal.taxNumber}
            </p>

            <h2>Gerichtsstand</h2>
            <p>{company.legal.court}</p>

            <h2>Redaktionell verantwortlich</h2>
            <p>{company.name}</p>

            <h2>EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

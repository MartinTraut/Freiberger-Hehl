import type { Metadata } from "next";
import { company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der ${company.name}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.freibergerhehl.de/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Datenschutz", href: "/datenschutz" }]}
      />
      <PageHeader
        title="Datenschutzerklärung"
        breadcrumbs={[{ label: "Datenschutz", href: "/datenschutz" }]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-brand-dark [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-brand-gray-600 [&_p]:leading-relaxed [&_a]:text-brand-red [&_a]:no-underline hover:[&_a]:underline [&_ul]:text-brand-gray-600 [&_li]:text-brand-gray-600">
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              {company.name}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              Telefon:{" "}
              <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>

            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen
              allgemeiner Natur erfasst (sog. Server-Logfiles). Diese
              beinhalten u.a. den Browsertyp, das verwendete Betriebssystem,
              die Referrer-URL, die IP-Adresse, den Hostname des
              zugreifenden Rechners sowie die Uhrzeit der Serveranfrage.
            </p>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
              Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>

            <h2>3. Kontaktformular</h2>
            <p>
              Wenn Du uns über das Kontaktformular Anfragen zukommen lässt,
              werden Deine Angaben aus dem Formular inklusive der dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
              für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von
              Anfragen).
            </p>

            <h2>4. Hosting</h2>
            <p>
              Unsere Website wird bei einem externen Dienstleister gehostet.
              Personenbezogene Daten, die auf dieser Website erfasst werden,
              werden auf den Servern des Hosters gespeichert. Hierbei kann
              es sich u.a. um IP-Adressen, Kontaktanfragen, Meta- und
              Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Webseitenzugriffe und sonstige Daten handeln.
            </p>

            <h2>5. Deine Rechte</h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Deine bei uns gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Deiner bei uns gespeicherten Daten</li>
              <li>
                Einschränkung der Datenverarbeitung, sofern wir Deine Daten
                aufgrund gesetzlicher Pflichten noch nicht löschen dürfen
              </li>
              <li>Widerspruch gegen die Verarbeitung Deiner Daten</li>
              <li>
                Datenübertragbarkeit, sofern Du in die Datenverarbeitung
                eingewilligt hast oder einen Vertrag mit uns geschlossen hast
              </li>
            </ul>
            <p>
              Sofern Du uns eine Einwilligung erteilt hast, kannst Du diese
              jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>

            <h2>6. Social Media</h2>
            <p>
              Wir unterhalten Onlinepräsenzen auf den sozialen Netzwerken
              Facebook und Instagram. Soweit Du dort mit uns interagierst,
              gelten zusätzlich die Datenschutzerklärungen der jeweiligen
              Plattformen.
            </p>

            <h2>7. Änderung der Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
              damit sie stets den aktuellen rechtlichen Anforderungen
              entspricht oder um Änderungen unserer Leistungen umzusetzen.
              Für Deinen erneuten Besuch gilt dann die neue
              Datenschutzerklärung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

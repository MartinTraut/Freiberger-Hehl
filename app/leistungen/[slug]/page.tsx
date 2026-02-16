import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { services, company } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { CTASection } from "@/components/cta-section";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeIn } from "@/components/motion-wrapper";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.freibergerhehl.de/leistungen/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: service.shortTitle, href: `/leistungen/${service.slug}` },
        ]}
      />
      <PageHeader
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Leistungen", href: "/leistungen" },
          { label: service.shortTitle, href: `/leistungen/${service.slug}` },
        ]}
      />

      {/* Service Content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
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
                <h2 className="mb-6 font-display text-2xl font-bold text-brand-dark sm:text-3xl">
                  {service.title} in {company.region}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-brand-gray-600">
                  {service.longDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="mb-4 font-display text-lg font-bold text-brand-dark">
                    Unsere Leistungen im Überblick
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-brand-gray-600"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-red-light hover:shadow-lg"
                  >
                    Jetzt Angebot anfordern
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:${company.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-gray-200 px-6 py-3.5 text-sm font-semibold text-brand-dark transition-all hover:border-brand-red"
                  >
                    <Phone className="h-4 w-4" />
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-brand-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-10 font-display text-2xl font-bold text-brand-dark">
              Weitere Leistungen
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-brand-gray-200 bg-white p-4 transition-all hover:border-brand-red/30 hover:shadow-md"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-brand-dark group-hover:text-brand-red">
                    {s.shortTitle}
                  </h3>
                  <p className="mt-1 text-xs text-brand-gray-500 line-clamp-2">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

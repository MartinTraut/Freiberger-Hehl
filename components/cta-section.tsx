import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/data";
import { FadeIn } from "./motion-wrapper";

interface CTASectionProps {
  headline?: string;
  text?: string;
  dark?: boolean;
}

export function CTASection({
  headline = "Starte jetzt Dein Projekt mit Freiberger & Hehl",
  text = "Egal ob ein größerer Pool, ein Carport für Dein neues Auto, eine Baugrube für Dein neues Zuhause oder das Rigolen von Weinbergen – wir sind Dein zuverlässiger Partner und freuen uns auf Deine Anfrage.",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={dark ? "bg-brand-dark py-16 sm:py-24 lg:py-32" : "bg-white py-16 sm:py-24 lg:py-32"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2
            className={`mb-4 font-display text-2xl font-extrabold tracking-tight sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl ${
              dark ? "text-white" : "text-brand-dark"
            }`}
          >
            {headline}
          </h2>
          <p
            className={`mb-8 text-base leading-relaxed sm:mb-10 sm:text-lg ${
              dark ? "text-brand-gray-400" : "text-brand-gray-500"
            }`}
          >
            {text}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/kontakt"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 text-sm font-semibold text-white transition-all hover:bg-brand-red-light hover:shadow-xl hover:shadow-brand-red/20 sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              Jetzt Anfrage senden
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className={`flex h-12 w-full items-center justify-center gap-2 rounded-lg border px-6 text-sm font-semibold transition-all sm:h-14 sm:w-auto sm:px-8 sm:text-base ${
                dark
                  ? "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                  : "border-brand-gray-200 text-brand-dark hover:border-brand-red hover:bg-brand-gray-50"
              }`}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              {company.phoneDisplay}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

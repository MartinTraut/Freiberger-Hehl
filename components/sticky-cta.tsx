"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t border-brand-gray-200 bg-white/95 px-4 pt-3 pb-3 backdrop-blur-md transition-transform duration-300 safe-bottom lg:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center gap-2.5">
        <a
          href={`tel:${company.phone}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-dark text-white transition-colors active:bg-brand-gray-800"
          aria-label="Jetzt anrufen"
        >
          <Phone className="h-5 w-5" />
        </a>
        <Link
          href="/kontakt"
          className="flex h-12 flex-1 items-center justify-center rounded-lg bg-brand-red text-sm font-semibold text-white transition-all active:bg-brand-red-light"
        >
          Jetzt Angebot anfordern
        </Link>
      </div>
    </div>
  );
}

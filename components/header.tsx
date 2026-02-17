"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { company, images, navigation } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn(
            "flex items-center transition-all duration-300",
            isScrolled || !isHome ? "h-24 sm:h-32" : "h-16 sm:h-20"
          )}>

          {/* Logo – fade in beim Scrollen, Platz bleibt reserviert */}
          <Link
            href="/"
            className={cn(
              "relative z-50 shrink-0 transition-all duration-300",
              isScrolled || !isHome
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            )}
          >
            <Image
              src={images.logo}
              alt={company.name}
              width={300}
              height={200}
              className="h-20 w-auto sm:h-28"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex lg:ml-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  isScrolled || !isHome ? "text-brand-gray-300" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:ml-auto lg:flex">
            <a
              href={`tel:${company.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-gold",
                isScrolled ? "text-brand-gray-300" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              )}
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              className="rounded-lg bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-red-light hover:shadow-lg hover:shadow-brand-red/30"
            >
              Jetzt Angebot anfordern
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 ml-auto flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
            aria-label={isMobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu – Dark Fullscreen */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-dark transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col justify-center px-6 sm:px-8">
          <nav className="space-y-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block font-display text-xl font-bold text-white transition-colors hover:text-brand-red sm:text-2xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <a
              href={`tel:${company.phone}`}
              className="flex h-12 items-center gap-3 text-base font-medium text-brand-gray-300 sm:text-lg"
            >
              <Phone className="h-5 w-5 text-brand-gold" />
              {company.phoneDisplay}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setIsMobileOpen(false)}
              className="block w-full rounded-lg bg-brand-red px-6 py-3.5 text-center text-base font-semibold text-white transition-all active:bg-brand-red-light sm:py-4 sm:text-lg"
            >
              Jetzt Angebot anfordern
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

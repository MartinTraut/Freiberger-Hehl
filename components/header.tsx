"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { company, images, navigation, services } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            isScrolled || !isHome ? "h-20 sm:h-24" : "h-16 sm:h-20"
          )}>

          {/* Logo – kleiner und harmonischer */}
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
              width={240}
              height={160}
              className="h-14 w-auto sm:h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex lg:ml-8">
            {navigation.map((item) => {
              // Leistungen mit Dropdown
              if (item.label === "Leistungen") {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-white",
                        isScrolled || !isHome ? "text-brand-gray-300" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isServicesOpen && "rotate-180"
                      )} />
                    </Link>

                    {/* Dropdown */}
                    <div className={cn(
                      "absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-200",
                      isServicesOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"
                    )}>
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-dark/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/leistungen/${service.slug}`}
                            className="block px-4 py-3 text-sm text-brand-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.shortTitle}
                          </Link>
                        ))}
                        <div className="border-t border-white/10">
                          <Link
                            href="/leistungen"
                            className="block px-4 py-3 text-sm font-medium text-brand-red transition-colors hover:bg-white/10 hover:text-brand-red-light"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Alle Leistungen
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:ml-auto lg:flex">
            <a
              href={`tel:${company.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-white",
                isScrolled || !isHome ? "text-brand-gray-300" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
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
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block font-display text-xl font-bold text-white transition-colors hover:text-brand-red sm:text-2xl"
                >
                  {item.label}
                </Link>
                {/* Mobile Leistungen Sub-Items */}
                {item.label === "Leistungen" && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/leistungen/${service.slug}`}
                        onClick={() => setIsMobileOpen(false)}
                        className="block text-sm text-brand-gray-400 transition-colors hover:text-white"
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <a
              href={`tel:${company.phone}`}
              className="flex h-12 items-center gap-3 text-base font-medium text-brand-gray-300 sm:text-lg"
            >
              <Phone className="h-5 w-5 text-brand-red" />
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

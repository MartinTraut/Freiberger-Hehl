"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion-wrapper";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-brand-gold text-brand-gold"
              : "fill-brand-gray-200 text-brand-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-brand-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mb-10 text-center sm:mb-16">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-brand-gold">
            Bewertungen
          </p>
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight text-brand-dark sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Das sagen unsere Kunden
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-brand-gold text-brand-gold"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-brand-dark">5.0</span>
            <span className="text-xs text-brand-gray-500 sm:text-sm">
              basierend auf 15 Google-Bewertungen
            </span>
          </div>
        </FadeIn>

        {/* Reviews Grid */}
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <StaggerItem key={review.name}>
              <div className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                <StarRating rating={review.rating} />
                <p className="mt-4 text-sm leading-relaxed text-brand-gray-600">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark font-display text-sm font-bold text-white">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-sm font-medium text-brand-dark">
                    {review.name}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { Send, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission – connect to real backend/API
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
          Anfrage gesendet!
        </h3>
        <p className="text-sm text-brand-gray-500">
          Vielen Dank für Deine Nachricht. Wir melden uns schnellstmöglich bei
          Dir zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Fields */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="vorname"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            Vorname *
          </label>
          <input
            type="text"
            id="vorname"
            name="vorname"
            required
            className="w-full rounded-lg border border-brand-gray-200 bg-white px-4 py-3.5 text-base text-brand-dark placeholder:text-brand-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 sm:py-3 sm:text-sm"
            placeholder="Dein Vorname"
          />
        </div>
        <div>
          <label
            htmlFor="nachname"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            Nachname *
          </label>
          <input
            type="text"
            id="nachname"
            name="nachname"
            required
            className="w-full rounded-lg border border-brand-gray-200 bg-white px-4 py-3.5 text-base text-brand-dark placeholder:text-brand-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 sm:py-3 sm:text-sm"
            placeholder="Dein Nachname"
          />
        </div>
      </div>

      {/* Phone & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="telefon"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            Telefonnummer *
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            className="w-full rounded-lg border border-brand-gray-200 bg-white px-4 py-3.5 text-base text-brand-dark placeholder:text-brand-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 sm:py-3 sm:text-sm"
            placeholder="Deine Telefonnummer"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-brand-dark"
          >
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-brand-gray-200 bg-white px-4 py-3.5 text-base text-brand-dark placeholder:text-brand-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 sm:py-3 sm:text-sm"
            placeholder="Deine E-Mail-Adresse"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projektart"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          Projektart
        </label>
        <select
          id="projektart"
          name="projektart"
          className="w-full appearance-none rounded-lg border border-brand-gray-200 bg-white px-4 py-3.5 text-base text-brand-dark focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 sm:py-3 sm:text-sm"
        >
          <option value="">Bitte auswählen</option>
          <option value="erdarbeiten">Erdarbeiten</option>
          <option value="baggerarbeiten">Baggerarbeiten</option>
          <option value="aushubarbeiten">Aushubarbeiten (Pool, Baugrube, Zisterne)</option>
          <option value="weinberg-rigolen">Weinberg Rigolen</option>
          <option value="natursteinmauern">Natursteinmauern</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label
          htmlFor="ort"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          Ort / Projektstandort
        </label>
        <input
          type="text"
          id="ort"
          name="ort"
          className="w-full rounded-lg border border-brand-gray-200 bg-white px-4 py-3.5 text-base text-brand-dark placeholder:text-brand-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 sm:py-3 sm:text-sm"
          placeholder="z.B. Heilbronn, Talheim, ..."
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="nachricht"
          className="mb-1.5 block text-sm font-medium text-brand-dark"
        >
          Deine Nachricht *
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-brand-gray-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
          placeholder="Beschreibe Dein Projekt kurz..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            Anfrage absenden
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

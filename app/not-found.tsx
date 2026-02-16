import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-brand-dark px-4">
      <div className="text-center">
        <p className="font-display text-6xl font-extrabold text-brand-red sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-3 text-brand-gray-400">
          Die gesuchte Seite existiert leider nicht.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-red-light"
        >
          Zur Startseite
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

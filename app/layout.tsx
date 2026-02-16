import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { OrganizationJsonLd } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Erdbau- & Baggerbetrieb Heilbronn | Freiberger & Hehl GbR",
    template: "%s | Freiberger & Hehl GbR",
  },
  description:
    "Ihr zuverlässiger Partner für Erdarbeiten, Baggerarbeiten und Aushubarbeiten in Heilbronn & Umgebung. Weinberg rigolen, Pool ausheben, Baugrube, Natursteinmauern. ✓ Zuverlässig ✓ Termingerecht ✓ Faire Preise",
  keywords: [
    "Erdbau Heilbronn",
    "Baggerarbeiten Heilbronn",
    "Erdarbeiten Talheim",
    "Baggerbetrieb Heilbronn",
    "Aushubarbeiten Heilbronn",
    "Weinberg rigolen",
    "Pool ausheben Heilbronn",
    "Baugrube ausheben",
    "Natursteinmauer setzen",
    "Freiberger Hehl",
  ],
  authors: [{ name: "Freiberger & Hehl GbR" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.freibergerhehl.de",
    siteName: "Freiberger & Hehl GbR",
    title: "Erdbau- & Baggerbetrieb Heilbronn | Freiberger & Hehl GbR",
    description:
      "Ihr zuverlässiger Partner für Erdarbeiten und Baggerarbeiten in Heilbronn & Umgebung. Jetzt Angebot anfordern!",
    images: [
      {
        url: "https://www.freibergerhehl.de/wp-content/uploads/2022/05/Design-ohne-Titel9.png",
        width: 1920,
        height: 891,
        alt: "Freiberger & Hehl – Erdbau & Baggerbetrieb",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.freibergerhehl.de",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased overflow-x-hidden`}
      >
        <OrganizationJsonLd />
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

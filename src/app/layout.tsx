import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";
import BackToTop from "@/components/BackToTop";
import MobileCtaBar from "@/components/MobileCtaBar";
import VariantSwitcher from "@/components/VariantSwitcher";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecoprorenove.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ECOPRORENOVE — Rénovation énergétique tertiaire, résidentielle & agricole",
    template: "%s | ECOPRORENOVE",
  },
  description:
    "ECOPRORENOVE accompagne les maîtres d'ouvrage dans leurs projets d'efficacité énergétique — du tertiaire à l'agricole — avec un dossier CEE sécurisé et une pose RGE.",
  applicationName: "ECOPRORENOVE",
  authors: [{ name: "ECOPRORENOVE" }],
  generator: "Next.js",
  keywords: [
    "rénovation énergétique",
    "CEE",
    "Certificats d'Économies d'Énergie",
    "MaPrimeRénov",
    "isolation combles",
    "isolation toiture",
    "bardage fibre-ciment",
    "destratificateur d'air",
    "tertiaire",
    "RGE",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ECOPRORENOVE",
    url: "/",
    title: "ECOPRORENOVE — Rénovation énergétique tertiaire, résidentielle & agricole",
    description:
      "Interlocuteur unique, dossier CEE sécurisé, pose RGE. Métropole et La Réunion.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECOPRORENOVE",
    description: "Rénovation énergétique — CEE, MaPrimeRénov', pose RGE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#49a739",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`} data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <Navbar />
        <ViewTransition>
          <main id="main">{children}</main>
        </ViewTransition>
        <Footer />
        <BackToTop />
        <MobileCtaBar />
        <ScrollEffects />
        <VariantSwitcher />
      </body>
    </html>
  );
}

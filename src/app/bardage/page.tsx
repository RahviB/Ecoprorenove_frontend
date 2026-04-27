import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import BardageClient from "./BardageClient";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bardage fibre-ciment — configurateur 7 finitions",
  description:
    "Bardage fibre-ciment haut de gamme — 7 finitions, 2 profils de pose, visualisation temps réel sur maison témoin. Isolation par l'extérieur, MaPrimeRénov' jusqu'à 75€/m².",
  alternates: { canonical: "/bardage" },
  openGraph: {
    url: "/bardage",
    title: "Bardage fibre-ciment — ECOPRORENOVE",
    description:
      "7 finitions visualisables sur maison témoin. Isolation par l'extérieur, durabilité 50 ans+.",
  },
};

export default function BardagePage() {
  return (
    <div className={fraunces.variable}>
      <ServiceJsonLd
        name="Bardage fibre-ciment"
        description="Bardage fibre-ciment posé en isolation par l'extérieur (ITE). 7 finitions, 2 profils de pose, durabilité 50 ans+."
        url="/bardage"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Bardage fibre-ciment", url: "/bardage" },
        ]}
      />
      <BardageClient />
    </div>
  );
}

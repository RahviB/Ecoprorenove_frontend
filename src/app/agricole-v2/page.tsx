import type { Metadata } from "next";
import SectorPageV2 from "@/components/SectorPageV2";

export const metadata: Metadata = {
  title: "Agricole V2 — comparaison locale",
  description: "Version alternative de la page secteur agricole pour comparaison locale.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/agricole-v2" },
};

export default function AgricoleV2Page() {
  return (
    <SectorPageV2
      sector="agricole"
      label="Agricole"
      originalHref="/agricole"
      eyebrow="Secteur agricole · élevage, serres, hangars"
      title={<>Adapter travaux et fiche CEE <em>à l&apos;usage réel du bâtiment.</em></>}
      lead="Cette version présente l'agricole par contraintes concrètes : confort animal, hygrométrie, stockage, saisonnalité et choix de la fiche CEE avant l'engagement des travaux."
      badges={["Élevage", "Serres", "Hangars", "BAT-EN · IND-UT · AGR-TH"]}
      metrics={[
        { value: "3", label: "familles de bâtiments à traiter différemment" },
        { value: "CEE", label: "fiche à choisir avant devis et travaux" },
        { value: "RGE", label: "pose coordonnée avec l'exploitation" },
      ]}
      visuals={[
        {
          src: "/images/isolation-toiture-rampants.webp",
          alt: "Isolation sous toiture pour bâtiment agricole",
          label: "Sous toiture",
        },
        {
          src: "/images/extracteur/tornado-toiture-installation.webp",
          alt: "Extracteur statique posé sur toiture agricole",
          label: "Extraction",
        },
        {
          src: "/images/destratificateur-air.webp",
          alt: "Déstratificateur d'air pour grand volume",
          label: "Ambiance",
        },
      ]}
      features={[
        {
          title: "Bâtiments d'élevage",
          text: "Stabiliser température et humidité sans perturber le bien-être animal ni les contraintes sanitaires.",
        },
        {
          title: "Hangars et stockage",
          text: "Traiter charpente, accès, ventilation et conservation des récoltes ou du fourrage selon l'usage.",
        },
        {
          title: "Serres et cultures abritées",
          text: "Réduire les besoins de chauffage et homogénéiser l'air sans gêner la conduite culturale.",
        },
        {
          title: "Fiches CEE spécifiques",
          text: "Qualifier BAT-EN, IND-UT ou AGR-TH selon l'opération et le statut exact du bâtiment.",
        },
        {
          title: "Hygrométrie",
          text: "Relier isolation, extraction et destratification afin d'éviter les pathologies d'humidité.",
        },
        {
          title: "Calendrier d'exploitation",
          text: "Caler les interventions sur les cycles d'élevage, de stockage ou de production.",
        },
      ]}
      solutions={[
        { title: "Isolation toiture & rampants", href: "/isolation-toiture-rampants", text: "Isolation lourde sous toiture agricole." },
        { title: "Bardage", href: "/bardage", text: "Façades et enveloppe de bâtiments agricoles." },
        { title: "Extracteur d'air", href: "/extracteur-air", text: "Hygrométrie et renouvellement d'air." },
        { title: "VMC double flux agricole", href: "/vmc-double-flux", text: "Récupération de chaleur sur air extrait." },
        { title: "Accompagnement stratégique", href: "/accompagnement-strategique", text: "Arbitrage selon l'exploitation." },
        { title: "Prime CEE", href: "/prime-cee", text: "Montage du financement adapté." },
      ]}
      formTitle={<>Votre exploitation, <em>avec la bonne fiche CEE.</em></>}
      formLead="Le point clé est d'identifier le type de bâtiment, son usage et les contraintes d'exploitation avant de parler solution."
      formSource="agricole-v2"
      formFields={[
        { id: "agricole-v2-prenom", label: "Prénom *", name: "prenom", required: true },
        { id: "agricole-v2-nom", label: "Nom *", name: "nom", required: true },
        { id: "agricole-v2-societe", label: "Exploitation", name: "societe" },
        { id: "agricole-v2-tel", label: "Téléphone *", name: "telephone", type: "tel", required: true },
        { id: "agricole-v2-email", label: "Email *", name: "email", type: "email", required: true },
        {
          id: "agricole-v2-typebat",
          label: "Type de bâtiment",
          name: "type_batiment",
          options: [
            ["elevage", "Bâtiment d'élevage"],
            ["hangar", "Hangar de stockage"],
            ["serre", "Serre / cultures abritées"],
            ["autre", "Autre"],
          ],
        },
      ]}
      messagePlaceholder="Type de bâtiment, surface, charpente, animaux ou cultures concernés, contraintes sanitaires / saisonnières..."
    />
  );
}

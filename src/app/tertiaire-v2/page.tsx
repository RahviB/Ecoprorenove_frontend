import type { Metadata } from "next";
import SectorPageV2 from "@/components/SectorPageV2";

export const metadata: Metadata = {
  title: "Tertiaire V2 — comparaison locale",
  description: "Version alternative de la page secteur tertiaire pour comparaison locale.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/tertiaire-v2" },
};

export default function TertiaireV2Page() {
  return (
    <SectorPageV2
      sector="tertiaire"
      label="Tertiaire"
      originalHref="/tertiaire"
      eyebrow="Secteur tertiaire · bureaux, commerces, santé, enseignement"
      title={<>Réduire les consommations du parc tertiaire <em>sans couper l&apos;activité.</em></>}
      lead="Une version plus opérationnelle de la page tertiaire : trajectoire décret tertiaire, continuité d'exploitation, dossier CEE et phasage des travaux sont visibles dès le premier écran."
      badges={["Décret tertiaire", "CEE structurés", "Travaux phasés", "Métropole + Réunion"]}
      metrics={[
        { value: "-40%", label: "objectif 2030 pour les bâtiments concernés" },
        { value: "1 000 m²", label: "seuil courant du décret tertiaire" },
        { value: "1", label: "interlocuteur pour cadrer dossier et travaux" },
      ]}
      visuals={[
        {
          src: "/images/destratificateur-air.webp",
          alt: "Destratificateur d'air installé dans un grand volume tertiaire",
          label: "Grands volumes",
        },
        {
          src: "/images/isolation-planchers-bas.webp",
          alt: "Isolation de planchers bas en bâtiment tertiaire",
          label: "Enveloppe",
        },
        {
          src: "/images/extracteur/tornado-toiture-installation.webp",
          alt: "Extracteur d'air statique installé en toiture",
          label: "Ventilation",
        },
      ]}
      features={[
        {
          title: "Trajectoire réglementaire",
          text: "Structurer les travaux selon les obligations du décret tertiaire et les arbitrages immobiliers déjà en cours.",
        },
        {
          title: "Continuité d'exploitation",
          text: "Prévoir les interventions hors heures sensibles, les accès, les zones occupées et les contraintes propres à l'exploitant.",
        },
        {
          title: "Enveloppe et ventilation",
          text: "Prioriser isolation, traitement d'air et destratification selon l'usage réel du bâtiment.",
        },
        {
          title: "Gouvernance du dossier",
          text: "Identifier le bon porteur : SCI, foncière, exploitant, locataire, copropriété ou direction immobilière.",
        },
        {
          title: "Financement CEE",
          text: "Sécuriser la chronologie administrative avant engagement afin d'éviter les dossiers non valorisables.",
        },
        {
          title: "Pilotage du programme",
          text: "Transformer une liste de travaux en plan cohérent : impact, ordre, contraintes et reste à financer.",
        },
      ]}
      solutions={[
        { title: "Isolation des combles", href: "/isolation-combles", text: "Toitures, combles perdus et volumes tertiaires existants." },
        { title: "Isolation toiture & rampants", href: "/isolation-toiture-rampants", text: "Traitement de l'enveloppe haute." },
        { title: "Bardage", href: "/bardage", text: "ITE, façade et ponts thermiques." },
        { title: "Destratificateur d'air", href: "/destratificateur-air", text: "Confort thermique en grands volumes." },
        { title: "Extracteur d'air", href: "/extracteur-air", text: "Renouvellement d'air et désurchauffe." },
        { title: "Prime CEE", href: "/prime-cee", text: "Valorisation administrative des opérations." },
      ]}
      formTitle={<>Votre parc tertiaire, <em>avec un plan lisible.</em></>}
      formLead="Indiquez le type de bâtiment, la surface et les contraintes d'exploitation. Nous revenons avec une première lecture technique et financière."
      formSource="tertiaire-v2"
      formFields={[
        { id: "tertiaire-v2-prenom", label: "Prénom *", name: "prenom", required: true },
        { id: "tertiaire-v2-nom", label: "Nom *", name: "nom", required: true },
        { id: "tertiaire-v2-societe", label: "Société / collectivité", name: "societe" },
        { id: "tertiaire-v2-tel", label: "Téléphone *", name: "telephone", type: "tel", required: true },
        { id: "tertiaire-v2-email", label: "Email *", name: "email", type: "email", required: true },
        {
          id: "tertiaire-v2-typebat",
          label: "Type de bâtiment",
          name: "type_batiment",
          options: [
            ["bureaux", "Bureaux / siège"],
            ["commerce", "Commerce / retail"],
            ["sante", "Santé / médico-social"],
            ["enseignement", "Enseignement"],
            ["hotellerie", "Hôtellerie / restauration"],
            ["autre", "Autre tertiaire"],
          ],
        },
      ]}
      messagePlaceholder="Surface, usage, décret tertiaire, contraintes d'exploitation, travaux envisagés, calendrier..."
    />
  );
}

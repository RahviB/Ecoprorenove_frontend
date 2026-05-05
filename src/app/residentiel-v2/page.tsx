import type { Metadata } from "next";
import SectorPageV2 from "@/components/SectorPageV2";

export const metadata: Metadata = {
  title: "Résidentiel V2 — comparaison locale",
  description: "Version alternative de la page secteur résidentiel pour comparaison locale.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/residentiel-v2" },
};

export default function ResidentielV2Page() {
  return (
    <SectorPageV2
      sector="residentiel"
      label="Résidentiel"
      originalHref="/residentiel"
      eyebrow="Secteur résidentiel · copropriétés, bailleurs, particuliers"
      title={<>Cumul aides, travaux et syndic <em>dans un parcours unique.</em></>}
      lead="Cette V2 met d'abord en avant la situation du demandeur : copropriété, bailleur ou maison individuelle. Le visiteur comprend plus vite quelles aides et quels travaux sont pertinents."
      badges={["CEE + MaPrimeRénov'", "Copropriétés", "Bailleurs", "Maisons individuelles"]}
      metrics={[
        { value: "2", label: "aides souvent cumulables selon le projet" },
        { value: "AG", label: "coordination possible avec syndic et conseil syndical" },
        { value: "RGE", label: "pose par équipes ou partenaires qualifiés" },
      ]}
      visuals={[
        {
          src: "/images/isolation-combles.webp",
          alt: "Isolation des combles dans un logement résidentiel",
          label: "Combles",
        },
        {
          src: "/images/bardage/maison-afromasia.webp",
          alt: "Maison avec bardage extérieur",
          label: "Façade",
        },
        {
          src: "/images/bardage/maison-modern-grey.webp",
          alt: "Maison rénovée avec bardage moderne",
          label: "ITE",
        },
      ]}
      features={[
        {
          title: "Cumul des aides",
          text: "Monter CEE et MaPrimeRénov' en parallèle lorsque le projet le permet, afin de clarifier le reste à charge réel.",
        },
        {
          title: "Copropriétés et syndics",
          text: "Préparer les échanges avec syndic, conseil syndical et assemblée générale avant le lancement opérationnel.",
        },
        {
          title: "Bailleurs",
          text: "Cadrer les travaux face aux objectifs patrimoniaux, aux passoires thermiques et aux échéances de location.",
        },
        {
          title: "Maison individuelle",
          text: "Prioriser combles, rampants, planchers bas ou bardage selon le logement et les pertes probables.",
        },
        {
          title: "Ventilation après isolation",
          text: "Éviter de traiter l'enveloppe sans vérifier le renouvellement d'air et le confort intérieur.",
        },
        {
          title: "Dossier jusqu'au versement",
          text: "Regrouper les pièces, suivre les étapes administratives et éviter les ruptures entre travaux et financement.",
        },
      ]}
      solutions={[
        { title: "Isolation des combles", href: "/isolation-combles", text: "Premier levier en maison et copropriété." },
        { title: "Isolation des planchers bas", href: "/isolation-planchers-bas", text: "Sous-face, vide sanitaire, parking, local non chauffé." },
        { title: "Bardage", href: "/bardage", text: "Isolation par l'extérieur et façade neuve." },
        { title: "Extracteur d'air", href: "/extracteur-air", text: "Qualité d'air après travaux d'isolation." },
        { title: "Prime CEE", href: "/prime-cee", text: "Certificats d'économies d'énergie." },
        { title: "MaPrimeRénov'", href: "/ma-prime-renov", text: "Aide résidentielle selon profil et opération." },
      ]}
      formTitle={<>Votre logement ou copropriété, <em>avec les aides vérifiées.</em></>}
      formLead="Décrivez votre logement, votre statut et les travaux envisagés. La première réponse doit surtout clarifier l'éligibilité et les priorités."
      formSource="residentiel-v2"
      formFields={[
        { id: "residentiel-v2-prenom", label: "Prénom *", name: "prenom", required: true },
        { id: "residentiel-v2-nom", label: "Nom *", name: "nom", required: true },
        { id: "residentiel-v2-email", label: "Email *", name: "email", type: "email", required: true },
        { id: "residentiel-v2-tel", label: "Téléphone *", name: "telephone", type: "tel", required: true },
        {
          id: "residentiel-v2-statut",
          label: "Vous êtes",
          name: "type_batiment",
          options: [
            ["proprietaire-occupant", "Propriétaire occupant"],
            ["proprietaire-bailleur", "Propriétaire bailleur"],
            ["copropriete", "Copropriété / syndic"],
            ["bailleur-social", "Bailleur social"],
            ["autre", "Autre"],
          ],
        },
      ]}
      messagePlaceholder="Maison, appartement, copropriété, surface, travaux envisagés, aides déjà demandées, calendrier..."
    />
  );
}

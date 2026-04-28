import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'ECOPRORENOVE — données collectées, finalités, durée de conservation, droits des personnes (RGPD).",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <article className="page-legal">
      <div className="container">
        <header className="page-legal__header">
          <p className="section-label">Protection des données — RGPD</p>
          <h1>Politique de confidentialité</h1>
          <p className="page-legal__lead">
            EB CONSEILS – Ecoprorenove (« ECOPRORENOVE ») accorde une importance
            particulière à la protection des données personnelles que vous nous confiez. La
            présente politique décrit les traitements mis en œuvre sur le site
            <strong> www.ecoprorenove.fr</strong> et les droits dont vous disposez en
            application du Règlement (UE) 2016/679 (RGPD) et de la loi n°&nbsp;78-17 du 6
            janvier 1978 modifiée (Informatique et Libertés).
          </p>
        </header>

        <section className="page-legal__section">
          <h2>1. Responsable de traitement</h2>
          <p>
            Le responsable du traitement est <strong>EB CONSEILS – Ecoprorenove</strong>,
            SAS au capital de 1&nbsp;000&nbsp;€, SIREN 894&nbsp;975&nbsp;150, dont le siège
            social est situé 3 rue Jacqueline et Roland de Pury, 69002 Lyon.
          </p>
          <p>
            Pour toute question relative au traitement de vos données, vous pouvez nous
            contacter à l&apos;adresse&nbsp;:{" "}
            <a href="mailto:contact@ecoprorenove.fr">contact@ecoprorenove.fr</a>.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>2. Données collectées</h2>
          <p>
            Lorsque vous remplissez un formulaire de contact ou de demande d&apos;étude sur
            notre site, nous collectons&nbsp;:
          </p>
          <ul>
            <li>vos <strong>nom et prénom</strong>&nbsp;;</li>
            <li>votre <strong>adresse email</strong>&nbsp;;</li>
            <li>votre <strong>numéro de téléphone</strong>&nbsp;;</li>
            <li>la <strong>nature de votre projet</strong> et toute information que vous
              nous communiquez librement (type de bâtiment, surface, contraintes,
              objectifs)&nbsp;;</li>
            <li>le cas échéant, votre <strong>raison sociale, SIRET</strong> et adresse
              professionnelle.</li>
          </ul>
          <p>
            Aucune donnée sensible (origines, opinions, santé, etc.) n&apos;est collectée.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>3. Finalités du traitement</h2>
          <p>Vos données sont collectées et traitées pour&nbsp;:</p>
          <ul>
            <li>répondre à votre demande de contact ou d&apos;étude&nbsp;;</li>
            <li>établir un devis, monter un dossier CEE ou MaPrimeRénov&apos;,
              coordonner la pose et assurer le suivi du chantier&nbsp;;</li>
            <li>respecter nos obligations légales et comptables&nbsp;;</li>
            <li>améliorer la qualité de notre service.</li>
          </ul>
        </section>

        <section className="page-legal__section">
          <h2>4. Bases légales</h2>
          <ul>
            <li>
              <strong>Consentement</strong> (art.&nbsp;6.1.a RGPD) — pour le traitement de
              vos demandes via les formulaires.
            </li>
            <li>
              <strong>Exécution d&apos;un contrat</strong> ou de mesures précontractuelles
              (art.&nbsp;6.1.b) — pour les devis et le suivi de mission.
            </li>
            <li>
              <strong>Obligations légales</strong> (art.&nbsp;6.1.c) — comptabilité,
              dispositif CEE.
            </li>
          </ul>
        </section>

        <section className="page-legal__section">
          <h2>5. Destinataires des données</h2>
          <p>
            Vos données sont strictement destinées à ECOPRORENOVE et, lorsqu&apos;elles sont
            nécessaires à l&apos;exécution de la prestation, à&nbsp;:
          </p>
          <ul>
            <li>les <strong>poseurs RGE partenaires</strong> intervenant sur le
              chantier&nbsp;;</li>
            <li>les <strong>obligés CEE</strong> et organismes officiels (PNCEE, ANAH,
              etc.) dans le cadre du montage de dossier&nbsp;;</li>
            <li>nos <strong>prestataires techniques</strong> (hébergeur, fournisseur
              d&apos;email transactionnel) tenus à des engagements contractuels de
              confidentialité conformes au RGPD.</li>
          </ul>
          <p>
            Aucune donnée n&apos;est cédée, vendue ou louée à des tiers à des fins
            commerciales.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>6. Transferts hors Union européenne</h2>
          <p>
            Les données sont stockées au sein de l&apos;Union européenne (hébergeur OVH —
            Roubaix, France). L&apos;envoi des emails transactionnels transite par notre
            prestataire Resend (sous-traitant Amazon SES — région UE-Ouest 1, Irlande).
            Aucun transfert hors UE n&apos;est effectué.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>7. Durée de conservation</h2>
          <ul>
            <li>
              <strong>Demandes sans suite</strong>&nbsp;: 3&nbsp;ans à compter du dernier
              contact.
            </li>
            <li>
              <strong>Clients</strong>&nbsp;: pendant toute la durée de la relation
              contractuelle, puis 10&nbsp;ans pour les pièces comptables et techniques liées
              au dossier CEE.
            </li>
          </ul>
        </section>

        <section className="page-legal__section">
          <h2>8. Vos droits</h2>
          <p>Vous disposez à tout moment des droits suivants&nbsp;:</p>
          <ul>
            <li>droit d&apos;<strong>accès</strong> à vos données&nbsp;;</li>
            <li>droit de <strong>rectification</strong> des données inexactes ou
              incomplètes&nbsp;;</li>
            <li>droit à l&apos;<strong>effacement</strong> (« droit à l&apos;oubli »)&nbsp;;</li>
            <li>droit à la <strong>limitation</strong> du traitement&nbsp;;</li>
            <li>droit à la <strong>portabilité</strong> des données&nbsp;;</li>
            <li>droit d&apos;<strong>opposition</strong> au traitement&nbsp;;</li>
            <li>droit de définir des <strong>directives post-mortem</strong>.</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact@ecoprorenove.fr">contact@ecoprorenove.fr</a> ou par
            courrier au 3 rue Jacqueline et Roland de Pury, 69002 Lyon. Nous répondons dans
            un délai maximum d&apos;un mois.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
            respectés, vous pouvez introduire une réclamation auprès de la{" "}
            <strong>CNIL</strong> —{" "}
            <a
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr/fr/plaintes
            </a>
            .
          </p>
        </section>

        <section className="page-legal__section">
          <h2>9. Cookies</h2>
          <p>
            Le site www.ecoprorenove.fr <strong>ne dépose aucun cookie tiers de mesure
            d&apos;audience ou de publicité</strong>. Seuls des cookies strictement
            nécessaires au fonctionnement du site (mémorisation de session technique)
            peuvent être utilisés ; ils sont exemptés de consentement conformément à la
            recommandation de la CNIL.
          </p>
          <p>
            Si à l&apos;avenir un outil de mesure d&apos;audience ou un service tiers
            nécessitant un cookie était ajouté, un bandeau de consentement conforme serait
            déployé.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>10. Sécurité</h2>
          <p>
            Nous mettons en œuvre les mesures techniques et organisationnelles appropriées
            pour préserver la sécurité de vos données&nbsp;: chiffrement HTTPS sur
            l&apos;intégralité du site, hébergement sur infrastructure ISO&nbsp;27001
            (OVH), accès restreints aux données.
          </p>
        </section>

        <p className="page-legal__updated">
          Dernière mise à jour&nbsp;: 28&nbsp;avril&nbsp;2026. Voir aussi nos{" "}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </div>
    </article>
  );
}

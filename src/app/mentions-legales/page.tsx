import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales d'ECOPRORENOVE — éditeur, responsable de la publication, hébergeur, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <article className="page-legal">
      <div className="container">
        <header className="page-legal__header">
          <p className="section-label">Informations légales</p>
          <h1>Mentions légales</h1>
          <p className="page-legal__lead">
            Conformément aux dispositions des articles 6-III et 19 de la loi n°&nbsp;2004-575 du
            21&nbsp;juin 2004 pour la Confiance dans l&apos;économie numérique, dite L.C.E.N.,
            les présentes mentions légales sont portées à la connaissance des utilisateurs et
            visiteurs du site <strong>www.ecoprorenove.fr</strong>.
          </p>
        </header>

        <section className="page-legal__section">
          <h2>1. Éditeur du site</h2>
          <dl className="page-legal__dl">
            <dt>Dénomination sociale</dt>
            <dd>EB CONSEILS – Ecoprorenove</dd>

            <dt>Forme juridique</dt>
            <dd>Société par Actions Simplifiée (SAS)</dd>

            <dt>Capital social</dt>
            <dd>1&nbsp;000&nbsp;€</dd>

            <dt>SIREN</dt>
            <dd>894&nbsp;975&nbsp;150</dd>

            <dt>N°&nbsp;TVA intracommunautaire</dt>
            <dd>FR91894975150</dd>

            <dt>Siège social (établissement Lyon)</dt>
            <dd>
              3 rue Jacqueline et Roland de Pury<br />
              69002 Lyon, France<br />
              SIRET&nbsp;: 89497515000026
            </dd>

            <dt>Établissement secondaire (La Réunion)</dt>
            <dd>
              104 C avenue Leconte de Lisle<br />
              97490 Saint-Denis, La Réunion<br />
              SIRET&nbsp;: 89497515000042
            </dd>

            <dt>Téléphone</dt>
            <dd>
              <a href="tel:+33619798391">+33&nbsp;6&nbsp;19&nbsp;79&nbsp;83&nbsp;91</a>{" "}
              (Métropole) ·{" "}
              <a href="tel:+262693546253">+262&nbsp;6&nbsp;93&nbsp;54&nbsp;62&nbsp;53</a>{" "}
              (La Réunion)
            </dd>

            <dt>Email</dt>
            <dd>
              <a href="mailto:contact@ecoprorenove.fr">contact@ecoprorenove.fr</a>
            </dd>
          </dl>
        </section>

        <section className="page-legal__section">
          <h2>2. Directeur de la publication</h2>
          <p>
            Monsieur <strong>Emmanuel Boyer</strong>, en sa qualité de représentant légal
            d&apos;EB CONSEILS – Ecoprorenove.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>3. Hébergement du site</h2>
          <dl className="page-legal__dl">
            <dt>Hébergeur</dt>
            <dd>
              OVH SAS<br />
              2 rue Kellermann<br />
              59100 Roubaix, France<br />
              <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">
                www.ovhcloud.com
              </a>
            </dd>
          </dl>
        </section>

        <section className="page-legal__section">
          <h2>4. Activité &amp; certifications</h2>
          <p>
            ECOPRORENOVE accompagne les maîtres d&apos;ouvrage dans la conduite d&apos;opérations
            de rénovation énergétique pour les bâtiments tertiaires, résidentiels et
            agricoles&nbsp;: cadrage technique, montage de dossier CEE et MaPrimeRénov&apos;,
            coordination de chantier, pose RGE.
          </p>
          <p>
            <strong>Certification RGE&nbsp;: Qualibat.</strong>
          </p>
          <p>
            <strong>Assurance Responsabilité Civile Professionnelle &amp; Décennale&nbsp;:</strong>{" "}
            APRIL — police n°&nbsp;25&nbsp;096&nbsp;270&nbsp;377.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>5. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments composant le site www.ecoprorenove.fr (textes,
            illustrations, photographies, logos, marques, mises en page, graphismes,
            structure, base de données) sont protégés par la législation française et
            internationale relative au droit d&apos;auteur et à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, transmission ou
            dénaturation, totale ou partielle, du site ou de l&apos;un de ses éléments, par
            quelque procédé que ce soit, est interdite sans l&apos;autorisation écrite
            préalable d&apos;EB CONSEILS – Ecoprorenove.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>6. Limitation de responsabilité</h2>
          <p>
            Les informations diffusées sur le site sont présentées à titre indicatif et sans
            valeur contractuelle. ECOPRORENOVE s&apos;efforce d&apos;assurer l&apos;exactitude
            et la mise à jour des informations publiées, mais ne saurait garantir
            l&apos;absence d&apos;erreurs ou d&apos;omissions et décline toute responsabilité
            quant aux conséquences éventuelles d&apos;une utilisation des informations diffusées.
          </p>
          <p>
            Les éligibilités CEE, MaPrimeRénov&apos; et autres dispositifs de financement
            mentionnés sur le site dépendent de la situation propre à chaque projet et font
            systématiquement l&apos;objet d&apos;une analyse personnalisée préalable.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>7. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d&apos;autres sites, dont ECOPRORENOVE
            n&apos;assure pas le contenu et ne peut être tenue responsable.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>8. Données personnelles</h2>
          <p>
            Le traitement des données personnelles collectées sur ce site est détaillé dans
            notre{" "}
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>.
          </p>
        </section>

        <section className="page-legal__section">
          <h2>9. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de
            litige, et après tentative de recherche d&apos;une solution amiable, les
            tribunaux français seront seuls compétents.
          </p>
        </section>

        <p className="page-legal__updated">
          Dernière mise à jour&nbsp;: 28&nbsp;avril&nbsp;2026.
        </p>
      </div>
    </article>
  );
}

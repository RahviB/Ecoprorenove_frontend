import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IntakeForm from "@/components/setup/IntakeForm";

const EXPECTED_TOKEN = "e9p3mr7q2x4n8t5v";

export const metadata: Metadata = {
  title: "Préparer la mise en ligne · ECOPRORENOVE",
  description:
    "Formulaire interne — informations légales et coordonnées avant la mise en ligne du site.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: undefined },
};

export default async function SetupPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  if (token !== EXPECTED_TOKEN) notFound();

  return (
    <section className="setup-page">
      <div className="container">
        <header className="setup-page__intro">
          <p className="section-label">Préparation de la mise en ligne</p>
          <h1>Bonjour Emmanuel —</h1>
          <p className="setup-page__lead">
            On a déjà repris la majorité des informations depuis l&apos;ancien site
            ecoprorenove.fr. Quelques points méritent d&apos;être confirmés ou complétés
            avant la mise en ligne du nouveau site (mentions légales, politique de
            confidentialité, footer).
          </p>
          <p className="setup-page__lead">
            Tout est pré-rempli là où on connaît la réponse. Modifiez ce qui n&apos;est pas
            juste et complétez le reste — l&apos;équipe Influxe s&apos;occupe du reste.
            Comptez 5 à 10&nbsp;minutes.
          </p>
          <ul className="setup-page__notes">
            <li>
              Les <strong>numéros affichés actuellement</strong> dans le footer
              (« +33 X XX XX XX XX ») et sur les pages contact sont les placeholders qu&apos;on
              remplace avec votre saisie.
            </li>
            <li>
              On a noté <strong>SIRET 894975150</strong> sur l&apos;ancien site —
              c&apos;est en fait votre <strong>SIREN</strong> (9 chiffres). Le vrai SIRET
              fait 14 chiffres et il y en a un par établissement.
            </li>
            <li>
              Vous avez un établissement à <strong>Lyon</strong> et un à <strong>La
              Réunion</strong>&nbsp;: chaque établissement a son propre SIRET. Renseignez les
              deux si possible.
            </li>
          </ul>
        </header>

        <IntakeForm />
      </div>
    </section>
  );
}

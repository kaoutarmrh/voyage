import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description: "L'équipe et les engagements d'Horizons Voyages.",
};

const valeurs = [
  { titre: "Tourisme responsable", texte: "Petits groupes, hébergements locaux et guides rémunérés équitablement." },
  { titre: "Transparence", texte: "Des prix clairs, détaillés poste par poste, sans frais cachés." },
  { titre: "Expertise terrain", texte: "Nos conseillers ont voyagé dans chacune des destinations qu'ils proposent." },
];

export default function APropos() {
  return (
    <>
      <section className="container page-head">
        <span className="eyebrow">Qui sommes-nous</span>
        <h1>Des voyageurs au service des voyageurs</h1>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container two-col">
          <div>
            <p className="lead">
              Horizons Voyages est née en 2012 d'une conviction simple : un beau voyage commence par une vraie
              conversation. Notre équipe de douze conseillers passionnés conçoit chaque itinéraire avec vous, en
              s'appuyant sur un réseau de partenaires locaux sélectionnés sur place.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Agence immatriculée au registre des opérateurs de voyages, nous bénéficions d'une garantie financière et
              d'une assurance responsabilité civile professionnelle.
            </p>
          </div>
          <div className="art-block" aria-hidden />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Nos engagements</h2>
          <div className="features">
            {valeurs.map((v) => (
              <div key={v.titre} className="feature">
                <h3>{v.titre}</h3>
                <p>{v.texte}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn btn-primary">Rencontrer un conseiller</Link>
          </div>
        </div>
      </section>
    </>
  );
}

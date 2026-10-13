import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Leaf, Shield } from "@/components/Icons";

export const metadata: Metadata = {
  title: "L'agence",
  description: "L'équipe et les engagements d'Horizons Voyages.",
};

const valeurs = [
  { Icon: Compass, titre: "Expertise terrain", texte: "Nos conseillers ont voyagé dans chacune des destinations qu'ils proposent, et y retournent chaque année." },
  { Icon: Leaf, titre: "Tourisme responsable", texte: "Petits groupes, hébergements locaux et guides rémunérés équitablement. Compensation carbone proposée." },
  { Icon: Shield, titre: "Sérénité totale", texte: "Garantie financière, assistance 24h/24 et un conseiller joignable jusqu'à votre retour." },
];

const equipe = [
  { nom: "Nadia Benali", role: "Fondatrice · Maroc & Égypte" },
  { nom: "Thomas Lefèvre", role: "Asie & océan Indien" },
  { nom: "Inès Moreau", role: "Moyen-Orient" },
  { nom: "Lucas Garnier", role: "Amérique latine" },
];

export default function APropos() {
  return (
    <>
      <section className="page-hero">
        <img src="/images/montagne.jpg" alt="Randonneur face à une vallée de montagne" />
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane"><Link href="/">Accueil</Link><span>/</span><span>L&apos;agence</span></nav>
          <span className="eyebrow">Qui sommes-nous</span>
          <h1>Des voyageurs au service <em style={{ color: "var(--sun)" }}>des voyageurs</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-copy">
            <span className="eyebrow">Notre histoire</span>
            <h2>Un beau voyage commence par une <em>vraie conversation</em></h2>
            <p className="lead">
              Horizons Voyages est née en 2012 à Paris. Aujourd&apos;hui, douze conseillers conçoivent chaque année plus de
              1 200 voyages sur mesure, en s&apos;appuyant sur un réseau de partenaires locaux sélectionnés sur place.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Agence immatriculée au registre des opérateurs de voyages, nous bénéficions d&apos;une garantie financière et
              d&apos;une assurance responsabilité civile professionnelle.
            </p>
          </div>
          <div className="split-media">
            <img className="main" src="/images/inde.jpg" alt="Voyageuse face au Taj Mahal" loading="lazy" />
            <div className="badge"><strong>12 000+</strong><span>voyageurs accompagnés</span></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Nos engagements</span><h2>Ce qui nous guide</h2></div></div>
          <div className="values">
            {valeurs.map(({ Icon, titre, texte }) => (
              <div key={titre} className="value"><span className="ic"><Icon /></span><h3>{titre}</h3><p>{texte}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">L&apos;équipe</span><h2>Vos conseillers</h2></div>
            <Link href="/contact" className="btn btn-dark">Prendre rendez-vous <span className="arrow">→</span></Link>
          </div>
          <div className="team">
            {equipe.map((m) => (
              <div key={m.nom} className="member">
                <div className="ph">{m.nom.split(" ").map((p) => p[0]).join("")}</div>
                <h3>{m.nom}</h3><span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";

const atouts = [
  { icon: "✎", titre: "100 % sur mesure", texte: "Chaque itinéraire est construit autour de vos envies, de votre rythme et de votre budget." },
  { icon: "☏", titre: "Un conseiller dédié", texte: "Un interlocuteur unique avant, pendant et après le voyage, joignable 7j/7." },
  { icon: "✓", titre: "Voyagez serein", texte: "Agence immatriculée, garantie financière et assistance rapatriement incluses." },
];

const avis = [
  { texte: "Le bivouac dans le désert reste le plus beau moment de notre vie. Tout était parfaitement organisé.", nom: "Claire & Julien, Maroc" },
  { texte: "Notre conseillère a su adapter le Japon à nos enfants. On repart l'an prochain avec eux !", nom: "Famille Martin, Japon" },
  { texte: "Road-book précis, logements superbes : l'Islande en toute autonomie mais jamais seuls.", nom: "Sophie, Islande" },
];

export default function Accueil() {
  return (
    <>
      <section className="hero">
        <div className="hero-sun" aria-hidden />
        <svg className="hero-dunes" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden>
          <path fill="rgba(124,45,18,.55)" d="M0,192 C240,120 480,250 720,200 C960,150 1200,90 1440,160 L1440,320 L0,320 Z" />
          <path fill="rgba(28,25,23,.55)" d="M0,256 C300,200 520,300 820,250 C1080,210 1260,240 1440,220 L1440,320 L0,320 Z" />
        </svg>
        <div className="container hero-content">
          <span className="eyebrow" style={{ color: "#fde68a" }}>Agence de voyages sur mesure</span>
          <h1>Le monde, à votre rythme.</h1>
          <p>Circuits culturels, plages lointaines ou grandes aventures : nous imaginons le voyage qui vous ressemble.</p>
          <div className="hero-actions">
            <Link href="/destinations" className="btn btn-primary">Voir nos voyages</Link>
            <Link href="/contact" className="btn btn-ghost">Parler à un conseiller</Link>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats">
          <div className="stat"><strong>14 ans</strong><span>d'expérience</span></div>
          <div className="stat"><strong>12 000+</strong><span>voyageurs accompagnés</span></div>
          <div className="stat"><strong>45</strong><span>pays proposés</span></div>
          <div className="stat"><strong>4,9/5</strong><span>note moyenne clients</span></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Nos coups de cœur</span>
          <h2>Voyages à la une</h2>
          <p className="lead">Une sélection d'itinéraires testés par notre équipe, à personnaliser librement.</p>
          <div className="grid" style={{ marginTop: 40 }}>
            {destinations.slice(0, 3).map((d) => (
              <DestinationCard key={d.slug} d={d} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/destinations" className="btn btn-ghost">Toutes les destinations →</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Pourquoi Horizons</span>
          <h2>Un voyage pensé pour vous</h2>
          <div className="features">
            {atouts.map((a) => (
              <div key={a.titre} className="feature">
                <div className="icon">{a.icon}</div>
                <h3>{a.titre}</h3>
                <p>{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <span className="eyebrow" style={{ color: "#fdba74" }}>Ils sont partis avec nous</span>
          <h2>Ce qu'en disent nos voyageurs</h2>
          <div className="quotes">
            {avis.map((a) => (
              <div key={a.nom} className="quote">
                <p>« {a.texte} »</p>
                <span>— {a.nom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Prêt à partir ?</h2>
            <p className="lead">Décrivez-nous votre projet : vous recevez une proposition gratuite sous 48 h.</p>
            <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
          </div>
        </div>
      </section>
    </>
  );
}

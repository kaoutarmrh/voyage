import Link from "next/link";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import HeroSearch from "@/components/HeroSearch";
import { Headset, Leaf, Shield, Star } from "@/components/Icons";

const confiance = [
  { Icon: Star, titre: "4,9 / 5", texte: "sur 1 780 avis vérifiés" },
  { Icon: Headset, titre: "Conseiller dédié", texte: "joignable 7j/7 pendant le voyage" },
  { Icon: Shield, titre: "Paiement protégé", texte: "garantie financière totale" },
  { Icon: Leaf, titre: "Voyage responsable", texte: "guides et hôtels locaux" },
];

const etapes = [
  { titre: "Racontez-nous votre envie", texte: "Un appel de 20 minutes avec un conseiller qui connaît la destination : vos dates, votre rythme, votre budget." },
  { titre: "Recevez votre itinéraire", texte: "Sous 48 h, une proposition détaillée jour par jour, avec les hôtels et le prix exact. Ajustez-la autant que nécessaire." },
  { titre: "Partez l'esprit libre", texte: "Carnet de voyage, billets et contacts sur place dans l'application. Nous restons joignables jusqu'à votre retour." },
];

const avis = [
  { texte: "La nuit en bivouac à Merzouga reste le plus beau moment de notre vie. Chaque détail était pensé.", nom: "Claire & Julien", voyage: "Maroc, mars 2026", i: "CJ" },
  { texte: "Notre conseillère a adapté le rythme de Bali à nos enfants. On repart l'an prochain avec eux.", nom: "Famille Martin", voyage: "Bali, juillet 2026", i: "FM" },
  { texte: "Petra by Night, puis le camp au Wadi Rum. Un circuit parfaitement dosé, des guides formidables.", nom: "Sophie R.", voyage: "Jordanie, avril 2026", i: "SR" },
];

export default function Accueil() {
  const aLaUne = [...destinations].sort((a, b) => b.avis - a.avis).slice(0, 5);

  return (
    <>
      <section className="hero">
        <img className="hero-img" src="/images/hero.jpg" alt="Villas sur pilotis au-dessus d'un lagon turquoise" />
        <div className="container hero-inner">
          <span className="eyebrow" style={{ color: "var(--sun)" }}>Agence de voyages sur mesure depuis 2012</span>
          <h1 style={{ marginTop: 16 }}>Partez loin, <em>voyagez juste.</em></h1>
          <p className="hero-sub">
            Des itinéraires conçus avec vous par des conseillers qui connaissent chaque destination, du premier appel au retour.
          </p>
          <HeroSearch />
        </div>
      </section>

      <div className="trust">
        <div className="container trust-inner">
          {confiance.map(({ Icon, titre, texte }) => (
            <div key={titre} className="trust-item">
              <Icon size={26} />
              <div><strong>{titre}</strong><span>{texte}</span></div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Les plus demandés</span>
              <h2>Nos voyages <em>coups de cœur</em></h2>
            </div>
            <Link href="/destinations" className="btn btn-line">Toutes les destinations <span className="arrow">→</span></Link>
          </div>
          <div className="dest-grid featured">
            {aLaUne.map((d) => <DestinationCard key={d.slug} d={d} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Comment ça marche</span>
              <h2>Trois étapes jusqu&apos;au départ</h2>
            </div>
          </div>
          <div className="steps">
            {etapes.map((e, i) => (
              <div key={e.titre} className="step">
                <span className="num">{i + 1}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div className="split-media">
            <img className="main" src="/images/maroc.jpg" alt="Terrasse d'une kasbah dans le sud marocain" loading="lazy" />
            <img className="float" src="/images/egypte.jpg" alt="Pyramides de Gizeh" loading="lazy" />
            <div className="badge"><strong>14 ans</strong><span>d&apos;expérience terrain</span></div>
          </div>
          <div className="split-copy">
            <span className="eyebrow">Le sur-mesure, vraiment</span>
            <h2>Un voyage qui vous <em>ressemble</em>, pas un catalogue</h2>
            <p className="lead">
              Chaque itinéraire publié est un point de départ. Durée, hôtels, activités, rythme : votre conseiller ajuste tout
              jusqu&apos;à ce que le voyage soit le vôtre.
            </p>
            <ul className="checks">
              <li><div><strong>Hébergements choisis sur place</strong><span>Riads, lodges et boutique-hôtels testés par notre équipe.</span></div></li>
              <li><div><strong>Guides locaux francophones</strong><span>Rémunérés équitablement, passionnés par leur région.</span></div></li>
              <li><div><strong>Prix clair, sans surprise</strong><span>Un devis détaillé poste par poste, sans frais cachés.</span></div></li>
            </ul>
            <div><Link href="/contact" className="btn btn-dark">Parler à un conseiller <span className="arrow">→</span></Link></div>
          </div>
        </div>
      </section>

      <section className="section band">
        <img src="/images/route.jpg" alt="" loading="lazy" />
        <div className="container">
          <span className="eyebrow">Ils sont partis avec nous</span>
          <h2 style={{ marginTop: 14, maxWidth: "16ch" }}>Ce que racontent <em>nos voyageurs</em></h2>
          <div className="quotes">
            {avis.map((a) => (
              <figure key={a.nom} className="quote" style={{ margin: 0 }}>
                <p>« {a.texte} »</p>
                <footer>
                  <span className="avatar">{a.i}</span>
                  <span><strong>{a.nom}</strong>{a.voyage}</span>
                </footer>
              </figure>
            ))}
          </div>
          <div className="score">
            <strong>4,9</strong>
            <span><span className="star">★★★★★</span><br />Note moyenne sur 1 780 avis clients vérifiés</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <img src="/images/montagne.jpg" alt="" loading="lazy" />
            <div>
              <span className="eyebrow" style={{ color: "var(--sun)" }}>Devis gratuit sous 48 h</span>
              <h2 style={{ marginTop: 14 }}>Votre prochain voyage <em>commence ici</em></h2>
              <p>Décrivez-nous votre projet en deux minutes. Un conseiller vous rappelle avec une première proposition.</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-sun">Demander mon devis <span className="arrow">→</span></Link>
              <small>Sans engagement · Réponse sous 48 h ouvrées</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination, formatPrix, imageDe } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import { Plane } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = getDestination((await params).slug);
  return d ? { title: `${d.nom} — ${d.pays}`, description: d.accroche } : {};
}

export default async function DestinationPage({ params }: Props) {
  const d = getDestination((await params).slug);
  if (!d) notFound();
  const autres = destinations.filter((x) => x.slug !== d.slug && x.categorie === d.categorie)
    .concat(destinations.filter((x) => x.slug !== d.slug && x.categorie !== d.categorie))
    .slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <img src={imageDe(d)} alt={`${d.nom}, ${d.pays}`} />
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link><span>/</span><Link href="/destinations">Destinations</Link><span>/</span><span>{d.pays}</span>
          </nav>
          <span className="eyebrow">{d.pays} · {d.region}</span>
          <h1>{d.nom}</h1>
          <p className="lead">{d.accroche}</p>
          <div className="facts">
            <span>{d.duree} jours</span>
            <span>★ {d.note.toFixed(1)} · {d.avis} avis</span>
            <span>Idéal : {d.saison}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail">
          <div className="detail-main">
            <section>
              <span className="eyebrow">Le voyage</span>
              <p className="lead" style={{ color: "var(--ink)", fontSize: "1.2rem" }}>{d.description}</p>
            </section>
            <section>
              <h2>Les temps forts</h2>
              <ul className="highlights">{d.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </section>
            <section>
              <h2>Programme jour par jour</h2>
              <ol className="timeline">
                {d.programme.map((e) => (
                  <li key={e.jour}>
                    <span className="jour">{e.jour}</span>
                    <div><h3>{e.titre}</h3><p>{e.texte}</p></div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="boarding" aria-label="Résumé et réservation">
            <div className="boarding-head">
              <div className="route">
                <span><small>Départ</small>CDG</span>
                <Plane size={22} />
                <span><small>Arrivée</small>{d.iata}</span>
              </div>
            </div>
            <div className="boarding-body">
              <div className="boarding-grid">
                <div><small>Destination</small><span>{d.ville}</span></div>
                <div><small>Durée</small><span>{d.duree} jours</span></div>
                <div><small>Type</small><span>{d.categorie}</span></div>
                <div><small>Saison</small><span>{d.saison.split(",")[0]}</span></div>
              </div>
              <div className="tear" />
              <div className="boarding-price">
                <div><small>À partir de</small><strong>{formatPrix(d.prix)}</strong></div>
                <span className="count">par personne<br />hors vols</span>
              </div>
              <ul>{d.inclus.map((i) => <li key={i}>{i}</li>)}</ul>
              <Link href={`/contact?voyage=${d.slug}`} className="btn btn-sun">Demander un devis</Link>
              <a href="tel:+33144000000" className="btn btn-line">01 44 00 00 00</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head"><div><span className="eyebrow">Envie d&apos;ailleurs</span><h2>Vous aimerez aussi</h2></div></div>
          <div className="dest-grid">{autres.map((x) => <DestinationCard key={x.slug} d={x} />)}</div>
        </div>
      </section>
    </>
  );
}

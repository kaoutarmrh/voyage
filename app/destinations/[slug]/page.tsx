import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination, formatPrix } from "@/data/destinations";
import { visuel } from "@/components/DestinationCard";
import DestinationCard from "@/components/DestinationCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return { title: `${d.nom} — ${d.pays}`, description: d.accroche };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const autres = destinations.filter((x) => x.slug !== d.slug).slice(0, 3);

  return (
    <>
      <section className="detail-hero" style={{ background: visuel(d) }}>
        <div className="container">
          <Link href="/destinations" style={{ opacity: 0.85, fontSize: ".9rem" }}>← Toutes les destinations</Link>
          <span className="eyebrow" style={{ color: "#fff", marginTop: 20 }}>{d.pays} · {d.categorie}</span>
          <h1>{d.nom}</h1>
          <div className="meta">
            <span>🕑 {d.duree} jours</span>
            <span>☀ Meilleure période : {d.saison}</span>
            <span>€ dès {formatPrix(d.prix)} / pers.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail">
          <div>
            <h2>Le voyage</h2>
            <p className="lead">{d.description}</p>

            <h3 style={{ marginTop: 40 }}>Les temps forts</h3>
            <ul className="highlights">
              {d.points.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <h2>Programme</h2>
            <ol className="timeline">
              {d.programme.map((e) => (
                <li key={e.jour}>
                  <span className="jour">{e.jour}</span>
                  <h3>{e.titre}</h3>
                  <p style={{ color: "var(--muted)" }}>{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="aside">
            <span style={{ color: "var(--muted)", fontSize: ".9rem" }}>À partir de</span>
            <div className="prix">{formatPrix(d.prix)}</div>
            <span style={{ color: "var(--muted)", fontSize: ".9rem" }}>par personne, hors vols internationaux</span>
            <h4 style={{ margin: "24px 0 8px" }}>Inclus</h4>
            <ul>
              {d.inclus.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <Link href={`/contact?voyage=${d.slug}`} className="btn btn-primary">Demander un devis</Link>
            <a href="tel:+33100000000" className="btn btn-ghost">Appeler un conseiller</a>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Vous aimerez aussi</h2>
          <div className="grid" style={{ marginTop: 32 }}>
            {autres.map((x) => <DestinationCard key={x.slug} d={x} />)}
          </div>
        </div>
      </section>
    </>
  );
}

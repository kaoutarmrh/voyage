import Link from "next/link";
import { Destination, formatPrix } from "@/data/destinations";

export function visuel(d: Destination) {
  const [a, b, c] = d.couleurs;
  return `radial-gradient(circle at 78% 22%, ${c}cc, transparent 40%), linear-gradient(160deg, ${a}, ${b})`;
}

export default function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="card">
      <div className="card-visual" style={{ background: visuel(d) }}>
        <span className="tag">{d.categorie}</span>
        <span className="pays">{d.pays}</span>
      </div>
      <div className="card-body">
        <h3>{d.nom}</h3>
        <p>{d.accroche}</p>
        <div className="card-meta">
          <span>{d.duree} jours</span>
          <span>
            dès <strong>{formatPrix(d.prix)}</strong>
          </span>
        </div>
      </div>
    </Link>
  );
}

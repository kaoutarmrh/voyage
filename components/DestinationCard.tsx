import Link from "next/link";
import { Destination, formatPrix, imageDe } from "@/data/destinations";

export default function DestinationCard({ d }: { d: Destination }) {
  return (
    <Link href={`/destinations/${d.slug}`} className="dcard">
      <img src={imageDe(d)} alt={`${d.nom}, ${d.pays}`} loading="lazy" />
      <div className="dcard-top">
        <span className="pill">{d.categorie}</span>
        <span className="pill code">{d.iata}</span>
      </div>
      <div className="dcard-body">
        <span className="country">{d.pays}</span>
        <h3>{d.nom}</h3>
        <div className="meta">
          <span>{d.duree} jours · <span className="star">★</span> {d.note.toFixed(1)}</span>
          <span>dès <strong>{formatPrix(d.prix)}</strong></span>
        </div>
      </div>
    </Link>
  );
}

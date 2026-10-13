import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container page-head" style={{ paddingBottom: 120 }}>
      <span className="eyebrow">Erreur 404</span>
      <h1>Cette page s'est perdue en chemin</h1>
      <p className="lead">La destination demandée n'existe pas ou n'est plus disponible.</p>
      <Link href="/destinations" className="btn btn-primary">Voir nos destinations</Link>
    </section>
  );
}

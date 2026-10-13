import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: 560 }}>
      <img src="/images/plage.jpg" alt="" />
      <div className="container">
        <span className="eyebrow">Erreur 404</span>
        <h1>Cette page a pris un autre vol</h1>
        <p className="lead">La destination demandée n&apos;existe pas ou n&apos;est plus proposée.</p>
        <div><Link href="/destinations" className="btn btn-sun">Voir nos destinations</Link></div>
      </div>
    </section>
  );
}

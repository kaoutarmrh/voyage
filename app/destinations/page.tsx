import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import DestinationFilter from "@/components/DestinationFilter";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Nos voyages sur mesure : Maroc, Égypte, Bali, Jordanie, Maldives, Italie, Dubaï et Pérou.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/images/plage.jpg" alt="Plage de sable blanc bordée de palmiers" />
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane"><Link href="/">Accueil</Link><span>/</span><span>Destinations</span></nav>
          <span className="eyebrow">Nos voyages</span>
          <h1>Où partir <em style={{ color: "var(--sun)" }}>cette saison&nbsp;?</em></h1>
          <p className="lead">Huit itinéraires testés par notre équipe. Durée, hôtels et activités s&apos;adaptent à vos envies.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <Suspense fallback={null}>
            <DestinationFilter />
          </Suspense>
        </div>
      </section>
    </>
  );
}

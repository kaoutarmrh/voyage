import type { Metadata } from "next";
import DestinationFilter from "@/components/DestinationFilter";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Découvrez nos voyages : Maroc, Grèce, Japon, Bali, Islande, Patagonie…",
};

export default function DestinationsPage() {
  return (
    <section className="container page-head" style={{ paddingBottom: 88 }}>
      <span className="eyebrow">Nos voyages</span>
      <h1>Destinations</h1>
      <p className="lead">
        Tous nos itinéraires sont des points de départ : durée, hébergements et activités s'adaptent à vos envies.
      </p>
      <DestinationFilter />
    </section>
  );
}

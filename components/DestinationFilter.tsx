"use client";

import { useMemo, useState } from "react";
import { destinations, Categorie } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

const categories: ("Toutes" | Categorie)[] = ["Toutes", "Culture", "Plage", "Nature", "Aventure"];
type Tri = "prix-asc" | "prix-desc" | "duree";

export default function DestinationFilter() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Toutes");
  const [tri, setTri] = useState<Tri>("prix-asc");

  const liste = useMemo(() => {
    const filtrees = cat === "Toutes" ? destinations : destinations.filter((d) => d.categorie === cat);
    return [...filtrees].sort((a, b) =>
      tri === "prix-asc" ? a.prix - b.prix : tri === "prix-desc" ? b.prix - a.prix : a.duree - b.duree
    );
  }, [cat, tri]);

  return (
    <>
      <div className="toolbar">
        <div className="filters">
          {categories.map((c) => (
            <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <select className="select" value={tri} onChange={(e) => setTri(e.target.value as Tri)} aria-label="Trier">
          <option value="prix-asc">Prix croissant</option>
          <option value="prix-desc">Prix décroissant</option>
          <option value="duree">Durée</option>
        </select>
      </div>
      <div className="grid">
        {liste.map((d) => (
          <DestinationCard key={d.slug} d={d} />
        ))}
      </div>
      {liste.length === 0 && <p className="lead">Aucun voyage dans cette catégorie pour le moment.</p>}
    </>
  );
}

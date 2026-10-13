"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { destinations, Categorie } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

const categories: ("Toutes" | Categorie)[] = ["Toutes", "Culture", "Plage", "Aventure", "Luxe"];
type Tri = "populaire" | "prix-asc" | "prix-desc" | "duree";

export default function DestinationFilter() {
  const params = useSearchParams();
  const initiale = categories.find((c) => c === params.get("categorie")) ?? "Toutes";
  const [cat, setCat] = useState<(typeof categories)[number]>(initiale);
  const [tri, setTri] = useState<Tri>("populaire");

  const liste = useMemo(() => {
    const f = cat === "Toutes" ? destinations : destinations.filter((d) => d.categorie === cat);
    const tris: Record<Tri, (a: (typeof f)[0], b: (typeof f)[0]) => number> = {
      populaire: (a, b) => b.avis - a.avis,
      "prix-asc": (a, b) => a.prix - b.prix,
      "prix-desc": (a, b) => b.prix - a.prix,
      duree: (a, b) => a.duree - b.duree,
    };
    return [...f].sort(tris[tri]);
  }, [cat, tri]);

  return (
    <>
      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filtrer par type de voyage">
          {categories.map((c) => (
            <button key={c} className={`chip ${cat === c ? "active" : ""}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span className="count">{liste.length} voyage{liste.length > 1 ? "s" : ""}</span>
          <select id="tri" className="select" value={tri} onChange={(e) => setTri(e.target.value as Tri)} aria-label="Trier les voyages">
            <option value="populaire">Les plus populaires</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
            <option value="duree">Durée</option>
          </select>
        </div>
      </div>
      <div className="dest-grid">
        {liste.map((d) => <DestinationCard key={d.slug} d={d} />)}
      </div>
    </>
  );
}

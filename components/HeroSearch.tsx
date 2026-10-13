"use client";

import { useRouter } from "next/navigation";
import { destinations } from "@/data/destinations";

export default function HeroSearch() {
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const dest = String(f.get("destination") ?? "");
    const q = new URLSearchParams();
    if (f.get("mois")) q.set("mois", String(f.get("mois")));
    if (f.get("voyageurs")) q.set("voyageurs", String(f.get("voyageurs")));
    router.push(dest ? `/destinations/${dest}` : `/destinations${q.size ? `?${q}` : ""}`);
  }

  return (
    <form className="search" onSubmit={onSubmit} aria-label="Rechercher un voyage">
      <div className="sf">
        <label htmlFor="s-dest">Destination</label>
        <select id="s-dest" name="destination" defaultValue="">
          <option value="">Toutes les destinations</option>
          {destinations.map((d) => <option key={d.slug} value={d.slug}>{d.pays} — {d.nom}</option>)}
        </select>
      </div>
      <div className="sf">
        <label htmlFor="s-mois">Départ</label>
        <select id="s-mois" name="mois" defaultValue="">
          <option value="">Dates flexibles</option>
          {["Novembre 2026", "Décembre 2026", "Janvier 2027", "Février 2027", "Mars 2027", "Avril 2027", "Mai 2027"].map((m) => <option key={m}>{m}</option>)}
        </select>
      </div>
      <div className="sf">
        <label htmlFor="s-voy">Voyageurs</label>
        <select id="s-voy" name="voyageurs" defaultValue="2">
          {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} adulte{n > 1 ? "s" : ""}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-dark">Rechercher</button>
    </form>
  );
}

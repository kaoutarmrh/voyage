"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { destinations } from "@/data/destinations";

type Etat = "idle" | "envoi" | "ok" | "erreur";

export default function ContactForm() {
  const params = useSearchParams();
  const [etat, setEtat] = useState<Etat>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    const form = e.currentTarget;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.erreur ?? "L'envoi a échoué. Réessayez ou appelez-nous au 01 44 00 00 00.");
      setEtat("ok");
      setMessage(json.message);
      form.reset();
    } catch (err) {
      setEtat("erreur");
      setMessage(err instanceof Error ? err.message : "L'envoi a échoué.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div><h2 style={{ fontSize: "2rem" }}>Votre demande de devis</h2></div>
      <div className="form-row">
        <div className="field"><label htmlFor="nom">Nom complet *</label><input id="nom" name="nom" required autoComplete="name" placeholder="Camille Dupont" /></div>
        <div className="field"><label htmlFor="email">E-mail *</label><input id="email" name="email" type="email" required autoComplete="email" placeholder="camille@exemple.fr" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="tel">Téléphone</label><input id="tel" name="tel" type="tel" autoComplete="tel" placeholder="06 00 00 00 00" /></div>
        <div className="field">
          <label htmlFor="voyage">Voyage souhaité</label>
          <select id="voyage" name="voyage" defaultValue={params.get("voyage") ?? ""}>
            <option value="">Je ne sais pas encore</option>
            {destinations.map((d) => <option key={d.slug} value={d.slug}>{d.pays} — {d.nom}</option>)}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="date">Départ envisagé</label><input id="date" name="date" type="month" /></div>
        <div className="field">
          <label htmlFor="budget">Budget par personne</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Non défini</option>
            <option>Moins de 1 000 €</option><option>1 000 – 2 000 €</option><option>2 000 – 3 500 €</option><option>Plus de 3 500 €</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Votre projet *</label>
        <textarea id="message" name="message" rows={5} required placeholder="Vos envies, votre rythme, ce que vous voulez absolument voir…" />
      </div>
      {etat === "ok" && <div className="alert alert-ok" role="status">{message}</div>}
      {etat === "erreur" && <div className="alert alert-err" role="alert">{message}</div>}
      <div><button type="submit" className="btn btn-sun" disabled={etat === "envoi"}>{etat === "envoi" ? "Envoi en cours…" : "Envoyer ma demande"}</button></div>
    </form>
  );
}

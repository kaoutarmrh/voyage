import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Clock, Mail, Phone, Pin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Devis & contact",
  description: "Demandez un devis gratuit pour votre prochain voyage. Réponse sous 48 h.",
};

const infos = [
  { Icon: Phone, label: "Téléphone", valeur: "01 44 00 00 00", href: "tel:+33144000000" },
  { Icon: Mail, label: "E-mail", valeur: "bonjour@horizons-voyages.fr", href: "mailto:bonjour@horizons-voyages.fr" },
  { Icon: Pin, label: "Agence", valeur: "18 rue de Paradis, 75010 Paris" },
  { Icon: Clock, label: "Horaires", valeur: "Lun–ven 9h30–19h · Sam 10h–17h" },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/images/route.jpg" alt="Route bordée de palmiers" />
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane"><Link href="/">Accueil</Link><span>/</span><span>Contact</span></nav>
          <span className="eyebrow">Devis gratuit</span>
          <h1>Parlons de <em style={{ color: "var(--sun)" }}>votre voyage</em></h1>
          <p className="lead">Deux minutes pour nous décrire votre projet, une proposition détaillée sous 48 h.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            {infos.map(({ Icon, label, valeur, href }) => (
              <div key={label} className="ccard">
                <span className="ic"><Icon /></span>
                <div><small>{label}</small>{href ? <a href={href}><strong>{valeur}</strong></a> : <strong>{valeur}</strong>}</div>
              </div>
            ))}
          </div>
          <Suspense fallback={null}><ContactForm /></Suspense>
        </div>
      </section>
    </>
  );
}

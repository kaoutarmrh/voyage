import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & devis",
  description: "Demandez un devis gratuit pour votre prochain voyage.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container page-head">
        <span className="eyebrow">Contact</span>
        <h1>Parlons de votre voyage</h1>
        <p className="lead">Remplissez le formulaire : un conseiller vous répond sous 48 h avec une première proposition.</p>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container contact-grid">
          <div className="contact-info">
            <dl>
              <dt>Agence</dt>
              <dd>12 rue des Voyageurs<br />75011 Paris</dd>
              <dt>Téléphone</dt>
              <dd><a href="tel:+33100000000">+33 1 00 00 00 00</a></dd>
              <dt>E-mail</dt>
              <dd><a href="mailto:bonjour@horizons-voyages.fr">bonjour@horizons-voyages.fr</a></dd>
              <dt>Horaires</dt>
              <dd>Lundi – vendredi : 9h30 – 19h<br />Samedi : 10h – 17h</dd>
            </dl>
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

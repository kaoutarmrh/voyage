import Link from "next/link";
import { destinations } from "@/data/destinations";
import { Plane } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <span className="brand-mark"><Plane size={18} /></span>
              <span>Horizons<small>Voyages sur mesure</small></span>
            </Link>
            <p style={{ maxWidth: "38ch" }}>
              Agence de voyages sur mesure depuis 2012. Douze conseillers qui ont voyagé dans chacune des destinations
              qu&apos;ils vous proposent.
            </p>
            <div className="badges">
              <span>Immatriculation Atout France</span>
              <span>Garantie financière</span>
              <span>Assurance RC Pro</span>
            </div>
          </div>
          <div>
            <h4>Destinations</h4>
            <ul>
              {destinations.slice(0, 5).map((d) => (
                <li key={d.slug}><Link href={`/destinations/${d.slug}`}>{d.pays}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>L&apos;agence</h4>
            <ul>
              <li><Link href="/a-propos">Qui sommes-nous</Link></li>
              <li><Link href="/contact">Demander un devis</Link></li>
              <li><Link href="/a-propos">Voyager responsable</Link></li>
              <li><Link href="/contact">Nous rendre visite</Link></li>
            </ul>
          </div>
          <div>
            <h4>Nous joindre</h4>
            <ul>
              <li><a href="tel:+33144000000">01 44 00 00 00</a></li>
              <li><a href="mailto:bonjour@horizons-voyages.fr">bonjour@horizons-voyages.fr</a></li>
              <li>18 rue de Paradis, 75010 Paris</li>
              <li>Lun–sam, 9h30–19h</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Horizons Voyages. Tous droits réservés.</span>
          <span>Mentions légales · CGV · Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}

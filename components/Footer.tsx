import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: "var(--ink)", marginBottom: 12 }}>
              Horizons<span>.</span>
            </div>
            <p style={{ maxWidth: "36ch" }}>
              Agence de voyages sur mesure depuis 2012. Nous concevons chaque itinéraire avec vous, de la première idée
              au retour à la maison.
            </p>
          </div>
          <div>
            <h4>Destinations</h4>
            <ul>
              {destinations.slice(0, 4).map((d) => (
                <li key={d.slug}>
                  <Link href={`/destinations/${d.slug}`}>{d.pays}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Agence</h4>
            <ul>
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="tel:+33100000000">+33 1 00 00 00 00</a></li>
              <li><a href="mailto:bonjour@horizons-voyages.fr">bonjour@horizons-voyages.fr</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Horizons Voyages · Mentions légales · Conditions générales de vente
        </div>
      </div>
    </footer>
  );
}

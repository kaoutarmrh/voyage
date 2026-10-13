"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Close, Plane } from "./Icons";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/destinations", label: "Destinations" },
  { href: "/a-propos", label: "L'agence" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled || open ? "solid" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Horizons Voyages, accueil">
          <span className="brand-mark"><Plane size={18} /></span>
          <span>Horizons<small>Voyages sur mesure</small></span>
        </Link>
        <button className="menu-btn" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <Close /> : <Menu />}
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {liens.map((l) => {
            const actif = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} className={`link ${actif ? "active" : ""}`}>
                {l.label}
              </Link>
            );
          })}
          <a href="tel:+33144000000" className="phone">01 44 00 00 00</a>
          <Link href="/contact" className="btn btn-sun">Devis gratuit</Link>
        </nav>
      </div>
    </header>
  );
}

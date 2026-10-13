"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const liens = [
  { href: "/", label: "Accueil" },
  { href: "/destinations", label: "Destinations" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Horizons<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {liens.map((l) => {
            const actif = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} className={actif ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}

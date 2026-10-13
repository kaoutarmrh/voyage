import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Horizons Voyages — Agence de voyages sur mesure",
    template: "%s | Horizons Voyages",
  },
  description:
    "Horizons Voyages conçoit des voyages sur mesure : circuits culturels, séjours plage, aventures et autotours partout dans le monde.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import data from "./destinations.json";

export type Categorie = "Culture" | "Plage" | "Aventure" | "Luxe";

export type Destination = {
  slug: string;
  nom: string;
  pays: string;
  region: string;
  categorie: Categorie;
  duree: number; // jours
  prix: number; // €, par personne
  note: number;
  avis: number;
  iata: string; // code aéroport d'arrivée
  ville: string;
  image: string; // fichier dans /public/images (sans extension)
  accroche: string;
  description: string;
  points: string[];
  programme: { jour: string; titre: string; texte: string }[];
  inclus: string[];
  saison: string;
};

export const destinations = data as Destination[];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);

export const imageDe = (d: Destination) => `/images/${d.image}.jpg`;

export const formatPrix = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export type Categorie = "Culture" | "Plage" | "Aventure" | "Nature";

export type Destination = {
  slug: string;
  nom: string;
  pays: string;
  categorie: Categorie;
  duree: number; // en jours
  prix: number; // en euros, par personne
  accroche: string;
  description: string;
  points: string[];
  programme: { jour: string; titre: string; texte: string }[];
  inclus: string[];
  saison: string;
  // dégradé utilisé comme visuel (pas d'image externe à gérer)
  couleurs: [string, string, string];
};

export const destinations: Destination[] = [
  {
    slug: "marrakech-desert",
    nom: "Marrakech & Désert",
    pays: "Maroc",
    categorie: "Culture",
    duree: 7,
    prix: 890,
    accroche: "Des souks de la médina aux dunes de Merzouga.",
    description:
      "Un voyage entre l'effervescence de la place Jemaa el-Fna, les kasbahs de la vallée du Drâa et une nuit sous les étoiles du Sahara. Riads de charme, guides locaux et rythme tranquille.",
    points: ["Nuit en bivouac à Merzouga", "Riad dans la médina", "Traversée de l'Atlas", "Cours de cuisine marocaine"],
    programme: [
      { jour: "J1–2", titre: "Marrakech", texte: "Arrivée, médina, jardins Majorelle et dîner sur les toits." },
      { jour: "J3", titre: "Haut Atlas", texte: "Col du Tizi n'Tichka et ksar d'Aït-Ben-Haddou." },
      { jour: "J4–5", titre: "Vallée du Drâa & Sahara", texte: "Palmeraies, puis balade à dos de dromadaire et nuit en bivouac." },
      { jour: "J6–7", titre: "Retour à Marrakech", texte: "Gorges du Todra, hammam et temps libre." },
    ],
    inclus: ["Hébergements (riads, bivouac)", "Petits-déjeuners et 4 dîners", "Chauffeur-guide francophone", "Activités mentionnées"],
    saison: "Octobre à avril",
    couleurs: ["#c2410c", "#e8a15a", "#f6d9a8"],
  },
  {
    slug: "santorin-cyclades",
    nom: "Santorin & Cyclades",
    pays: "Grèce",
    categorie: "Plage",
    duree: 8,
    prix: 1290,
    accroche: "Maisons blanches, mer turquoise et couchers de soleil à Oia.",
    description:
      "Trois îles, trois ambiances : Santorin et sa caldeira, Naxos et ses plages sauvages, Paros et ses villages de pêcheurs. Ferries réservés, hôtels avec vue.",
    points: ["Coucher de soleil à Oia", "Croisière dans la caldeira", "Plages de Naxos", "Dégustation de vins volcaniques"],
    programme: [
      { jour: "J1–3", titre: "Santorin", texte: "Fira, Oia, croisière et baignade dans les sources chaudes." },
      { jour: "J4–5", titre: "Naxos", texte: "Plages d'Agios Prokopios, villages de montagne." },
      { jour: "J6–8", titre: "Paros", texte: "Naoussa, Lefkes et départ depuis Athènes." },
    ],
    inclus: ["7 nuits en hôtels 3–4★", "Ferries inter-îles", "Croisière caldeira", "Transferts port/hôtel"],
    saison: "Mai à octobre",
    couleurs: ["#1d4ed8", "#60a5fa", "#e0f2fe"],
  },
  {
    slug: "kyoto-japon",
    nom: "Kyoto & Japon traditionnel",
    pays: "Japon",
    categorie: "Culture",
    duree: 12,
    prix: 2690,
    accroche: "Temples, ryokans et cerisiers, de Tokyo à Kyoto.",
    description:
      "Un premier voyage au Japon bien pensé : la modernité de Tokyo, la nature d'Hakone, puis Kyoto et Nara. Pass ferroviaire inclus et une nuit en ryokan avec onsen.",
    points: ["Nuit en ryokan avec onsen", "Japan Rail Pass 7 jours", "Cérémonie du thé", "Sanctuaire Fushimi Inari"],
    programme: [
      { jour: "J1–4", titre: "Tokyo", texte: "Shibuya, Asakusa, marché de Toyosu et quartier d'Akihabara." },
      { jour: "J5–6", titre: "Hakone", texte: "Vue sur le mont Fuji, lac Ashi et ryokan traditionnel." },
      { jour: "J7–11", titre: "Kyoto & Nara", texte: "Gion, Arashiyama, Kinkaku-ji et les daims de Nara." },
      { jour: "J12", titre: "Osaka", texte: "Street-food à Dotonbori et vol retour." },
    ],
    inclus: ["11 nuits (hôtels + 1 ryokan)", "Japan Rail Pass", "Cérémonie du thé", "Carnet de voyage personnalisé"],
    saison: "Mars–mai et octobre–novembre",
    couleurs: ["#9f1239", "#f472b6", "#fce7f3"],
  },
  {
    slug: "bali-indonesie",
    nom: "Bali essentiel",
    pays: "Indonésie",
    categorie: "Plage",
    duree: 10,
    prix: 1590,
    accroche: "Rizières en terrasses, temples et plages de sable blanc.",
    description:
      "Ubud et ses rizières, le volcan Batur au lever du soleil puis la détente sur les plages du sud ou des îles Gili. Un équilibre entre découverte et farniente.",
    points: ["Lever de soleil sur le Batur", "Rizières de Tegallalang", "Temple d'Uluwatu", "Snorkeling aux Gili"],
    programme: [
      { jour: "J1–4", titre: "Ubud", texte: "Rizières, forêt des singes, cours de yoga et cuisine balinaise." },
      { jour: "J5", titre: "Mont Batur", texte: "Randonnée de nuit pour le lever du soleil." },
      { jour: "J6–10", titre: "Gili Air & Uluwatu", texte: "Plages, snorkeling avec les tortues et danse Kecak." },
    ],
    inclus: ["9 nuits en villas et bungalows", "Chauffeur privé à Bali", "Bateau rapide vers les Gili", "Randonnée guidée"],
    saison: "Avril à octobre",
    couleurs: ["#065f46", "#34d399", "#d1fae5"],
  },
  {
    slug: "islande-route-1",
    nom: "Islande, la Route 1",
    pays: "Islande",
    categorie: "Nature",
    duree: 9,
    prix: 2190,
    accroche: "Cascades, glaciers et aurores boréales en autotour.",
    description:
      "Le tour de l'île par la route circulaire en voiture de location : Cercle d'Or, côte sud, lagune glaciaire de Jökulsárlón et lac Mývatn. Itinéraire et hébergements réservés pour vous.",
    points: ["Lagune de Jökulsárlón", "Cascades Skógafoss et Seljalandsfoss", "Bains de Mývatn", "Chasse aux aurores (sept.–mars)"],
    programme: [
      { jour: "J1–2", titre: "Reykjavik & Cercle d'Or", texte: "Þingvellir, Geysir et Gullfoss." },
      { jour: "J3–4", titre: "Côte sud", texte: "Plage noire de Reynisfjara et glaciers." },
      { jour: "J5–7", titre: "Fjords de l'Est & Nord", texte: "Fjords, Mývatn et observation des baleines à Húsavík." },
      { jour: "J8–9", titre: "Snæfellsnes", texte: "Péninsule et retour à Reykjavik." },
    ],
    inclus: ["Voiture de location 4x4", "8 nuits en guesthouses", "Road-book détaillé", "Assistance 24h/24"],
    saison: "Toute l'année",
    couleurs: ["#0f172a", "#0e7490", "#a5f3fc"],
  },
  {
    slug: "patagonie",
    nom: "Patagonie sauvage",
    pays: "Argentine & Chili",
    categorie: "Aventure",
    duree: 14,
    prix: 3490,
    accroche: "Trekking au bout du monde, entre glaciers et pics de granit.",
    description:
      "Le glacier Perito Moreno, les tours du Fitz Roy à El Chaltén et le parc Torres del Paine. Pour les marcheurs à l'aise, avec des guides de montagne expérimentés.",
    points: ["Glacier Perito Moreno", "Trek du Fitz Roy", "Parc Torres del Paine", "Estancia patagonienne"],
    programme: [
      { jour: "J1–2", titre: "Buenos Aires", texte: "San Telmo, Recoleta et soirée tango." },
      { jour: "J3–5", titre: "El Calafate", texte: "Perito Moreno et navigation sur le lac Argentino." },
      { jour: "J6–9", titre: "El Chaltén", texte: "Treks Laguna de los Tres et Cerro Torre." },
      { jour: "J10–14", titre: "Torres del Paine", texte: "Circuit en W et nuit en estancia." },
    ],
    inclus: ["Vols intérieurs", "13 nuits (hôtels, refuges)", "Guides de montagne", "Entrées des parcs"],
    saison: "Novembre à mars",
    couleurs: ["#334155", "#64748b", "#e2e8f0"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export const formatPrix = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

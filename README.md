# Horizons Voyages — site Next.js

Site vitrine d'agence de voyages en français (Next.js 15, App Router, TypeScript, CSS pur).

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Pages

- `/` — accueil (hero, voyages à la une, atouts, témoignages, appel à l'action)
- `/destinations` — catalogue avec filtres par catégorie et tri
- `/destinations/[slug]` — fiche voyage (programme jour par jour, inclus, devis)
- `/a-propos` — présentation de l'agence
- `/contact` — formulaire de devis (pré-rempli via `?voyage=slug`)
- `/api/contact` — route API qui valide la demande

## Personnaliser

- **Voyages** : modifier `data/destinations.ts` (ajouter un objet = nouvelle page générée).
- **Couleurs / typo** : variables CSS en haut de `app/globals.css`.
- **Envoi des e-mails** : brancher Resend, Nodemailer ou votre CRM dans `app/api/contact/route.ts`.
- **Photos** : les visuels sont des dégradés ; pour de vraies photos, ajouter un champ `image` aux destinations et utiliser `next/image`.

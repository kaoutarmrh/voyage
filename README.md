# Horizons Voyages — site Next.js

Site d'agence de voyages en français : Next.js 15 (App Router), TypeScript, CSS sans framework.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Pages

- `/` : accueil (photo plein écran, recherche, voyages coups de cœur, étapes, avis, devis)
- `/destinations` : catalogue filtrable (Culture, Plage, Aventure, Luxe) et triable
- `/destinations/[slug]` : fiche voyage (programme jour par jour, carte d'embarquement avec prix)
- `/a-propos` : l'agence, les engagements, l'équipe
- `/contact` : formulaire de devis (pré-rempli depuis une fiche via `?voyage=slug`)
- `/api/contact` : validation de la demande

## Personnaliser

- **Voyages** : `data/destinations.json` (un objet = une page générée automatiquement).
- **Photos** : `public/images/` (même nom que le champ `image`).
- **Couleurs, polices** : variables en haut de `app/globals.css`.
- **Coordonnées et avis** : ce sont des exemples, à remplacer par les vôtres.
- **Envoi des demandes** : brancher Resend, Nodemailer ou un CRM dans `app/api/contact/route.ts`.

## Crédits photos

Photos issues de banques libres (Pexels, Unsplash) via un projet open source. Avant une mise en ligne
commerciale, vérifiez la licence de chaque image ou remplacez-les par vos propres photos.

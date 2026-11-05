# Maloka Experience

Site Astro pour une landing page de travel planning specialisee sur la Colombie.

## Lancer le projet

```bash
pnpm install
pnpm run dev
```

Le serveur local utilise par defaut Astro. Dans cet environnement, la telemetry Astro
est desactivee dans les scripts pour eviter une ecriture dans `~/Library/Preferences`.

## Structure

- `src/pages/index.astro` : page principale
- `src/pages/video-colombie.astro` : landing page vidéo avec formulaire Brevo dédié, non indexable et absente du sitemap. La redirection vers `/confirmation/` et l’envoi de la vidéo se règlent dans Brevo.
- `src/pages/confirmation.astro` : confirmation d’inscription à la vidéo, à utiliser comme redirection Brevo après inscription confirmée ; page non indexable et absente du sitemap. L’envoi du lien vidéo est configuré dans Brevo.
- `src/styles/global.css` : styles globaux
- `public/images/colombia-hero.png` : visuel hero local

## A personnaliser ensuite

- Tarif et contenu exact de l'offre
- Adresse email ou formulaire de contact
- Mentions legales
- Future section blog

# Charisma Transport

Static marketing website for Charisma Transport — tourist bus rental from Kanyakumari District, Tamil Nadu. Built with React, TypeScript, Vite and Tailwind CSS.

Live site (GitHub Pages): [https://shajinstuart.github.io/charismaTransport/](https://shajinstuart.github.io/charismaTransport/)

Custom domain (later): [charismatransport.com](https://charismatransport.com)

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Adding photos and videos

Place files in these folders (WebP preferred):

- `public/images/buses/` — example: `charisma-16-seater.webp`
- `public/images/destinations/` — example: `ooty.webp`
- `public/images/gallery/`
- `public/images/office/`
- `public/images/owner/`
- `public/videos/`

Missing files show a branded placeholder. Do not commit large 4K videos.

Update paths in:

- `src/data/buses.ts`
- `src/data/destinations.ts`
- `src/data/gallery.ts`
- `src/config/contact.ts`

## GitHub Pages

The site deploys from GitHub Actions to:

**https://shajinstuart.github.io/charismaTransport/**

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. The workflow in `.github/workflows/deploy.yml` builds the Vite app, copies `index.html` to `404.html` for SPA routes, and publishes.

Vite `base` is `/charismaTransport/` so assets and React Router work on this project URL.

To use `charismatransport.com` later: add a `public/CNAME` file, point DNS to GitHub Pages, then set `base: "/"` in `vite.config.ts` and remove the React Router basename.

## Enquiry form

The contact form does not use a database. It opens a pre-filled WhatsApp chat to `84898 92221`.

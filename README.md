# Charisma Transport

Static marketing website for Charisma Transport — tourist bus rental from Kanyakumari District, Tamil Nadu. Built with React, TypeScript, Vite and Tailwind CSS.

Live site: [https://charismatransport.in](https://charismatransport.in) (hosted on GitHub Pages)

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

- `public/images/buses/` — example: `charisma-34-seater.jpg`
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

The site deploys from GitHub Actions to the custom domain **https://charismatransport.in**.

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. The workflow in `.github/workflows/deploy.yml` builds the Vite app, copies `index.html` to `404.html` for SPA routes, and publishes.
3. `public/CNAME` contains `charismatransport.in`, and Vite `base` is `/`.

DNS at the domain registrar:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | shajinstuart.github.io |

After changing the domain, regenerate the QR code with `npm run qr`.

## Enquiry form

The contact form does not use a database. It opens a pre-filled WhatsApp chat to `84898 92221`.

# Liam (Chengxuan) Han Portfolio

Personal portfolio for Liam (Chengxuan) Han.

Live site: https://chengxuanhan.com

GitHub Pages publishes the static export at the custom domain root. Keep Next.js basePath and assetPrefix unset. The canonical deployment workflow is `.github/workflows/pages.yml`.

## Stack

- Next.js
- Tailwind CSS
- Static export for GitHub Pages backup
- Vercel-ready deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The app uses `output: 'export'`, so `next build` emits a static `out/` directory suitable for GitHub Pages.

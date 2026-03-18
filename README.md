# Stayaura Web

Frontend for the Stayaura website, built with React and Vite.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env` file based on `.env.example`:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

For production, set `VITE_API_BASE_URL` to your deployed backend URL, for example:

```bash
VITE_API_BASE_URL=https://api.yourdomain.com
```

## Deploying the frontend

This app builds to static files in `dist/`, so you can deploy it to any static host and connect it to a separate backend through `VITE_API_BASE_URL`.

### Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `VITE_API_BASE_URL=https://your-backend-url`

The repo includes [`public/_redirects`](/Users/nimishamishra/stayaura-web/public/_redirects) so client-side routes rewrite to `index.html` after build.

### Other hosts

You can also deploy this app on Cloudflare Pages, Render Static Sites, GitHub Pages, or any Nginx-based static host. The important pieces are:

- Run `npm run build`
- Serve the generated `dist/` folder
- Add an SPA fallback that rewrites unknown routes to `index.html`
- Set `VITE_API_BASE_URL` to the backend you want this frontend to call

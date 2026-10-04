# Personal Portfolio Website

Rashmika Rupasinghe's portfolio uses Next.js 16 App Router, React 19, TypeScript,
Tailwind CSS, and Framer Motion. It includes home, about, projects, blog, and contact
pages, dynamic project/blog pages, and server-side admin login/logout routes.
The contact form sends directly to Web3Forms. Portfolio content lives in source
files, including `lib/portfolio-projects.ts`.

## Local development

Use Node.js 24 (also declared in `.nvmrc` and `package.json`).

```bash
npm ci
```

Copy `.env.local.example` to `.env.local` and fill in the variables you need.
For PowerShell:

```powershell
Copy-Item .env.local.example .env.local
```

```bash
npm run dev
```

Open http://localhost:3000. To verify production behavior:

```bash
npm run typecheck
npm test
npm run build
npm start
```

The build runs TypeScript validation. The obsolete `next lint` script has been
replaced with `typecheck`; no standalone linter is configured. The repository's
`.npmrc` enables legacy peer resolution for existing UI packages, so use the
committed `package-lock.json` and avoid deleting it during deployment.

## Deploy to Netlify

1. Push this repository, including `netlify.toml` and `package-lock.json`, to your
   Git provider.
2. In Netlify, add a project by importing the repository and select the branch
   you want to deploy.
3. Netlify reads these settings from `netlify.toml`:

   | Setting | Value |
   | --- | --- |
   | Base directory | Repository root (leave empty) |
   | Build command | `npm run build` |
   | Publish directory | `.next` |
   | Node.js | `24` |
   | npm install flags | `--legacy-peer-deps` |

4. Add the environment variables below in Netlify's project configuration before
   the first build. Set them for each deploy context that should use them.
5. Deploy the project. Netlify automatically installs its current Next.js adapter
   and packages API routes and server rendering as Functions.
6. Check `/`, `/projects/1`, `/blog/modern-web-development-best-practices`,
   `/contact`, `/robots.txt`, and `/sitemap.xml` on the deployed URL. An
   unauthenticated visit to `/admin` should redirect to `/admin/login`.

This app needs the Next.js server runtime for cookies and dynamic routes. Keep
the publish directory as `.next`; do not enable `output: "export"` or add a
catch-all SPA redirect to `index.html`. A Git-connected build is required to
prepare the adapter's output; uploading the raw `.next` directory is insufficient.

See [Netlify's Next.js guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
and [environment variable documentation](https://docs.netlify.com/build/environment-variables/overview/).

## Environment variables

| Variable | Purpose | Netlify scope |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Required to send contact messages; use your existing Web3Forms access key or obtain one at [Web3Forms](https://web3forms.com). This key is intentionally public. | Builds |
| `SITE_URL` | Optional canonical site origin, e.g. `https://rashmika.maximumeffortlk.site`. Defaults to Netlify's `URL`, or `http://localhost:3000` locally. | Builds and Functions |
| `ADMIN_USERNAME` | Optional admin username. | Functions |
| `ADMIN_PASSWORD` | Optional admin password; choose a new value rather than reusing the previously committed password. | Functions |
| `ADMIN_SESSION_SECRET` | Random secret of at least 32 characters used to sign 24-hour admin sessions. | Functions |

If scope selection is unavailable on your plan, use all scopes. Store admin values
in Netlify's UI, CLI, or API, rather than `netlify.toml`, and never prefix them with
`NEXT_PUBLIC_`. Admin login stays disabled until all three admin variables are
configured. Changing `ADMIN_SESSION_SECRET` invalidates existing sessions.

Generate a session secret locally with:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Redeploy after changing any environment variable. Rebuild after changing the
contact key, site URL, or custom domain because public configuration and static
metadata are generated at build time. Without a contact
key, the form reports that it is unavailable and visitors can use the listed email
address. `RESEND_API_KEY` and `CONTACT_EMAIL` are unused by the current form.

## Existing limitations

- Admin editors currently modify React state or display placeholder save alerts;
  edits are not persisted and do not update the public portfolio. A database/CMS
  integration would be needed to support persistent editing.
- The layout references social images and favicons that are absent from `public/`
  (`og-image.jpg`, `apple-touch-icon.png`, `favicon.png`, and `favicon.svg`). Add
  these branded assets to complete browser icons and social previews.

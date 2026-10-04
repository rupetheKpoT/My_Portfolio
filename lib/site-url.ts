// Netlify supplies URL during builds; SITE_URL can override it for a custom domain.
export const siteUrl = new URL(
  process.env.SITE_URL || process.env.URL || "http://localhost:3000",
).origin

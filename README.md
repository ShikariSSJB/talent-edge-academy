# Talent Edge Academy — Website

Official website for **Talent Edge Academy** ("Learn. Excel. Succeed.") — O/A Level Coaching & University Entry Test Preparation (ECAT, MDCAT, SAT, GRE, GAT, GMAT).

Built with **React 19 + TanStack Start + Vite + Tailwind CSS v4**.

## Pages

Home, About, O Level Coaching, A Level Coaching, University Entry Test Prep, Teaching Methodology, Examination Preparation, Student Support, Admissions, FAQ, Contact.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build -> outputs the dist/ folder
```

## Deploying to static hosting

`npm run build` creates a `dist/` folder. Every page is prerendered to static
HTML, so the site can be uploaded to any static host (cPanel, Netlify, Vercel,
GitHub Pages, etc.):

- Upload the **contents of `dist/client`** to your hosting's web root
  (e.g. `public_html`). It contains `index.html`, one folder per page
  (`about/index.html`, `contact/index.html`, ...), and all assets.
- The contact/admission forms need the server-side environment variables
  below; on pure static hosting the forms will not submit, but all pages
  display fine.

## Contact form (Google Sheets)

The Admission and Contact forms submit inquiries to a Google Sheets spreadsheet through a server-side connector. To run this yourself you need:

- `LOVABLE_API_KEY` and `GOOGLE_SHEETS_API_KEY` environment variables (server-side only)
- The target spreadsheet ID configured in `src/lib/inquiry.functions.ts`

Without these, the rest of the site works fine — only form submissions will fail.

## Structure

```
src/
  routes/          one file per page (index, about, o-level, ...)
  components/site/ Header, Footer, shared blocks, inquiry form
  data/site.ts     all site content (programs, subjects, FAQs, ...)
  lib/             server functions + SEO helper
  assets/          images (logo, photos)
  styles.css       design tokens (navy / royal blue / red, Poppins + Inter)
public/            favicon, robots.txt
```

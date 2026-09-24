# AURA Robotics distributor site

Static website for GitHub Pages. It contains a home page, a filterable catalog of 19 KEENON products, individual product views, six solution pages and a contact page. Products and categories were checked against the manufacturer's English website on 2026-09-23. This is an independent distributor site, not a mirror of the manufacturer website.

## Publish in the existing `aura` repository

Replace the repository root `index.html` with this folder's `index.html`, then add `styles.css`, `app.js`, `products.js`, and `site-config.js` to the repository root. Keep the existing `CNAME` file unchanged so the custom domain continues to work. In GitHub **Settings → Pages**, the source should be the `main` branch's root if that is the repository's current publishing source. Commit the five files together and wait for the Pages deployment to succeed.

## Edit your details

Only edit `site-config.js` for the public brand name, logo path, email, phone, address and region. A blank logo shows a text brand. Leave email and phone blank until actual contact details are available. To change product descriptions or the catalog, edit `products.js`.

Product pages provide concise summaries and link to their manufacturer pages for current specifications. Product images and manufacturer testimonials have deliberately not been copied. Confirm permission to reuse any official assets and confirm specifications and availability before publishing sales claims.

Navigation uses URL fragments (`#/products/C40`) so it works on GitHub Pages without server routing. No backend or lead-capture form is included. Add a real contact address before directing customers to the page.

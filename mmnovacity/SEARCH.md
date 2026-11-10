# Search and AI discovery

`npm run build` creates static HTML for `/`, `/about`, `/services` and `/contact` in `dist/`. Each includes the actual React page, its own title, description, canonical and social metadata, and a linked Schema.org graph. Browser navigation updates the same metadata. The homepage FAQ uses the same source as its FAQPage markup.

The canonical domain remains `https://mmnovacity.com`, matching the existing sitemap and robots.txt. The property portal on `novacitymm.com` is a separate destination. Update `src/data/search.js`, `index.html`, `public/sitemap.xml` and `public/robots.txt` together if the website's canonical domain changes.

## Publishing

Deploy the complete `dist/` folder. Configure the host to serve existing files and directory indexes before any SPA fallback, so `/about`, `/services` and `/contact` serve their generated HTML. Keep unknown URLs as HTTP 404s rather than returning the homepage. No runtime Node server is required.

After deployment, check the source returned for all four URLs, submit `https://mmnovacity.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and use URL Inspection to request indexing. Check the hosting/CDN settings allow search crawlers; robots.txt already allows all user agents.

## Maintaining answers

Edit `src/data/search.js` when business facts, contact details or answers change, and keep the existing Contact and Footer content consistent. Do not add unverified ratings, prices, property availability or guarantees to structured data. FAQ markup describes the visible answers; it does not promise a Google FAQ rich result. AI citations and search ranking are not guaranteed.

References: [Google AI features](https://developers.google.com/search/docs/appearance/ai-features), [JavaScript SEO and prerendering](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

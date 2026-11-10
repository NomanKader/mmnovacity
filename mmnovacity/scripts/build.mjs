import { build } from "vite";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { pages, siteUrl, structuredData } from "../src/data/search.js";

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

// Generate the same React content for browsers and crawlers, without a runtime server.
await build();
try {
  await build({
    build: {
      ssr: "src/entry-server.jsx",
      outDir: "dist-ssr",
      ssrEmitAssets: true,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });
  const { render } = await import("../dist-ssr/entry-server.mjs");
  const template = await readFile("dist/index.html", "utf8");
  for (const [pathname, page] of Object.entries(pages)) {
    const url = `${siteUrl}${pathname}`;
    let html = template.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(page.title)}</title>`);
    const metadata = {
      description: page.description,
      "og:title": page.title,
      "og:description": page.description,
      "og:url": url,
      "twitter:title": page.title,
      "twitter:description": page.description,
    };
    for (const [key, value] of Object.entries(metadata)) {
      html = html.replace(new RegExp(`(<meta\\s+(?:name|property)="${key}"\\s+content=")[^"]*("\\s*/?>)`, "g"), (_, before, after) => `${before}${escapeHtml(value)}${after}`);
    }
    html = html.replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${url}${after}`);
    html = html.replace(/(<script id="search-structured-data" type="application\/ld\+json">).*?(<\/script>)/s, (_, before, after) => `${before}${JSON.stringify(structuredData(pathname)).replaceAll("<", "\\u003c")}${after}`);
    html = html.replace('<div id="root"></div>', () => `<div id="root">${render(pathname)}</div>`);
    const directory = pathname === "/" ? "dist" : `dist${pathname}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, html);
    console.log(`Prerendered ${pathname}`);
  }
} finally {
  await rm("dist-ssr", { recursive: true, force: true });
}

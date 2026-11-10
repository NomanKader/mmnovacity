import { useEffect } from "react";
import { useLocation } from "react-router";
import { pages, siteUrl, structuredData } from "../data/search";

export default function SearchMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path];
    if (!page) return;
    document.title = page.title;
    const values = {
      'meta[name="description"]': page.description,
      'meta[property="og:title"]': page.title,
      'meta[property="og:description"]': page.description,
      'meta[property="og:url"]': `${siteUrl}${path}`,
      'meta[name="twitter:title"]': page.title,
      'meta[name="twitter:description"]': page.description,
    };
    Object.entries(values).forEach(([selector, value]) => {
      document.querySelector(selector)?.setAttribute("content", value);
    });
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${siteUrl}${path}`);
    document.getElementById("search-structured-data").textContent = JSON.stringify(structuredData(path));
  }, [pathname]);
  return null;
}

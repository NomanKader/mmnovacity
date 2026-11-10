export const siteUrl = "https://mmnovacity.com";
export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.novacitymm.app";

export const pages = {
  "/": {
    title: "MMNovaCity | Property Sales & Rentals in Yangon, Myanmar",
    description: "MMNovaCity (NovaCity) connects property buyers, sellers and renters in Yangon, Myanmar. Explore property sales, rentals and real estate consultation.",
    name: "Home",
    type: "WebPage",
  },
  "/about": {
    title: "About NovaCity | Real Estate Platform in Yangon",
    description: "Learn about MMNovaCity (NovaCity), a real estate platform based in South Okkalapa, Yangon, connecting buyers, sellers and renters in Myanmar.",
    name: "About NovaCity",
    type: "AboutPage",
  },
  "/services": {
    title: "Property Sales, Rentals & Consultation | NovaCity Yangon",
    description: "Explore NovaCity's property sales and purchase, rental and consultation services for residential and commercial properties in Yangon, Myanmar.",
    name: "Real Estate Services",
    type: "CollectionPage",
  },
  "/contact": {
    title: "Contact NovaCity | South Okkalapa, Yangon",
    description: "Contact NovaCity at 09785581866 or visit No (159/1), Myintar 10 Street, South Okkalapa, Yangon. See office hours and discuss buying, selling or renting.",
    name: "Contact NovaCity",
    type: "ContactPage",
  },
};

// Shared by visible answers and structured data so they cannot drift apart.
export const faqs = [
  {
    question: "What is NovaCity?",
    answer: "MMNovaCity, also known as NovaCity, is a real estate platform based in Yangon, Myanmar. It connects property buyers, sellers and renters and offers property sales, rental and consultation services.",
  },
  {
    question: "Where does NovaCity offer property services?",
    answer: "NovaCity offers services for residential and commercial properties across Yangon, Myanmar. Contact the team to ask about properties in your preferred township.",
  },
  {
    question: "How can I buy, sell or rent a property with NovaCity?",
    answer: "Explore properties through the NovaCity property platform or contact the team on 09785581866 to discuss buying, selling or renting. The team can help with property search, viewings and the agreement process.",
  },
  {
    question: "Where is the NovaCity office and when is it open?",
    answer: "The NovaCity office is at No (159/1), Myintar 10 Street, (14/1) Ward, South Okkalapa Township, Yangon, Myanmar. Office hours are Monday to Friday, 9:00 AM to 6:00 PM, and Saturday, 9:00 AM to 4:00 PM, Myanmar time.",
  },
  {
    question: "Is there a NovaCity Android app?",
    answer: "Yes. Download the NovaCity Android app from Google Play using the download link on this website. The iOS app is coming soon.",
  },
];

export function structuredData(pathname) {
  const page = pages[pathname];
  const url = `${siteUrl}${pathname}`;
  const organizationId = `${siteUrl}/#organization`;
  const graph = [
    {
      "@type": "RealEstateAgent",
      "@id": organizationId,
      name: "MMNovaCity",
      alternateName: "NovaCity",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/og-mmnovacity.png`,
      image: `${siteUrl}/og-mmnovacity.png`,
      description: pages["/"].description,
      telephone: "+959785581866",
      email: "novacityrealestate920@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No (159/1), Myintar 10 Street, (14/1) Ward",
        addressLocality: "South Okkalapa Township",
        addressRegion: "Yangon",
        addressCountry: "MM",
      },
      areaServed: { "@type": "City", name: "Yangon", containedInPlace: { "@type": "Country", name: "Myanmar" } },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
      ],
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "MMNovaCity", alternateName: "NovaCity", publisher: { "@id": organizationId }, inLanguage: "en" },
    { "@type": page.type, "@id": `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": organizationId }, inLanguage: "en" },
  ];
  if (pathname !== "/") graph.push({
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: page.name, item: url },
    ],
  });
  if (pathname === "/") graph.push({
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    isPartOf: { "@id": `${url}#webpage` },
    mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  });
  return { "@context": "https://schema.org", "@graph": graph };
}

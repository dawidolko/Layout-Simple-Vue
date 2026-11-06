/*
  The route table the prerender step works from.
*/
const origin = "https://simplelayout.dawidolko.pl";

export const site = {
  origin,
  name: "Simple",
  locale: "pl_PL",
  image: "/og-image.jpg",
  imageAlt: "Simple business website layout home page",
  outDir: "dist",
  rootId: "app",
};

export const routes = [
  {
    path: "/",
    title: "Simple | Minimalist Business Website Layout in Vue.js",
    description:
      "Minimalist business website layout built with Vue.js, split into components with separate data files for services, products and news.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Simple",
        url: `${origin}/`,
        description: "Minimalist business website layout built with Vue.js.",
        author: { "@type": "Person", name: "Dawid Olko", url: "https://dawidolko.pl" },
      },
    ],
  },
];

export const notFound = null;

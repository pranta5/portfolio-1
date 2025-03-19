// lib/schema.js
interface PageSchemaParams {
  title: string;
  description: string;
  url?: string;
  image?: string | null;
}

export function generatePageSchema({ title, description, url, image }: PageSchemaParams) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: description,
      url: url || "https://protfolio-ivory-iota.vercel.app", // Default URL
      image: image || null, // Optional image
    };
  }
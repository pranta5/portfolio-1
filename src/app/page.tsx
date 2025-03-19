// app/page.tsx
import Home from "./(pages)/home/page";
import { generatePageSchema } from "@/app/lib/schema";

export async function generateMetadata() {
  return {
    title: "Pranta's Portfolio",
    description: "Responsive portfolio website",
  };
}

export default async function App() {
  const schema = generatePageSchema({
    title: "Pranta's Portfolio",
    description: "Responsive portfolio website",
    url: "https://protfolio-ivory-iota.vercel.app/",
    image: "https://opengraph.b-cdn.net/production/images/582cadc9-5017-4786-907f-e6729f98a5e4.png",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Home />
    </>
  );
}
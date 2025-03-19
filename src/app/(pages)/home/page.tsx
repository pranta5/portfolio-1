"use client";
// app/(pages)/home/page.tsx
import ContactMeComp from "@/app/components/ContactComp";
import Hero from "@/app/components/hero";
import AboutMeHome from "@/app/components/homeAbout";
import Recentproject from "@/app/components/recentproject";
import { generatePageSchema } from "@/app/lib/schema";

export default function Home() {
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
      <div className="bg-white">
        <Hero />
      </div>
      <AboutMeHome />
      <div className="mt-16 mx-6">
        <h2 className="text-4xl ml-10 font-bold">Recent Project</h2>
        <Recentproject />
      </div>
      <ContactMeComp />
    </>
  );
}
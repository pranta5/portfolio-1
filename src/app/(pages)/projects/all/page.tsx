// app/(pages)/project/page.tsx
import Image from "next/image";
import image1 from "../../../../../public/projectImg.png";
import image2 from "../../../../../public/projectImg2.png";
import image3 from "../../../../../public/projectImg3.png";
import image4 from "../../../../../public/projectImg4.png";

export async function generateMetadata() {
  return {
    title: "Projects | Pranta's Portfolio",
    description:
      "A collection of Pranta's latest works showcasing his passion and skills.",
  };
}

export default function All() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects | Pranta's Portfolio",
    description:
      "A collection of Pranta's latest works showcasing his passion and skills.",
    url: "https://protfolio-ivory-iota.vercel.app/project",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "CreativeWork",
          name: "Project 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          image: "/projectImg.png",
          url: "https://protfolio-ivory-iota.vercel.app/project#project1",
        },
        {
          "@type": "CreativeWork",
          name: "Project 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          image: "/projectImg2.png",
          url: "https://protfolio-ivory-iota.vercel.app/project#project2",
        },
        {
          "@type": "CreativeWork",
          name: "Project 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          image: "/projectImg3.png",
          url: "https://protfolio-ivory-iota.vercel.app/project#project3",
        },
        {
          "@type": "CreativeWork",
          name: "Project 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          image: "/projectImg4.png",
          url: "https://protfolio-ivory-iota.vercel.app/project#project4",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div>
        <div className="flex flex-col items-center my-30">
          <h2 className="text-8xl font-bold text-center uppercase py-5 mt-10">
            ALL Projects
          </h2>
          <p className="font-light">
            A collection of my latest works. Discover the Projects that Define
            My passion and Skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-8 m-10 rounded-2xl shadow-2xl">
          <div className="rounded-lg shadow-2xl m-8 transition-all duration-300 hover:scale-110">
            <Image src={image1} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl m-8 duration-300 hover:scale-110">
            <Image src={image2} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl m-8 duration-300 hover:scale-110">
            <Image src={image3} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl m-8 duration-300 hover:scale-110">
            <Image src={image4} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
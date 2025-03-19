import React from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


const skillData = [
  { name: "HTML", icon: <FaHtml5 size={50} color="red" /> },
  { name: "CSS", icon: <FaCss3 size={50} color="orange"/> },
  { name: "JAVASCRIPT", icon: <IoLogoJavascript size={50} color="#FFD600"/> },
  { name: "REACT", icon: <FaReact size={50}/> },
  { name: "TYPESCRIPT", icon: <SiTypescript size={50} color="#3178C6"/> },
  { name: "NEXTJS", icon: <RiNextjsFill size={50}/> },
];

export async function generateMetadata() {
  return {
    title: "About | Pranta's Portfolio",
    description: "Learn more about Pranta and his skills.",
  };
}

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About | Pranta's Portfolio",
    description: "Learn more about Pranta and his skills.",
    url: "https://protfolio-ivory-iota.vercel.app/about",
    mainEntity: {
      "@type": "Person",
      name: "Pranta",
      jobTitle: "Web Developer",
      description:
        "A skilled MERN Stack and Web Developer with experience in HTML, CSS, JavaScript, React, TypeScript, and Next.js.",
      worksFor: [
        {
          "@type": "Organization",
          name: "Wbskitters Academy",
          description: "MERN Stack Developer (2024-present)",
        },
        {
          "@type": "Organization",
          name: "Freelancer",
          description: "Web Developer (2023-2024)",
        },
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Techno India University",
          description: "MCA (2021-2023)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Kazi Nazrul University",
          description: "BSCH in Computer Science (2017-2020)",
        },
      ],
    },
  };
  return (
    <div>
      <div className="py-26">
        <p className="text-center font-bold text-9xl my-10">ABOUT ME</p>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F9F8F6] p-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 duration-300 hover:scale-110">
          <div className=" flex items-center space-x-2">
            <span className="bg-black text-white text-xs rounded-xl m-2 p-4">
              2024-present
            </span>
          </div>
          <h3 className="font-bold text-2xl mt-3 uppercase">Mern Stack</h3>
          <p className="text-gray-500">@Wbskitters Academy</p>
          <p className="text-gray-600 text-sm mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            magni commodi soluta cupiditate deserunt quam nesciunt voluptatem
            minima? Ex aliquid aut nam unde voluptates aliquam optio voluptate
            sunt magnam. Dolor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 duration-300 hover:scale-110">
          <div className=" flex items-center space-x-2">
            <span className="bg-black text-white text-xs rounded-xl m-2 p-4">
              2023-2024
            </span>
          </div>
          <h3 className="font-bold text-2xl mt-3 uppercase">Web Developer</h3>
          <p className="text-gray-500">@freelancer</p>
          <p className="text-gray-600 text-sm mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            magni commodi soluta cupiditate deserunt quam nesciunt voluptatem
            minima? Ex aliquid aut nam unde voluptates aliquam optio voluptate
            sunt magnam. Dolor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 duration-300 hover:scale-110">
          <div className=" flex items-center space-x-2">
            <span className="bg-black text-white text-xs rounded-xl m-2 p-4">
              2021 - 2023
            </span>
          </div>
          <h3 className="font-bold text-2xl mt-3 uppercase">MCA</h3>
          <p className="text-gray-500">@Techno india university</p>
          <p className="text-gray-600 text-sm mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            magni commodi soluta cupiditate deserunt quam nesciunt voluptatem
            minima? Ex aliquid aut nam unde voluptates aliquam optio voluptate
            sunt magnam. Dolor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 duration-300 hover:scale-110">
          <div className=" flex items-center space-x-2">
            <span className="bg-black text-white text-xs rounded-xl m-2 p-4">
              2017-2020
            </span>
          </div>
          <h3 className="font-bold text-2xl mt-3 uppercase">Computer Science (BSCH)</h3>
          <p className="text-gray-500">@Kazi Nazrul University</p>
          <p className="text-gray-600 text-sm mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            magni commodi soluta cupiditate deserunt quam nesciunt voluptatem
            minima? Ex aliquid aut nam unde voluptates aliquam optio voluptate
            sunt magnam. Dolor.
          </p>
        </div>

      </div>
      {/* skill */}
      <div className="my-20 p-6">
        <h2 className="font-bold text-4xl mb-18 uppercase mt-6">
          Professional Skills
        </h2>

        <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl duration-300 hover:scale-110"
            >
              <div>
                  {skill.icon}
                {/* <span className="text-6xl"> {React.createElement(skill.icon)}</span> */}
              </div>
              <p className="text-lg font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

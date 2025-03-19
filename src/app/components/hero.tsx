"use client";
import Image from "next/image";
import profileImg from "../../../public/heroimg/profile1.jpg";
import profileImg2 from "../../../public/heroimg/profile2.jpg";
import profileImg3 from "../../../public/heroimg/profile3.jpg";
import profileImg4 from "../../../public/heroimg/profile4.jpg";


const Hero = () => {
  return (
    <section className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 md:px-20 py-16 bg-[#f8f6f2] text-center md:text-left">
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[16vw] md:text-[10vw] font-extrabold text-black opacity-10 uppercase z-0">
        Pranta Das
      </h1>

      <div className="relative z-10 flex flex-col items-center md:items-start">
        <div className="flex justify-center md:justify-start -space-x-3 mb-3">
          <Image
            src={profileImg2}
            alt="Avatar"
            width={70}
            height={70}
            className="rounded-full border-2 border-white"
          />
          <Image
            src={profileImg3}
            alt="Avatar"
            width={70}
            height={70}
            className="rounded-full border-2 border-white"
          />
          <Image
            src={profileImg4}
            alt="Avatar"
            width={70}
            height={70}
            className="rounded-full border-2 border-white"
          />
        </div>
        <p className="text-lg font-bold">
          100+ reviews{" "}
          <span className="text-gray-500 text-sm">(4.96 of 5)</span>
        </p>
        <p className="text-sm text-gray-600">
          Five-star reviews from my esteemed clients.
        </p>
      </div>

      <div className="relative z-10 flex justify-center">
        <Image
          src={profileImg}
          alt="Profile"
          width={280}
          height={350}
          className="rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition duration-300"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-start">
        <p className="text-lg leading-relaxed mb-4">
          Hi, Im Pranta, a passionate JavaScript Developer dedicated to
          crafting seamless digital experiences.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;

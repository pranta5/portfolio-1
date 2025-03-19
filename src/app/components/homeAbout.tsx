"use client";

const AboutMeHome = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I am Pranta Das, a passionate JavaScript Developer with expertise in crafting intuitive and 
          engaging digital experiences. 
          I discovered my passion for understanding user behavior and translating it into seamless interactions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold">1+</h3>
          <p className="text-gray-400 text-sm">Years of Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">5+</h3>
          <p className="text-gray-400 text-sm">Completed Projects</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">90%+</h3>
          <p className="text-gray-400 text-sm">Client Satisfactions</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHome;

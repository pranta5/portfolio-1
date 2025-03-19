"use client";

import Recentproject from "@/app/components/recentproject";

const Recent = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center my-30">
          <h2 className=" text-8xl font-bold text-center uppercase py-5 mt-10">
            Recent Projects
          </h2>
          <p className=" font-light ">
            A collection of my latest works . Discover the Projects that Define
            My passion ans Skills
          </p>
        </div>
        <Recentproject />
      </div>
    </>
  );
};

export default Recent;

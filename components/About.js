import Image from "next/image";
import React from "react";
import myImage from "../assets/images/IMG_20230316_210606.jpg";

const About = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-8 lg:flex-row  items-center">
        <div className="flex items-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:ml-8">
          <Image src={myImage} alt="" className="object-contain w-1/2" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-title">
            Ac mattis
            <span className="dark:text-violet-400">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-4 text-lg sm:mb-8 text-small_text">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="px-4 py-2 rounded border-2 border-primary text-primary ">Explore My Projects</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

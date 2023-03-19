import Image from "next/image";
import React from "react";
import myImage from "../assets/images/IMG_20230316_210606.jpg";
import about from "../assets/images/user.png";

const About = () => {
  return (
    <div className="w-10/12 flex flex-col justify-center px-6 mx-auto sm:pt-14 pb-10 md:my-20 md:flex-row  items-center bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm">
      <div className="flex items-center mt-8 lg:mt-0 w-1/2 relative ">
        <div className="border-2 border-primary rounded w-[300px] h-72"></div>
        <Image src={myImage} alt="" className="object-contain -top-6 left-5 w-3/5 absolute rounded" />
      </div>
      <div className="flex flex-col justify-center text-center rounded-sm lg:text-left w-1/2">
        <div className="flex items-center">
          <Image src={about} alt="" className="w-8 mr-2" />
          <h1 className="text-3xl font-semibold leading-none text-title ml-3">About Me</h1>
        </div>

        <p className="mt-6 mb-4 text-lg sm:mb-8 text-small_text">Dictum aliquam porta in condimentum ac integer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vero ratione aliquam maiores et, voluptas neque ullam facilis excepturi! Possimus nemo sapiente, provident repellat quas ab doloribus harum impedit vitae.</p>
      </div>
    </div>
  );
};

export default About;

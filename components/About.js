import {motion} from "framer-motion";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import myImage from "../assets/images/IMG_20230316_210606.jpg";
import about from "../assets/images/about.png";
import {MdMovie} from "react-icons/md";
import {FcReading} from "react-icons/fc";
import {FaRunning} from "react-icons/fa";

// import {useAnimate, useInView} from "framer-motion";

const About = () => {
  const aboutVariants = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "linear",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="sm:w-10/12 xs:w-full flex flex-col justify-center px-6 mx-auto sm:pt-14 pb-10 md:my-20 lg:flex-row  lg:items-center items-start bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm lg:container" initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={aboutVariants} id="about">
      <div className="flex items-center mt-12 sm:mt-8 lg:mt-0 lg:w-2/5 ">
        <Image src={myImage} alt="" className="object-contain lg:w-4/5 2xl:w-2/5  rounded" />
      </div>
      <div className="flex flex-col justify-center rounded-sm lg:text-left lg:w-3/5 sm:px-6 lg:px-0 mt-6 lg:mt-0">
        <div className="flex items-center">
          <Image src={about} alt="" className="w-4 sm:w-7 mr-2" />
          <h1 className="text-xl sm:text-3xl font-semibold leading-none text-title ml-3">About Me</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-2" />
        </div>

        <div className="mt-6 mb-4 text-md sm:mb-8 text-small_text">
          Hello! My name is Israt Jahan Emu. Currently, I’m taking part in a master’s degree program at Noakhali Science & Technology University in <span className="text-primary font-semibold font-mono">Applied Mathematics</span>.
          <br className="hidden lg:flex" />
          I’m fascinated by Programming. It excites me to write and read code. No matter how difficult, any programming problem excites me, and I enjoy thinking about its solution. Designing and developing websites is also a passion of mine since it is a part of programming. <br className="hidden lg:flex" />
          I’ve completed an internship at indian IT firm <span className="text-primary font-semibold font-mono">Zivaka LLP</span> and built three professional websites with their team.
          <br className="hidden lg:flex" />I also love to____
          <div className="flex flex-col sm:flex-row sm:items-center font-mono">
            <div className="flex items-center mr-3">
              <MdMovie className="text-lg mr-1 text-primary" /> <div className="font-medium">Watch movie</div>
            </div>
            <div className="flex items-center mr-3">
              <FcReading className="text-lg mr-1" />
              <div className="font-medium">Read books</div>
            </div>
            <div className="flex items-center">
              <FaRunning className="text-lg mr-1 text-primary" />
              <div className="font-medium">Travel</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

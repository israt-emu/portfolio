import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";
import myImage from "../assets/images/IMG_20230316_210606.jpg";
import about from "../assets/images/about.png";
import {FcReading} from "react-icons/fc";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.6, delay: 0.4}}
      variants={{
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 100},
      }}
      className="sm:w-10/12 xs:w-full flex flex-col justify-center px-6 mx-auto sm:pt-14 pb-10 md:my-20 lg:flex-row  lg:items-center items-start bg-slate-600/10 ring-1 ring-violet-200/10 rounded-2xl  backdrop-blur-sm lg:container"
      id="about"
    >
      <div className="flex items-center mt-12 sm:mt-8 lg:mt-0 lg:w-2/5 ">
        <Image src={myImage} alt="" className="object-contain lg:w-4/5 2xl:w-2/5 rounded opacity-75 hover:opacity-100 transition-all duration-75 hover:ease-linear" />
      </div>
      <div className="flex flex-col justify-center rounded-sm lg:text-left lg:w-3/5 sm:px-6 lg:px-0 mt-6 lg:mt-0">
        <div className="flex items-center">
          {/* <Image src={about} alt="" className="w-6 sm:w-7 mr-2" /> */}
          <span className="text-3xl">👩</span>
          <h1 className="text-xl sm:text-3xl font-semibold leading-none text-gradient ml-3">About Me</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-2" />
        </div>

        <div className="mt-6 mb-4 text-md sm:mb-8 text-small_text">
          Hello! My name is Israt Jahan Emu. Currently, I’m taking part in a master’s degree program at Noakhali Science & Technology University in <span className="text-title font-semibold font-mono">Applied Mathematics</span>.
          <br className="hidden lg:flex" />
          I’m fascinated by Programming. It excites me to write and read code. Designing and developing websites is also a passion of mine since it is a part of programming. <br className="hidden lg:flex" />
          I’ve completed an internship at indian IT firm <span className="text-title font-semibold font-mono">Zivaka LLP</span> and built three professional websites with their team.
          <br className="hidden lg:flex" />I also love to____
          <div className="flex flex-col sm:flex-row sm:items-center font-mono">
            <div className="flex items-center mr-3">
              <span className="text-xl mr-1">📺</span> <div className="font-medium">Watch movie</div>
            </div>
            <div className="flex items-center mr-3">
              <FcReading className="text-xl mr-1" />
              <div className="font-medium">Read books</div>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-1">🚕</span>
              <div className="font-medium"> Travel</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

import Image from "next/image";
import {useState} from "react";
import Backend from "./Backend";
import Design from "./Design";
import Frontend from "./Frontend";
import Programming from "./Programming";
import Tools from "./Tools";
import skills from "../assets/images/skills.png";
import {motion} from "framer-motion";
const Skills = () => {
  const [active, setActive] = useState("programming");
  const skillVariants = {
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
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={skillVariants} className="mx-auto w-full lg:w-9/12 py-8 lg:px-6 lg:container" id="skill">
      <div className="flex items-center mb-6">
        <Image src={skills} alt="" className="w-12 mr-3" />
        <h2 className="text-xl font-bold sm:text-4xl text-title text-center">My Expertise</h2>
        <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:py-8 justify-start">
        <Programming />
        <Frontend />
        <Backend />
        <Tools />
        <Design />
      </div>
    </motion.div>
  );
};

export default Skills;

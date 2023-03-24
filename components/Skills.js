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
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={skillVariants} className="mx-auto w-full lg:w-9/12 py-8 lg:px-6">
      <div className="flex items-center mb-6">
        <Image src={skills} alt="" className="w-12 mr-3" />
        <h2 className="text-2xl font-bold sm:text-4xl text-title text-center">Skills That I have</h2>
      </div>
      <div className="grid grid-cols-5 gap-10 md:py-8">
        <div className="flex col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
          <button className={`p-2 w-32 text-left border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "programming" ? "border-primary text-primary skillbg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg font-medium`} onClick={() => setActive("programming")}>
            Programming
          </button>
          <button className={`p-2 text-left w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "frontend" ? "border-primary text-primary skillbg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg font-medium`} onClick={() => setActive("frontend")}>
            Frontend
          </button>
          <button className={`p-2 text-left w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "backend" ? "border-primary text-primary skillbg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg font-medium`} onClick={() => setActive("backend")}>
            Backend
          </button>
          <button className={`p-2  text-left w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "tools" ? "border-primary text-primary skillbg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg font-medium`} onClick={() => setActive("tools")}>
            Tools
          </button>
          <button className={`p-2 text-left w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "design" ? "border-primary text-primary skillbg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg font-medium`} onClick={() => setActive("design")}>
            Design Tools
          </button>
        </div>
        <div className="text-center  col-span-full md:col-span-4 md:text-left pt-4 sm:border-t-2 sm:border-slate-700">
          {active === "programming" && <Programming />}
          {active === "frontend" && <Frontend />}
          {active === "backend" && <Backend />}
          {active === "tools" && <Tools />}
          {active === "design" && <Design />}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

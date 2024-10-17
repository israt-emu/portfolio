import Image from "next/image";
import skills from "../assets/images/skills.png";
import c from "../assets/images/c.png";
import cPlus from "../assets/images/c++.png";
import JS from "../assets/images/Javascript-JS.png";
import TS from "../assets/images/ts.png";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import material from "../assets/images/material.png";
import next from "../assets/images/next.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.jpg";
import mongodb from "../assets/images/mongodb.png";
import jwtToken from "../assets/images/jwt.png";
import netlify from "../assets/images/netlify.png";
import firebase from "../assets/images/firebase.png";
import canva from "../assets/images/canva.png";
import figma from "../assets/images/figma.png";
import {motion} from "framer-motion";
const Skills = () => {
  const data = [
    {
      id: 1,
      image: c,
      title: "C",
      description: "JS Programming",
    },
    {
      id: 2,
      image: cPlus,
      title: "C++",
      description: "JS Programming",
    },
    {
      id: 3,
      image: JS,
      title: "JavaScript",
      description: "JS Programming",
    },
    {
      id: 4,
      image: TS,
      title: "Typescript",
      description: "TS Programming",
    },
    {
      id: 5,
      image: HTML,
      title: "HTML",
      description: "",
    },
    {
      id: 6,
      image: CSS,
      title: "CSS",
      description: "",
    },
    {
      id: 7,
      image: react,
      title: "React",
      description: "C Programming",
    },
    {
      id: 8,
      image: next,
      title: "Next JS",
      description: "C Programming",
    },
    {
      id: 9,
      image: redux,
      title: "Redux",
      description: "C Programming",
    },
    {
      id: 10,
      image: bootstrap,
      title: "Bootstrap",
      description: "C Programming",
    },
    {
      id: 11,
      image: tailwind,
      title: "Tailwind",
      description: "C Programming",
    },
    {
      id: 12,
      image: material,
      title: "Material Ui",
      description: "C Programming",
    },
    {
      id: 13,
      image: node,
      title: "Node Js",
      description: "C Programming",
    },
    {
      id: 14,
      image: express,
      title: "Express JS",
      description: "C Programming",
    },
    {
      id: 15,
      image: mongodb,
      title: "MongoDB",
      description: "C Programming",
    },
    {
      id: 16,
      image: jwtToken,
      title: "JWT",
      description: "C Programming",
    },
    {
      id: 17,
      image: netlify,
      title: "Netlify",
      description: "C Programming",
    },
    {
      id: 18,
      image: firebase,
      title: "Firebase",
      description: "C Programming",
    },
    {
      id: 19,
      image: canva,
      title: "Canva",
      description: "C Programming",
    },
    {
      id: 20,
      image: figma,
      title: "Figma",
      description: "C Programming",
    },
  ];
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
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={skillVariants} className="mx-auto w-full lg:w-9/12 py-8 lg:container" id="skill">
      <div className="flex items-center mb-6">
        <Image src={skills} alt="" className="w-12 mr-3" />
        <h2 className="text-xl font-bold sm:text-4xl  text-gradient text-center">My Expertise</h2>
        <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:py-8 justify-start">
        {data?.map((d, i) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 0.3, delay: i * 0.1}}
            variants={{
              visible: {opacity: 1, scale: 1, x: 0, y: 0},
              hidden: {opacity: 0, scale: 0, x: 50, y: 50},
            }}
            key={d?.id}
            className="flex items-center  p-2 text-small_text h-10 shadow-lg rounded skillbg justify-start w-full"
          >
            <Image src={d?.image} alt={d?.description} className="w-6" />
            <p className="ml-2"> {d?.title} </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

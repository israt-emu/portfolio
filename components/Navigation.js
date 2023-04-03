import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/Israt.png";
import {motion} from "framer-motion";
import {AiOutlineMenu} from "react-icons/ai";
import {ImCross} from "react-icons/im";
import React, { useState} from "react";

const Navigation = () => {
  //comment
  const nav = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        delay: 0.4,
      },
    },
  };
  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1},
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeIn",
    },
  };
  const [open, setOpen] = useState(false);
  return (
    <header className="md:mx-8 md:rounded-b md:rounded-r p-2 text-title bg-white/10 backdrop-blur-xl sticky top-0 z-50 font-mono">
      <div className="lg:container flex justify-between h-12 ">
        <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.2,
          }}
          className="flex items-center"
        >
          <Link className="" href="/">
            <Image src={logo} alt="logo" className="w-24" />
          </Link>
        </motion.div>
        <motion.ul initial="hidden" animate="show" variants={nav} className="items-stretch hidden space-x-3 lg:flex backdrop-blur-sm skillbg border border-gray-800 px-4 rounded-md">
          <motion.li variants={item} className="flex items-center">
            <Link href="/#about" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              About
            </Link>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <Link href="/#work" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Experience
            </Link>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <Link href="/#projects" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Projects
            </Link>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <Link href="/#education" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Education
            </Link>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <Link href="/#contact" scroll={true} className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Contact
            </Link>
          </motion.li>
        </motion.ul>
        <div className="flex justify-end items-center lg:hidden ml-auto mr-4">
          <AiOutlineMenu className="text-xl font-bold text-white cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </div>
      {/* ///mobile menu  */}
      <div className={`${open ? "flex" : "hidden"} justify-between backdrop-blur-sm skillbg border border-gray-700 px-4 rounded-md lg:hidden h-full w-9/12 mt-4`}>
        <ul className="items-stretch flex flex-col space-x-3">
          <li className="flex items-center">
            <Link href="/#about" className="flex items-center hover:bg-gray-500/30 pl-4 pt-3 pb-1 rounded">
              About
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#work" className="flex items-center hover:bg-gray-500/30 py-1 rounded">
              Experience
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#projects" className="flex items-center hover:bg-gray-500/30 py-1 rounded">
              Projects
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#education" className="flex items-center hover:bg-gray-500/30 py-1 rounded">
              Education
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#contact" className="flex items-center hover:bg-gray-500/30 py-1 rounded">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-4">
          <ImCross onClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;

import Image from "next/image";
import logo from "../assets/images/Israt2.png";
import { motion } from "framer-motion";

const Navigation = () => {
  const nav = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        // type: "tween",
        // duration: 0.5,
        // ease: "linear",
      },
    },
    // animate: {
    //   transition: {
    //     delayChildren: 0.4,
    //     staggerChildren: 0.1,
    //   },
    // },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeIn",
    },
  };
  return (
    <header className=" p-2 rounded-lg dark:text-gray-100 text-title bg-white/5 backdrop-blur-lg sticky top-0 z-50">
      <div className="container flex justify-between h-12 mx-auto ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.2,
          }}
          className="flex items-center"
        >
          <Image src={logo} alt="logo" className="w-24" />
        </motion.div>
        <motion.ul
          initial="hidden"
          animate="show"
          variants={nav}
          className="items-stretch hidden space-x-3 lg:flex backdrop-blur-sm skillbg border border-gray-700 px-4 rounded-md"
        >
          <motion.li
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{
            //   ease: "easeInOut",
            //   duration: 0.5,
            //   delay: 0.3,
            // }}
            variants={item}
            className="flex items-center"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded"
            >
              About
            </a>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded"
            >
              Experience
            </a>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded"
            >
              Project
            </a>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded"
            >
              Education
            </a>
          </motion.li>
          <motion.li variants={item} className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded"
            >
              Contact
            </a>
          </motion.li>
        </motion.ul>
        <div className="flex items-center">
          <div className="items-center flex-shrink-0 hidden lg:flex ml-3">
            <motion.button
              variants={nav}
              className="px-3 py-1 rounded border-2 border-primary text-primary font-medium"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

import Image from "next/image";
import Link from "next/link";
import myImage from "../assets/images/undraw_dev_focus_re_6iwt.svg";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Banner = () => {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={banner}
      className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-between lg:ml-8 items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
      >
        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-title">
          Ac mattis
          <span className="dark:text-violet-400">senectus</span>erat pharetra
        </h1>
        <p className="mt-6 mb-4 text-lg sm:mb-8 text-small_text">
          Dictum aliquam porta in condimentum ac integer
          <br className="hidden md:inline lg:hidden" />
          turpis pulvinar, est scelerisque ligula sem
        </p>
        <div className="flex items-center mb-4 text-small_text ">
          <Link href="https://www.facebook.com/profile.php?id=100024239881205">
            <BsFacebook className="w-8 mr-2" />
          </Link>
          <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
            <BsLinkedin className="w-8 mr-2" />
          </Link>
          <Link href="https://github.com/israt-emu">
            <BsGithub className="w-8 mr-3" />
          </Link>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-4 py-2 rounded border-2 border-primary text-primary ">
            Explore My Projects
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.5,
        }}
        className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      >
        <Image src={myImage} alt="" className="object-contain w-3/5" />
      </motion.div>
    </motion.div>
  );
};

export default Banner;

import Image from "next/image";
import Link from "next/link";
import myImage from "../assets/images/undraw_dev_focus_re_6iwt.svg";
import {BsFacebook, BsLinkedin, BsGithub} from "react-icons/bs";
import {motion} from "framer-motion";

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
    <motion.div variants={banner} className="container flex flex-col-reverse justify-center md:p-6 mx-auto py-4 lg:flex-row lg:justify-between lg:ml-8 items-center h-screen">
      <motion.div
        initial={{opacity: 0, y: 80}}
        animate={{opacity: 1, y: 0}}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="flex flex-col justify-center md:p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-8 lg:mt-0"
      >
        <p className="text-title">Hi, my name is</p>
        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-title">Israt Jahan</h1>
        <p className="mt-6 mb-2 text-lg text-small_text flex justify-center">
          Particularly I’m interested in learning and staying <br className="hidden lg:flex" /> current about programming and technological advancements. Also, I enjoy creating things
          <br className="hidden lg:flex" /> that live on the internet.
        </p>
        <p className="mb-3 text-small_text">
          <span className="text-xl text-title">2.5 </span> years of Experience
        </p>
        <div className="flex items-center mb-4 text-small_text ">
          <Link href="https://www.facebook.com/profile.php?id=100024239881205" target="blank">
            <BsFacebook className="w-8 mr-2" />
          </Link>
          <Link href="https://www.linkedin.com/in/israt-jahan-462788222/" target="blank">
            <BsLinkedin className="w-8 mr-2" />
          </Link>
          <Link href="https://github.com/israt-emu" target="blank">
            <BsGithub className="w-8 mr-3" />
          </Link>
        </div>
        <div className="items-center flex-shrink-0 lg:flex">
          <button className="px-4 py-2 rounded border-2 border-primary text-primary ">Explore My Projects</button>
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.5,
        }}
        className="flex items-center justify-center md:p-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 sm:mb-6 lg:mb-0"
      >
        <Image width={400} src={myImage} alt="" className="object-contain lg:w-3/5 sm:w-2/5 mt-8" />
      </motion.div>
    </motion.div>
  );
};

export default Banner;

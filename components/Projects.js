import Image from "next/image";
import Link from "next/link";
import {BiLinkExternal} from "react-icons/bi";
import {BsGithub} from "react-icons/bs";
import library from "../assets/images/library.png";
import travel from "../assets/images/tour.png";
import lipstick from "../assets/images/lipstick.png";
import happyMom from "../assets/images/hapy-mom-main.png";
import projects from "../assets/images/projects.png";
import {motion} from "framer-motion";
const Projects = () => {
  const projectVariants = {
    offscreen: {
      y: 200,
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
    <div className="md:w-9/12 mx-auto py-8">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold sm:text-4xl text-title mb-4">Some Projects I’ve Built</h1>
      </div>
      {/* //library  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex flex-col lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm">
        <Image src={library} alt="" className="lg:w-1/2 mb-4 lg:mb-0 border border-gray-700" />
        <div>
          <h1 className="text-title text-2xl text-right font-semibold">Library Management Website</h1>
          <p className="bg-white/5 p-4 text-small_text ring-1 ring-slate-50/40 rounded ml-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex flex-wrap items-center text-primary text-sm font-semibold justify-end mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">JWT</span>
            <span className="mr-3">Redux</span>
            <span className="mr-3">Socket io</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* lipstick */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex flex-col-reverse lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm">
        <div>
          <h1 className="text-title text-2xl text-left font-semibold">Lipstick Selling Website</h1>
          <p className="bg-white/5 p-4 text-small_text ring-1 ring-slate-50/40 rounded mr-3 mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex items-center text-primary text-sm font-semibold justify-start mt-3 flex-wrap">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        <Image src={lipstick} alt="" className="lg:w-1/2 mb-4 lg:mb-0" />
      </motion.div>
      {/* travel  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex flex-col lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm">
        <Image src={travel} alt="" className="lg:w-1/2 mb-4 lg:mb-0" />
        <div>
          <h1 className="text-title text-2xl text-right font-semibold">Tour Management Website</h1>
          <p className="bg-white/5 p-4 text-small_text ring-1 ring-slate-50/40 rounded ml-3 mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex flex-wrap items-center text-primary text-sm font-semibold justify-end mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* happy mom  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true}} variants={projectVariants} className="flex flex-col-reverse lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-2xl  backdrop-blur-sm">
        <div>
          <h1 className="text-title text-2xl text-left font-semibold">Pregnancy Care Website</h1>
          <p className="bg-white/5 p-4 text-small_text ring-1 ring-slate-50/40 rounded mr-3 mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex flex-wrap items-center text-primary text-sm font-semibold justify-start mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        <Image src={happyMom} alt="" className="lg:w-1/2 mb-4 lg:mb-0" />
      </motion.div>
    </div>
  );
};

export default Projects;

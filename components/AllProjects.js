import {motion} from "framer-motion";
import Image from "next/image";
import projects from "../assets/images/projects.png";
import happyMom from "../assets/images/hapy-mom-main.png";
import tech from "../assets/images/tech.png";
import dashboard from "../assets/images/dashboard.png";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {BiLinkExternal} from "react-icons/bi";
const AllProjects = () => {
  const projectVariants = {
    offscreen: {
      y: 190,
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
    <div className="md:w-9/12 mx-auto py-8 lg:container">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex items-center">
        <div className="flex items-center w-full">
          <Image src={projects} className="w-6 sm:w-8 mr-2" alt="" />
          <h1 className="text-left text-xl font-bold sm:text-4xl text-gradient">Some Projects I’ve Built</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
        </div>
      </motion.div>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true}} variants={projectVariants} className="grid lg:grid-cols-2 gap-6 items-center justify-center my-16 ">
        {/* happy mom  */}
        <div className="flex flex-col justify-center p-6 md:p-8 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-xl  backdrop-blur-sm h-full">
          <Image src={happyMom} alt="" className="object-contain mb-4 border border-gradient" />
          <h1 className="text-purple-400 text-md font-semibold">Frontend</h1>
          <h1 className="text-title text-2xl text-left font-semibold">Pregnancy Care Website</h1>

          <div className="flex flex-wrap items-center text-purple-400 text-sm font-semibold justify-start mt-3 font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
          </div>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu/happy-mom" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>

            <Link href="https://happy-mom-1027a.web.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        {/* tech world  */}
        <div className="flex flex-col justify-center p-6 md:p-8 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-xl  backdrop-blur-sm h-full">
          <Image src={tech} alt="" className="object-contain mb-4 border border-gradient" />
          <h1 className="text-green-400 text-md font-semibold">Frontend</h1>
          <h1 className="text-title text-2xl text-left font-semibold">Technology learning course provided website</h1>

          <div className="flex flex-wrap items-center text-green-400 text-sm font-semibold justify-start mt-3 font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">CSS</span>
            <span className="mr-3">Bootstrap</span>
          </div>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu/tech-world" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>

            <Link href="https://tech-world.netlify.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* //  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true}} variants={projectVariants} className="grid lg:grid-cols-2 gap-6 items-center justify-center my-16 ">
        {/* tech world  */}
        <div className="flex flex-col justify-center p-6 md:p-8 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-xl  backdrop-blur-sm h-full">
          <Image src={dashboard} alt="" className="object-contain mb-4 border border-gradient" />
          <h1 className="text-violet-700 text-md font-semibold">FullStack</h1>
          <h1 className="text-title text-2xl text-left font-semibold">Data Visualization Dashboard</h1>

          <div className="flex flex-wrap items-center text-violet-700 text-sm font-semibold justify-start mt-3 font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">Material UI</span>
            <span className="mr-3">Node JS</span>
            <span className="mr-3">MongoDB</span>
          </div>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu/task-1" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu/task1-server" target="blank">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>

            <Link href="https://data-visualization-dashboard-task.netlify.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AllProjects;

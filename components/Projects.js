import Image from "next/image";
import Link from "next/link";
import {BiLinkExternal} from "react-icons/bi";
import {BsGithub} from "react-icons/bs";
import {motion} from "framer-motion";
import projectsData from "/projects.json";
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
    <div className="md:w-9/12 mx-auto py-8 lg:container" id="projects">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex items-center">
        <div className="flex items-center w-full">
          {/* <Image src={projects} className="w-6 sm:w-8 mr-2" alt="" /> */}
          <span className="text-4xl">👩‍💻</span>
          <h1 className="text-left text-xl font-bold sm:text-4xl text-gradient ml-2">Some Projects I’ve Built</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
        </div>
      </motion.div>

      {projectsData?.slice(0, 3)?.map((project, i) => (
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className={`flex flex-col ${project?.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-center my-16 p-6 md:p-10 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-2xl  backdrop-blur-sm w-full`} key={i}>
          <div className="lg:w-1/2">
            <Image src={project?.image} alt="" className="w-full mb-4 lg:mb-0 border border-gray-700" width={600} height={280} />
          </div>
          <div className={`lg:w-1/2 w-full ${project?.id % 2 === 0 ? "lg:mr-3" : "lg:ml-3"}`}>
            <h1 style={{color: project?.color}} className=" text-md font-semibold sm:text-right">
              {project?.type}
            </h1>
            <h1 className="text-title text-2xl sm:text-right font-semibold">{project?.title}</h1>
            <p className={`bg-slate-400/5 p-4 ring-1 ring-slate-50/20 text-small_text rounded mt-4 hidden sm:flex font-serif`}>{project?.description}</p>
            <p style={{color: project?.color}} className={`flex flex-wrap items-center text-sm font-semibold sm:justify-end mt-3 font-mono`}>
              {project?.techStack?.map((t, i) => (
                <span className="mr-3 capitalize" key={i}>
                  {t}
                </span>
              ))}
            </p>
            <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
              <Link href={project?.frontend} target="blank">
                <BsGithub className="text-lg mr-3" title="Frontend Code" />
              </Link>
              {project?.backend && (
                <Link href={project?.backend} target="blank">
                  <BsGithub className="text-lg mr-3" title="Backend Code" />
                </Link>
              )}
              <Link href={project?.live} target="blank">
                <BiLinkExternal className="text-lg" title="Live Site" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="text-center">
        <Link href="/projects" className="px-4 py-2 btn-bg text-dark_blue font-bold">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Projects;

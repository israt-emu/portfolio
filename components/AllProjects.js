import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {BiLinkExternal} from "react-icons/bi";
import projects from "/projects.json";
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
          <span className="text-4xl">👩‍💻</span>
          <h1 className="text-left text-xl font-bold sm:text-4xl text-gradient ml-2">Projects I’ve Done</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
        </div>
      </motion.div>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true}} variants={projectVariants} className="grid lg:grid-cols-2 gap-6 items-center justify-center my-16 ">
        {projects?.map((p, i) => (
          <div className="flex flex-col justify-center p-6 md:p-8 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-xl  backdrop-blur-sm h-full" key={i}>
            <Image src={p?.image} alt="" className="object-contain w-full mb-4 border border-gray-700" width={500} height={280} />
            <h1 style={{color: p?.color}} className=" text-md font-semibold">
              {p?.type}
            </h1>
            <h1 className="text-title text-2xl text-left font-semibold">{p?.title}</h1>

            <div style={{color: p?.color}} className="flex flex-wrap items-center text-sm font-semibold justify-start mt-3 font-mono">
              {p?.techStack?.map((t, i) => (
                <span className="mr-3 capitalize" key={i}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
              <Link href={p?.frontend} target="blank">
                <BsGithub className="text-lg mr-3" title="Frontend Code" />
              </Link>
              {p?.backend && (
                <Link href={p?.backend} target="blank">
                  <BsGithub className="text-lg mr-3" title="Backend Code" />
                </Link>
              )}
              <Link href={p?.live} target="blank">
                <BiLinkExternal className="text-lg" title="Live Site" />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllProjects;

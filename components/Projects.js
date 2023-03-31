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
    <div className="md:w-9/12 mx-auto py-8 lg:container" id="projects">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex items-center">
        <div className="flex items-center w-full">
          <Image src={projects} className="w-6 sm:w-8 mr-2" alt="" />
          <h1 className="text-left text-xl font-bold sm:text-4xl text-gradient">Some Projects I’ve Built</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
        </div>
      </motion.div>
      {/* //library  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex flex-col lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-2xl  backdrop-blur-sm">
        <Image src={library} alt="" className="lg:w-1/2 mb-4 lg:mb-0 border border-gray-700" />
        <div>
          <h1 className="text-teal-600 text-md font-semibold sm:text-right">Fullstack</h1>
          <h1 className="text-title text-2xl sm:text-right font-semibold">Library Management Website</h1>
          <p className="bg-slate-400/5 p-4 ring-1 ring-slate-50/20 text-small_text rounded ml-3 mt-4 hidden sm:flex">
            A library managemnet website where user can search & borrow book,request a new book,add articles.Admin can manage all user & all books and send real time notification to all user.Analytics page includes top borrowed & requested books and top books and also monthly analytics of borrowed books.This site includes jwt Token based authentication.
          </p>
          <p className="flex flex-wrap items-center text-teal-600 text-sm font-semibold sm:justify-end mt-3 font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">JWT</span>
            <span className="mr-3">Redux</span>
            <span className="mr-3">Socket io</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
            <Link href="https://github.com/israt-emu/Library-management-frontend" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu/Library-management-backend" target="blank">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://amathlib.netlify.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* lipstick */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex flex-col-reverse lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-2xl  backdrop-blur-sm">
        <div>
          <h1 className="text-pink-200 text-md font-semibold">Fullstack</h1>
          <h1 className="text-title text-2xl text-left font-semibold">Lipstick Selling Website</h1>
          <p className="bg-slate-400/5 p-4 ring-1 ring-slate-50/20 text-small_text rounded mr-3 mt-4 hidden sm:flex">
            A Lipstick selling website for buyer. This website includes user dashboard from where buyer can see his/her ordered product , review this site. Also, there is an admin dashboard from where admin can manage all product, make admin other users. This site includes OAuth and Email-Password based authentication.
          </p>
          <p className="flex items-center text-pink-200 text-sm font-semibold justify-start mt-3 flex-wrap font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu/bloom-lips" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu/bloom-lips-server" target="blank">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://bloom-lips.web.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        <Image src={lipstick} alt="" className="lg:w-1/2 mb-4 lg:mb-0" />
      </motion.div>
      {/* travel  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={projectVariants} className="flex flex-col lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-2xl  backdrop-blur-sm">
        <Image src={travel} alt="" className="lg:w-1/2 mb-4 lg:mb-0" />
        <div>
          <h1 className="text-blue-500 text-md font-semibold sm:text-right">Fullstack</h1>
          <h1 className="text-title text-2xl sm:text-right font-semibold">Tour Management Website</h1>
          <p className="bg-slate-400/5 p-4 ring-1 ring-slate-50/20 text-small_text rounded ml-3 mt-4 hidden sm:flex"> A travel agency website for arranging tour. People can book any tour to any place.Also,there is an admin dashboard & user dashboard. User can manage his/her booked tour. Admin can manage all tour and add new tour plan.This site includes OAuth based authentication.</p>
          <p className="flex flex-wrap items-center text-blue-500 text-sm font-semibold sm:justify-end mt-3 font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
            <Link href="https://github.com/israt-emu/travely" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu/travely-server" target="blank">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://travely-217e4.web.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* happy mom  */}
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true}} variants={projectVariants} className="flex flex-col-reverse lg:flex-row items-center justify-center my-16 p-6 md:p-10 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-2xl  backdrop-blur-sm">
        <div>
          <h1 className="text-purple-400 text-md font-semibold">Frontend</h1>
          <h1 className="text-title text-2xl text-left font-semibold">Pregnancy Care Website</h1>
          <p className="bg-slate-400/5 p-4 ring-1 ring-slate-50/20 text-small_text rounded mr-3 mt-4 hidden sm:flex">A frontend health care website specially for pregnant women. This websites includes OAuth based login, Email & Password based signup, Private routing & Beautiful Design. </p>
          <p className="flex flex-wrap items-center text-purple-400 text-sm font-semibold justify-start mt-3 font-mono">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu/happy-mom" target="blank">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>

            <Link href="https://happy-mom-1027a.web.app/" target="blank">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        <Image src={happyMom} alt="" className="lg:w-1/2 mb-4 lg:mb-0" />
      </motion.div>
      <div className="text-center">
        <button className="px-4 py-2 rounded border-2 text-small_text  hover:bg-hover_color border-gradient">View More</button>
      </div>
    </div>
  );
};

export default Projects;

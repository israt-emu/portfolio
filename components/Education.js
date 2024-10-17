import Image from "next/image";
import nstu_logo from "../assets/images/nstu.png";
import sa_logo from "../assets/images/sa.jpg";
import nstu from "../assets/images/fountain_pen.jpg";
import study from "../assets/images/study.png";
import sa from "../assets/images/sa-image.jpg";
import {BiLinkExternal} from "react-icons/bi";
import {motion} from "framer-motion";
import Link from "next/link";
const Education = () => {
  return (
    <div className="sm:w-9/12 mx-auto py-16 lg:container" id="education">
      <motion.div
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.1}}
        transition={{duration: 0.6, delay: 0.5}}
        variants={{
          visible: {opacity: 1, y: 0},
          hidden: {opacity: 0, y: 50},
        }}
        className="flex items-center"
      >
        <Image src={study} alt="" className="w-12 mr-2" />
        <h1 className="text-xl font-bold sm:text-4xl text-gradient mr-3">Where I’ve Studied</h1>
        <hr className="border-t border-gray-700 w-1/5 mt-2" />
      </motion.div>
      <div className="flex flex-col pt-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.8}}
          variants={{
            visible: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: 70},
          }}
          className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-12 items-center"
        >
          <div className="flex items-center bg-slate-600/10 ring-1 ring-violet-200/10 rounded-lg  backdrop-blur-sm">
            {" "}
            <Image src={nstu_logo} alt="" className="w-20 mr-3" />
            <div>
              <h1 className="sm:text-xl text-title">MSc. In Applied Mathematics</h1>
              <p className="text-sm text-small_text font-mono">NSTU | March 2023-June 2024</p>
              <Link href="https://nstu.edu.bd/">
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </div>
          </div>
          <Image src={nstu} alt="" className="w-1/2 hidden lg:flex" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.8}}
          variants={{
            visible: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: 70},
          }}
          className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-12 items-center mt-4"
        >
          <div className="flex items-center bg-slate-600/10 ring-1 ring-violet-200/10 rounded-lg  backdrop-blur-sm">
            {" "}
            <Image src={nstu_logo} alt="" className="w-20 mr-3" />
            <div>
              <h1 className="sm:text-xl text-title">BSc. In Applied Mathematics</h1>
              <p className="text-sm text-small_text font-mono">NSTU | January 2018-March 2023</p>
              <Link href="https://nstu.edu.bd/">
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </div>
          </div>
          <Image src={nstu} alt="" className="w-1/2 hidden lg:flex" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 1}}
          variants={{
            visible: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: 70},
          }}
          className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-12 justify-between items-center my-4"
        >
          <div className="flex items-center bg-slate-600/10 ring-1 ring-violet-200/10 rounded-lg  backdrop-blur-sm py-3 pl-2">
            <Image src={sa_logo} alt="" className="w-20 mr-3" />
            <div>
              <h1 className="sm:text-xl text-title">Higher Secondary School Certificate</h1>
              <p className="text-sm text-small_text font-mono">Chowmuhoni Govt. S.A. College | April 2015-June 2017</p>
              <Link href="https://www.cgsacollege.edu.bd/">
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </div>
          </div>
          <Image src={sa} alt="" className="w-1/2 hidden lg:flex" />
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

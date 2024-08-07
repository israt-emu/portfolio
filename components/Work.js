import Image from "next/image";
import Link from "next/link";
import {TbFileCertificate} from "react-icons/tb";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";
import zivaka from "../assets/images/zivaka.png";
import kws from "../assets/images/kws.png";
import {motion} from "framer-motion";
import {useState} from "react";
import {FaMapMarkerAlt} from "react-icons/fa";

const Work = () => {
  const [first, setfirst] = useState(true);
  const [sec, setSec] = useState(false);

  return (
    <div className="w-full sm:w-4/5 lg:w-9/12 flex flex-col justify-center py-20 mx-auto text-title lg:container" id="work">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.4}}
        variants={{
          visible: {opacity: 1, y: 0},
          hidden: {opacity: 0, y: 100},
        }}
        className="flex items-center mb-4"
      >
        <span className="text-4xl">💼</span>
        <h1 className="text-xl font-bold sm:text-4xl  text-gradient">Where I have worked</h1>
        <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
      </motion.div>
      {/* //accordion  */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.7}}
        variants={{
          visible: {opacity: 1, y: 0},
          hidden: {opacity: 0, y: 100},
        }}
        className="sm:px-2 py-6"
      >
        <div className="tab w-full overflow-hidden">
          <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
          {/* ///header  */}
          <div className={`flex items-center justify-between rounded ${first ? "bg-secondary" : "bg-primary"} `}>
            <label className="flex items-center text-lg p-5 leading-normal cursor-pointer font-bold" for="tab-multi-one">
              Full Stack Developer @KWS
            </label>
            <div className="flex items-center">
              <div className="font-bold font-mono mr-3 text-lg hidden lg:flex">Sep 2023-Apr 2024</div>
              <button className={`mr-4 text-2xl ${first ? "hidden" : "block"}`} onClick={() => setfirst(true)}>
                <AiFillPlusCircle />
              </button>
              <button className={`mr-4 text-2xl ${first ? "block" : "hidden"}`} onClick={() => setfirst(false)}>
                <AiFillMinusCircle />
              </button>
            </div>
          </div>
          {/* content  */}
          <div className={`tab-content transition-all duration-500  overflow-hidden mt-4 rounded bg-dark_blue  leading-normal ${first ? "flex" : "hidden"}  flex-col-reverse md:flex-row md:items-center justify-between px-8 py-8 `}>
            <div className="md:mr-8">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-400 text-lg" />
                <h1>Dhaka, Bangladesh</h1>
              </div>
              {/* <div className="flex items-center  mt-2">
                <Link href="https://drive.google.com/file/d/120JRpeq6LXTvYicpHbfQN4LCZRPNNT7o/view?usp=share_link" target="blank">
                  <TbFileCertificate className="text-xl text-purple-400 mr-2" />
                </Link>
                <h1>Certification</h1>
              </div> */}
              <h1 className="mt-2 mb-4">Worked with a team of one frontend & one backend developer to build the backend of NFT selling website and also integrate smart contract using ether.js and crossmint.</h1>
              <div className="flex items-center text-sm font-mono font-medium flex-wrap">
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">JavaScript</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">React</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Tailwind</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Nest JS</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Node JS</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Express JS</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">MongoDb</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full my-2 lg:my-0">Ether</span>
              </div>
            </div>
            <Image src={kws} className="w-16 mb-3 md:mb-0" alt="KWS Image" />
          </div>
          <div className={`flex items-center mt-5 justify-between rounded ${first ? "bg-secondary" : "bg-primary"} `}>
            <label className="flex items-center text-lg p-5 leading-normal cursor-pointer font-bold" for="tab-multi-one">
              Full Stack Developer @Zivaka LLP
              {/* <Link href="https://www.facebook.com/zivaka.llp" target="blank">
                <div className="flex items-center">
                  <h3 className="font-semibold">Zivaka LLP</h3>
                </div>
              </Link> */}
            </label>
            <div className="flex items-center">
              <div className="font-bold font-mono mr-3 text-lg hidden lg:flex">Dec 2021-Dec 2022</div>
              <button className={`mr-4 text-2xl ${sec ? "hidden" : "block"}`} onClick={() => setSec(true)}>
                <AiFillPlusCircle />
              </button>
              <button className={`mr-4 text-2xl ${sec ? "block" : "hidden"}`} onClick={() => setSec(false)}>
                <AiFillMinusCircle />
              </button>
            </div>
          </div>
          {/* content  */}
          <div className={`tab-content transition-all duration-500  overflow-hidden mt-4 rounded bg-dark_blue  leading-normal ${sec ? "flex" : "hidden"}  flex-col-reverse md:flex-row md:items-center justify-between px-8 py-8 `}>
            <div className="md:mr-8">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-400 text-lg" />
                <h1>Kolkata, West Bengal, India</h1>
              </div>
              <div className="flex items-center  mt-2">
                <Link href="https://drive.google.com/file/d/120JRpeq6LXTvYicpHbfQN4LCZRPNNT7o/view?usp=share_link" target="blank">
                  <TbFileCertificate className="text-xl text-purple-400 mr-2" />
                </Link>
                <h1>Certification</h1>
              </div>
              <h1 className="mt-2 mb-4">Worked with a team of three frontend & two backend developer to build a e-commerce website and a question bank website.</h1>
              <div className="flex items-center text-sm font-mono font-medium flex-wrap">
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">JavaScript</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">React</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Bootstrap</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">MUI</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Node JS</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full mr-2 my-2 lg:my-0">Express JS</span>
                <span className="px-3 py-1 bg-dark_blue2 rounded-full my-2 lg:my-0">MongoDb</span>
              </div>
            </div>
            <Image src={zivaka} className="w-16 mb-3 md:mb-0" alt="Zivaka Image" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;

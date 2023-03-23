import Image from "next/image";
import Link from "next/link";
import {TbFileCertificate} from "react-icons/tb";
import zivaka from "../assets/images/zivaka.png";
import intern from "../assets/images/internship.png";
import {motion} from "framer-motion";

const Work = () => {
  const workVariants = {
    offscreen: {
      y: 100,
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
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{once: true, amount: 0.1}} variants={workVariants} className="sm:4/5 lg:w-9/12 flex flex-col justify-center px-6 py-20 mx-auto text-title container">
      <div className="flex items-center">
        <Image src={intern} alt="" className="w-14 mr-3" />
        <h1 className="text-2xl font-bold sm:text-4xl text-title mb-4">Where I have worked</h1>
      </div>

      <div className="py-12 mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-0 before:bg-primary">
              <Image src={zivaka} className="w-8 h-8 mr-3 mb-2" alt="Zivaka Image" />
              <Link href="https://www.facebook.com/zivaka.llp" target="blank">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">Zivaka LLP</h3>
                </div>
              </Link>
              <span className="text-xs font-semibold tracking-wider uppercase text-small_text ">Full Stack Developer</span>
              <p className="text-xs font-semibold tracking-wider uppercase text-small_text mb-2">Dec 2021 - Aug 2022</p>
              <div className="flex items-center text-primary">
                <Link href="https://drive.google.com/file/d/120JRpeq6LXTvYicpHbfQN4LCZRPNNT7o/view?usp=share_link" target="blank">
                  <TbFileCertificate className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary">
                <p className="mt-3">Worked with a team of three designers & two developer to build a e-commerce website and a question bank website </p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary">
                <p className="mt-3">Re-organized something to make it work better. Identified a problem and solved it.</p>
              </div>
              <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-primary">
                <p className="mt-3">Come up with a new idea that improved things. Developed or implemented new procedures or systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

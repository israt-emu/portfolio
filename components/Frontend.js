import Image from "next/image";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import material from "../assets/images/material.png";
import next from "../assets/images/next.png";

const Frontend = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 w-full ">
      <div className="flex justify-start items-center bg-small_bg p-2 text-small_text h-10 shadow-lg rounded skillbg">
        <Image src={HTML} alt="c programming" className="w-6" />
        <p className="ml-3"> HTML5</p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text mx-3 h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={CSS} alt="c programming" className="w-6" />
        <p className="ml-3"> CSS </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={react} alt="c programming" className="w-6" />
        <p className="ml-3"> React </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={next} alt="c programming" className="w-6 h-6 rounded-full" />
        <p className="ml-3"> Next JS </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={redux} alt="c programming" className="w-6" />
        <p className="ml-3"> Redux </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={tailwind} alt="c programming" className="w-6" />
        <p className="ml-3"> Tailwind CSS </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={bootstrap} alt="c programming" className="w-6" />
        <p className="ml-3"> Bootstrap </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={material} alt="c programming" className="w-6" />
        <p className="ml-3"> Material </p>
      </div>
    </div>
  );
};

export default Frontend;

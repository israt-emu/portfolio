import Image from "next/image";
import node from "../assets/images/node.png";
import express from "../assets/images/express.jpg";
import mongodb from "../assets/images/mongodb.png";
const Backend = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 w-full ">
      <div className="flex justify-start items-center bg-small_bg p-2 text-small_text h-10 shadow-lg rounded skillbg">
        <Image src={node} alt="c programming" className="w-6 h-6 rounded-full" />
        <p className="ml-3"> Node JS</p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text mx-3 h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={express} alt="c programming" className="w-7 h-6 rounded-full" />
        <p className="ml-3"> Express JS </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={mongodb} alt="c programming" className="w-3" />
        <p className="ml-3"> MongoDB </p>
      </div>
    </div>
  );
};

export default Backend;

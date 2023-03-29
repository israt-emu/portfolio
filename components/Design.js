import Image from "next/image";
import canva from "../assets/images/canva.png";
import figma from "../assets/images/figma.png";

const Design = () => {
  return (
    <>
      <div className="flex justify-start items-center bg-small_bg p-2 text-small_text h-10 shadow-lg rounded skillbg w-full">
        <Image src={canva} alt="c programming" className="w-6 h-6 rounded-full" />
        <p className="ml-3">Canva</p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg w-full">
        <Image src={figma} alt="c programming" className="w-7 h-6 rounded-full" />
        <p className="ml-3"> Figma </p>
      </div>
    </>
  );
};

export default Design;

import c from "../assets/images/c.png";
import cPlus from "../assets/images/c++.png";
import JS from "../assets/images/Javascript-JS.png";
import Image from "next/image";

const Programming = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-5 w-full ">
      <div className="flex  items-center  p-2 text-small_text h-10 shadow-lg rounded skillbg justify-start">
        <Image src={c} alt="c programming" className="w-6" />
        <p className="ml-3"> C </p>
      </div>
      <div className="flex skillbg justify-start items-center p-2 text-small_text mx-3 h-10 bg-small_bg shadow-lg rounded">
        <Image src={cPlus} alt="c programming" className="w-6" />
        <p className="ml-3"> C++ </p>
      </div>
      <div className="flex skillbg justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded">
        <Image src={JS} alt="c programming" className="w-6" />
        <p className="ml-3"> JavaScript </p>
      </div>
    </div>
  );
};

export default Programming;

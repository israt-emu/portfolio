import c from "../assets/images/c.png";
import cPlus from "../assets/images/c++.png";
import JS from "../assets/images/Javascript-JS.png";
import Image from "next/image";

const Programming = () => {
  return (
    <>
      <div className="flex items-center  p-2 text-small_text h-10 shadow-lg rounded skillbg justify-start w-full">
        <Image src={c} alt="c programming" className="w-6" />
        <p className="ml-3"> C </p>
      </div>
      <div className="flex skillbg justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded w-full">
        <Image src={cPlus} alt="c programming" className="w-6" />
        <p className="ml-3"> C++ </p>
      </div>
      <div className="flex skillbg justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded w-full">
        <Image src={JS} alt="c programming" className="w-6" />
        <p className="ml-3"> JavaScript </p>
      </div>
    </>
  );
};

export default Programming;

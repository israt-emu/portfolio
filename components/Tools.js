import Image from "next/image";
import vsCode from "../assets/images/vsCode.png";
import jwtToken from "../assets/images/jwt.png";
import netlify from "../assets/images/netlify.png";
import firebase from "../assets/images/firebase.png";

const Tools = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 w-full ">
      <div className="flex justify-start items-center bg-small_bg p-2 text-small_text h-10 shadow-lg rounded skillbg">
        <Image src={vsCode} alt="c programming" className="w-6 h-6 rounded-full" />
        <p className="ml-3">VS Code</p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text mx-3 h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={jwtToken} alt="c programming" className="w-7 h-6 rounded-full" />
        <p className="ml-3">JWT </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={netlify} alt="c programming" className="w-3" />
        <p className="ml-3"> Netlify </p>
      </div>
      <div className="flex justify-start items-center p-2 text-small_text h-10 bg-small_bg shadow-lg rounded skillbg">
        <Image src={firebase} alt="c programming" className="w-3" />
        <p className="ml-3"> Firebase </p>
      </div>
    </div>
  );
};

export default Tools;

import Image from "next/image";
import nstu_logo from "../assets/images/nstu.png";
import sa_logo from "../assets/images/sa.jpg";
import nstu from "../assets/images/fountain_pen.jpg";
import sa from "../assets/images/sa image.jpg";
import {BiLinkExternal} from "react-icons/bi";
import Link from "next/link";
const Education = () => {
  return (
    <div className="w-9/12 mx-auto py-8">
      <div className="flex items-center">
        <h1 className="text-4xl font-semibold text-title mr-3">Where I’ve Studied</h1>
        <hr className="border border-slate-700 w-1/5" />
      </div>
      <div className="flex flex-col pt-8">
        <div className="grid grid-cols-2 md:gap-12 items-center">
          <div className="flex items-center">
            {" "}
            <Image src={nstu_logo} alt="" className="w-20 mr-3" />
            <div>
              <h1 className="text-xl text-title">BSc. In Applied Mathematics</h1>
              <p className="text-sm text-small_text">NSTU | January 2018-March 2023</p>
              <Link href="https://nstu.edu.bd/">
                {" "}
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </div>
          </div>
          <Image src={nstu} alt="" className="w-1/2" />
        </div>
        <div className="grid grid-cols-2 md:gap-12 items-center my-4">
          <div className="flex items-center">
            {" "}
            <Image src={sa_logo} alt="" className="w-20 mr-3" />
            <div>
              <h1 className="text-xl text-title">Higher Secondary School Certificate</h1>
              <p className="text-sm text-small_text">Chowmuhoni Govt. S.A. College | April 2015-June 2017</p>
              <Link href="https://www.cgsacollege.edu.bd/">
                {" "}
                <BiLinkExternal className="text-small_text text-lg mt-2" />
              </Link>
            </div>
          </div>
          <Image src={sa} alt="" className="w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Education;

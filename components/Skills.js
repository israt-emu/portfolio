import {useState} from "react";
import Programming from "./Programming";

const Skills = () => {
  const [active, setActive] = useState("programming");
  return (
    <div className="container mx-auto w-9/12 h-screen py-8 px-6">
      <div className="">
        <h2 className="text-2xl font-bold sm:text-4xl text-title mb-4 text-left">Skills That I have</h2>
      </div>
      <div className="grid grid-cols-5 gap-10 md:py-8">
        <div className="flex justify-center col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
          <button className={`p-2 w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "programming" ? "border-primary text-primary bg-small_bg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg`} onClick={() => setActive("programming")}>
            Programming
          </button>
          <button className={`p-2 w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "frontend" ? "border-primary text-primary bg-small_bg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg`} onClick={() => setActive("frontend")}>
            Frontend
          </button>
          <button className={`p-2 w-32 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${active === "backend" ? "border-primary text-primary bg-small_bg" : "border-gray-500 text-gray-400"} hover:text-primary hover:bg-small_bg`} onClick={() => setActive("backend")}>
            Backend
          </button>
        </div>
        <div className="text-center  col-span-full md:col-span-4 md:text-left pt-4 border-t-2 border-slate-700">{active === "programming" && <Programming />}</div>
      </div>
    </div>
  );
};

export default Skills;

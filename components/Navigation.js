import Image from "next/image";
import logo from "../assets/images/Israt2.png";

const Navigation = () => {
  return (
    <header className=" p-2 rounded-lg dark:text-gray-100 text-title bg-white/5 backdrop-blur-lg sticky top-0 z-50">
      <div className="container flex justify-between h-12 mx-auto ">
        <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-24" />
        </div>
        <ul className="items-stretch hidden space-x-3 lg:flex backdrop-blur-sm skillbg border border-gray-700 px-4 rounded-md">
          <li className="flex items-center">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              About
            </a>
          </li>
          <li className="flex items-center">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Experience
            </a>
          </li>
          <li className="flex items-center">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Project
            </a>
          </li>
          <li className="flex items-center">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Education
            </a>
          </li>
          <li className="flex items-center">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 hover:bg-gray-500/30 py-1 rounded">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="items-center flex-shrink-0 hidden lg:flex ml-3">
            <button className="px-3 py-1 rounded border-2 border-primary text-primary font-medium">Resume</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

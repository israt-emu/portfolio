import Image from "next/image";
import logo from "../assets/images/Israt.png";

const Navigation = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 text-title">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center">
          <Image src={logo} alt="logo" className="w-28" />
        </div>
        <div className="flex items-center">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4">
                About
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4">
                Experience
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 ">
                Project
              </a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 ">
                Education
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex ml-3">
            <button className="px-4 py-2 rounded border-2 border-primary text-primary ">Resume</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

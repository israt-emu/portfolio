import Image from "next/image";
import Link from "next/link";
import {BiLinkExternal} from "react-icons/bi";
import {BsGithub} from "react-icons/bs";
import library from "../assets/images/library.png";
import travel from "../assets/images/tour.png";
import lipstick from "../assets/images/lipstick.png";
import happyMom from "../assets/images/hapy-mom-main.png";
const Projects = () => {
  return (
    <div className="w-9/12 mx-auto py-8">
      <h1 className="text-title text-4xl text-center">Some Projects I’ve Built</h1>
      {/* //library  */}
      <div className="flex items-center justify-center my-16">
        <Image src={library} alt="" className="w-1/2 border border-gray-700" />
        <div>
          <h1 className="text-title text-2xl text-right font-semibold">Library Management Website</h1>
          <p className="bg-small_bg p-4 text-small_text border border-gray-700 ml-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex items-center text-small_text text-sm font-semibold justify-end mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">JWT</span>
            <span className="mr-3">Redux</span>
            <span className="mr-3">Socket io</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </div>
      {/* lipstick */}
      <div className="flex items-center justify-center my-20">
        <div>
          <h1 className="text-title text-2xl text-left font-semibold">Lipstick Selling Website</h1>
          <p className="bg-small_bg p-4 text-small_text border border-gray-700 mr-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex items-center text-small_text text-sm font-semibold justify-start mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        <Image src={lipstick} alt="" className="w-1/2" />
      </div>
      {/* travel  */}
      <div className="flex items-center justify-center my-20">
        <Image src={travel} alt="" className="w-1/2" />
        <div>
          <h1 className="text-title text-2xl text-right font-semibold">Tour Management Website</h1>
          <p className="bg-small_bg p-4 text-small_text border border-gray-700 ml-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex items-center text-small_text text-sm font-semibold justify-end mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-end">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
      </div>
      {/* happy mom  */}
      <div className="flex items-center justify-center my-20">
        <div>
          <h1 className="text-title text-2xl text-left font-semibold">Pregnancy Care Website</h1>
          <p className="bg-small_bg p-4 text-small_text border border-gray-700 mr-3 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio harum perspiciatis libero facilis dolorum quisquam sed omnis, atque obcaecati animi qui sint sunt ipsam est eius doloremque expedita quas.</p>
          <p className="flex items-center text-small_text text-sm font-semibold justify-start mt-3">
            <span className="mr-3">React</span>
            <span className="mr-3">Firebase</span>
            <span className="mr-3">Tailwind</span>
            <span className="mr-3">Node</span>
            <span className="mr-3">Express</span>
            <span>MongoDB</span>
          </p>
          <div className="flex items-center mt-3 mb-4 text-small_text justify-start">
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Frontend Code" />
            </Link>
            <Link href="https://github.com/israt-emu">
              <BsGithub className="text-lg mr-3" title="Backend Code" />
            </Link>
            <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
              <BiLinkExternal className="text-lg" title="Live Site" />
            </Link>
          </div>
        </div>
        <Image src={happyMom} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default Projects;

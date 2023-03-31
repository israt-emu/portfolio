import Link from "next/link";
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-9/12 mx-auto pb-8 pt-24 lg:container">
      <h1 className="text-small_text text-lg text-center font-mono">
        Built & Designed By --- <span className="text-gradient font-semibold">Israt Jahan</span>
        <span>💁‍♀️</span>
      </h1>
      <div className="flex items-center mt-3 mb-4 text-blue-300 justify-center">
        <Link href="https://www.facebook.com/profile.php?id=100024239881205" target="blank">
          <BsFacebook className="w-8 mr-1" />
        </Link>
        <Link href="https://www.linkedin.com/in/israt-jahan-462788222/" target="blank">
          <BsLinkedin className="w-8 mr-1" />
        </Link>
        <Link href="https://github.com/israt-emu" target="blank">
          <BsGithub className="w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

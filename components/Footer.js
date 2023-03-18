import Link from "next/link";
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-9/12 mx-auto pb-8 pt-24">
      <h1 className="text-small_text text-sm text-center">Built & Designed By --- Israt Jahan</h1>
      <div className="flex items-center mt-3 mb-4 text-small_text justify-center">
        <Link href="https://www.facebook.com/profile.php?id=100024239881205">
          <BsFacebook className="w-8 mr-1" />
        </Link>
        <Link href="https://www.linkedin.com/in/israt-jahan-462788222/">
          <BsLinkedin className="w-8 mr-1" />
        </Link>
        <Link href="https://github.com/israt-emu">
          <BsGithub className="w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

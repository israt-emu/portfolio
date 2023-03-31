import {MdEmail} from "react-icons/md";

const Contact = () => {
  return (
    <div className="sm:w-4/5 lg:w-9/12 mx-auto sm:py-12 py-8 lg:container" id="contact">
      <div className=" px-6 py-10 bg-slate-600/10 ring-1 ring-violet-200/10 rounded-lg  backdrop-blur-sm">
        <div className="flex items-center">
          <h1 className=" text-gradient text-xl sm:text-2xl">Let’s Start a Project Together</h1>
          <hr className="border-t border-gray-700 w-1/5 mt-2 ml-3" />
        </div>
        <p className="text-small_text my-2 text-md sm:text-lg">I’d Love to meet up with you to discuss any project and Potential collaboration</p>
        <p className="text-small_text">Send me an Email at</p>
        <div className="flex items-center text-small_text font-mono">
          <MdEmail className="text-2xl mr-2 text-primary" />
          <p>isratjahan.emu1998@gmail.com</p>
        </div>
        <p className="text-small_text mt-2">Have a Good Day!😊</p>
      </div>
    </div>
  );
};

export default Contact;

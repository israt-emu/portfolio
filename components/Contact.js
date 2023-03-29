import {MdEmail} from "react-icons/md";

const Contact = () => {
  return (
    <div className="sm:w-4/5 lg:w-9/12 mx-auto py-12 lg:container">
      <div className=" px-6 py-10 bg-slate-600/20 ring-1 ring-blue-400/20 rounded-lg  backdrop-blur-sm">
        <h1 className="text-title text-2xl">Let’s Start a Project Together</h1>
        <p className="text-small_text my-2 text-lg">I’d Love to meet up with you to discuss any project and Potential collaboration</p>
        <p className="text-small_text">Send me an Email at</p>
        <div className="flex items-center text-small_text">
          <MdEmail className="text-2xl mr-2 text-primary" />
          <p>isratjahan.em1998@gmail.com</p>
        </div>
        <p className="text-small_text mt-2">Have a Good Day!</p>
      </div>
    </div>
  );
};

export default Contact;

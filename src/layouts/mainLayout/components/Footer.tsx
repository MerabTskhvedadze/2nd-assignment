import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="px-10 mt-10">
      <div className=" border-t-2 border-indigo-100 py-8 px-6 sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-indigo-400 italic sm:text-center">
          © 2023 Merab Tskhvedadze.
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a
            href="mailto:merabi.tskhvedadze@gmail.com"
            className="text-indigo-500 hover:text-indigo-600 text-2xl"
          >
            <MdEmail />
          </a>
          <a
            href="https:/linkedin.com/in/merab-tskhvedadze"
            className="text-indigo-500 hover:text-indigo-600 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https:/github.com/merabtskhvedadze"
            className="text-indigo-500 hover:text-indigo-600 text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

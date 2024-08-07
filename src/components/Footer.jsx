import React from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileText,
} from "react-icons/ai";
import { TbWriting } from "react-icons/tb";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-auto bg-[#060815]" data-aos="fade-in">
      <div className="flex flex-col justify-center mt-[5rem] pt-10">
        <p className="text-white font-semibold text-[10px] text-center">
          LIKE WHAT YOU SEE?
        </p>
        <h1 className="text-white font-semibold text-[38px] text-center">
          Let's connect
        </h1>
        <button className="w-[134px] h-[40px] rounded-[5px] bg-white text-tertiary mt-5 ml-auto mr-auto hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a href="mailto:liebenbergluca@gmail.com" target={"_blank"}>
            Get in touch
          </a>
        </button>
      </div>
      <div className="w-[90vw] border-white"></div>
      <div className="flex flex-row justify-between align-middle pt-[6rem] pb-8 text-white">
        <p className="text-[12px] pt-1 ml-4 lg:ml-10">
          2024 &copy; Luca Liebenberg
        </p>
        <div className="flex flex-row mr-4 lg:mr-8">
          <a
            href="https://luca-blogs.vercel.app/"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-white hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <TbWriting size={24} className="mr-3" />
          </a>
          <a
            href="https://i.ibb.co/B2kWp8Z/Luca-Liebenberg-Resume.jpg"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-white hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillFileText size={24} className="mr-3" />
          </a>
          <a
            href="https://github.com/lucaliebenberg"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-white hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillGithub size={24} className="mr-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/luca-liebenberg/"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-white hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

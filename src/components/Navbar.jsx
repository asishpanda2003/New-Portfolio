import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="   mb-20 flex items-center justify-between py-6">
      <div className="  flex flex-shrink-0 items-center text-4xl grayscale">
        <p className="mx-2 w-10 hover:text-emerald-300">AKP</p>
      </div>
      <div
        className="m-8 flex items-center justify-center gap-4 text-2xl
         "
      >
      <a href="https://github.com/asishpanda2003" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/asishkumarpanda07" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      <a href="https://www.instagram.com/heyy._asish/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-screen-lg w-full text-white mx-auto py-6 select-none bg-slate-950 font-[satoshi] border-b-[1px] border-gray-700 flex items-center justify-between px-4 md:px-12">
      <div className="flex items-center  gap-6 md:gap-14">
        <img
          className="h-7"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14">
          {["Home", "Work", "Culture", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span key={index} className="w-[1px] h-7 bg-slate-500"></span>
            ) : (
              <a
                key={index}
                href="#"
                className="text-lg flex items-center gap-1 hover:text-green-400   hover:text-shadow-[0_0_0.5em_#00FF99] transition-colors relative z-10 group"
              >
                {index === 1 && (
                  <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_0.2em_#00FF99,0_0_0.4em_#00FF99,0_0_1em_#00FF99] animate-pulse"></span>
                )}
                <span className="group-hover:scale-125 transition-transform">
                  {item}
                </span>
              </a>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-950 z-50 border-t border-gray-700 py-4 px-6">
          <div className="flex flex-col items-start gap-6">
            {["Home", "Work", "Culture", "News"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-lg w-full py-2 flex items-center gap-2 hover:text-green-400  transition-colors"
                onClick={toggleMenu}
              >
                {index === 1 && (
                  <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_1em_#00FF99] animate-pulse"></span>
                )}
                {item}
              </a>
            ))}
            <div className="w-full pt-4 border-t border-gray-700">
              <Button />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

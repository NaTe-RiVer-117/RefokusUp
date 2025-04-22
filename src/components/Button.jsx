import React from "react";
import { IoMdReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <button
    
      className="
        relative
        bg-white 
        inline-flex 
        items-center 
        gap-2
        font-semibold 
        text-slate-950 
        font-[satoshi] 
        text-sm 
        py-2 
        px-4 
        rounded-full 
        
        hover:bg-[#00ff1e] 
        hover:shadow-[0_0_1em_#00FF1e] 
        hover:bg-opacity-80 
        transition-all 
        duration-300 
        ease-in-out 
        mr-12
        animate-bounce
        group
      "
    >
      <span className=" group-hover:text-white transition-colors duration-300">
        Get Started
      </span>
      <IoMdReturnRight className="group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
};

export default Button;

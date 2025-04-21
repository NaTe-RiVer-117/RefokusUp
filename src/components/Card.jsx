import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({
  width,
  start,
  para,
  hover = "false",
  heading = "Get in Touch",
  title,
}) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#05c041",
        padding: "25px",
      }}
      className={`bg-slate-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] group flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between text-white items-center">
          <h3>{heading}</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium text-white mt-5">{title}</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className=" text-8xl font-semi-bold text-white tracking-tight leading-none">
              Start a Project
            </h1>
            <button
              href="#"
              className="rounded-full py-2 px-5 mt-5 border group-hover:bg-black text-white border-zinc-50"
            >
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

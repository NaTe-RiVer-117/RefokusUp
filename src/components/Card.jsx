import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({
  width,
  start,
  para,
  hover,
  heading = "Get in Touch",
  title,
}) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover,
        padding: "30px 50px",
      }}
      className={`p-5 rounded-xl hover:${hover} ${width} min-h-[15rem] sm:min-h-[20rem] md:min-h-[30rem] group flex flex-col justify-between`}
    >
      <div className="w-full select-none">
        <div className="w-full flex justify-between text-white items-center">
          <h3 className="text-sm sm:text-base">{heading}</h3>
          <FaArrowRightLong className="text-sm sm:text-base" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mt-3 md:mt-5">{title}</h1>
      </div>
      <div className="down w-full select-none mt-4">
        {start && (
          <>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-semi-bold text-white tracking-tight leading-none">
              Start a Project
            </h1>
            <button
              href={null}
              className="rounded-full py-1 px-3 sm:py-2 sm:px-5 mt-3 sm:mt-5 border group-hover:font-semibold select-none hover:text-xl text-white border-zinc-50"
            >
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-xs sm:text-sm md:text-sm text-zinc-300 font-medium">
            Explore what drives our team
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
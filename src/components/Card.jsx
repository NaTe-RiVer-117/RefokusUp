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
        backgroundColor: hover ,
        padding: "50px",
      }}
      className={`p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] group flex flex-col justify-between`}
    >
      <div className="w-full select-none">
        <div className="w-full flex justify-between text-white items-center">
          <h3>{heading}</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium text-white mt-5">{title}</h1>
      </div>
      <div className="down w-full select-none ">
        {start && (
          <>
            <h1 className=" text-8xl font-semi-bold text-white tracking-tight leading-none">
              Start a Project
            </h1>
            <button
              href={null}
              className="rounded-full py-2 px-5 mt-5 border group-hover:font-semibold select-none hover:text-xl  text-white border-zinc-50"
            >
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-300 font-medium">
            Explore what drives our team
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

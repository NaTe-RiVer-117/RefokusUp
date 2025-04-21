import React from "react";

const Stripe = ({ val }) => {
  return (
    <div
      className="
      w-full md:w-1/2 lg:w-1/6 
      text-white 
      px-2 py-3 
      border-t border-b border-r border-zinc-600 
      flex items-center select-none 
      justify-between 
      bg-slate-950 
      hover:bg-[#00FF1E] hover:border-white   hover:border-l
      transition-all duration-300 ease-in-out
      min-w-[150px]
      group
    "
    >
      <img
        src={val.url}
        alt="Stripe"
        className="w-1/2 md:w-auto max-h-8 object-contain group-hover:brightness-125  group-hover:h-5 transition-all duration-300"
      />
      <div className="text-lg md:text-2xl font-bold text-white group-hover:text-white group-hover:text-3xl group-hover:text-shadow-[0_0_0.3em_#000] transition-all duration-300">
        {val.number}
      </div>
    </div>
  );
};

export default Stripe;
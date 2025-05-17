import React from "react";

const Stripe = ({ val }) => {
  return (
    <div
      className="
      w-full sm:w-1/2 md:w-1/3 lg:w-1/6 
      text-white 
      px-2 py-3 
      border-t border-b border-r border-zinc-600 
      flex items-center select-none 
      justify-between 
      bg-slate-950 
      hover:bg-[#00FF1E] hover:border-white hover:border-l
      transition-all duration-300 ease-in-out
      min-w-[120px]
      group
    "
    >
      <img
        src={val.url}
        alt="Stripe"
        className="w-10 sm:w-16 md:w-auto max-h-6 md:max-h-8 object-contain group-hover:brightness-125 group-hover:h-5 transition-all duration-300"
      />
      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-white group-hover:text-3xl group-hover:text-shadow-[0_0_0.3em_#000] transition-all duration-300">
        {val.number}
      </div>
    </div>
  );
};

export default Stripe;
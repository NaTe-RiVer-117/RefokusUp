import React from "react";

const Product = ({ val }) => {
    return (
        <div className="w-full  select-none py-20  text-white hover:bg-gradient-to-tr group from-slate-950 via-[#00FF1e]/40 to-slate-950">
            <div className=" max-w-screen-xl mx-auto flex  items-center justify-between ">
                <h1 className="text-5xl  font-semibold capitalize ">{val.title}</h1>
                <div className="w-1/3 select-none leading-none">
                    <p className="text-lg mb-7 ">{val.description}</p>
                    <button className="bg-slate-950 hover:bg-[#00FF1e]  hover:text-black group-hover:border-1 group-hover:text-white border-gray-100  text-black font-semibold py-2 px-4 rounded-sm">
                        {val.title}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;

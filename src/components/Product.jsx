import React from "react";
import { motion } from "framer-motion";

const Product = ({ val, mover, count, isActive }) => {
    const getRandomGradient = () => {
        const gradients = [
            'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
            'linear-gradient(135deg, #10B981 0%, #0D9488 100%)',
            'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
            'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
            'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
        ];
        return gradients[count % gradients.length];
    };

    return (
        <motion.div
            className="w-full h-auto py-6 md:py-10 lg:py-14 text-white group bg-slate-950"
            onMouseEnter={() => mover(count)}
            whileHover={{
                background: getRandomGradient(),
            }}
            transition={{ duration: 0.5 }}
        >
            <div className={`w-11/12 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0 ${isActive ? 'opacity-100' : 'opacity-90'}`}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold group-hover:text-shadow-[0_0_0.2em_#FFF] capitalize text-center md:text-left">{val.title}</h1>
                <div className="w-full md:w-1/3 select-none leading-none">
                    <p className="text-sm sm:text-base mb-3 md:mb-4 text-center md:text-left">{val.description}</p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-slate-950 hover:bg-[#FFF] group-hover:shadow-[0_0_0.8em_#FFF] hover:text-black border border-gray-100 text-white font-semibold py-1.5 px-3 text-sm rounded-lg">
                            {val.title}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Product;
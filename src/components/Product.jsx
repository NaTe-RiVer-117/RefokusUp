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
            className="w-full h-[23rem] py-20 text-white group bg-slate-950"
            onMouseEnter={() => mover(count)}
            whileHover={{
                background: getRandomGradient(),
            }}
            transition={{ duration: 0.5 }}
        >
            <div className={`max-w-screen-xl mx-auto flex  items-center justify-between ${isActive ? 'opacity-100' : 'opacity-90'}`}>
                <h1 className="text-5xl font-semibold group-hover:text-shadow-[0_0_0.2em_#FFF] capitalize">{val.title}</h1>
                <div className="w-1/3 select-none leading-none">
                    <p className="text-lg mb-7">{val.description}</p>
                    <button className="bg-slate-950 hover:bg-[#FFF] group-hover:shadow-[0_0_0.8em_#FFF] hover:text-black  border-gray-100 text-white font-semibold py-2 px-4 rounded-lg">
                        {val.title}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Product;
import React, { useState, useEffect } from 'react';
import Product from './Product';
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";
import { motion } from 'framer-motion';

const Products = () => {
    var products = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
        {
            title: "Rainfall",
            description:
                "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
    ];

    const [pos, setPos] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isMobile, setIsMobile] = useState(windowWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mover = (val) => {
        // Reduced height multiplier for more compact sizing
        const baseHeight = isMobile ? 12 : 16;
        setPos(val * baseHeight);
    };

    return (
        <div className='pt-6 md:pt-12 bg-slate-950 relative'>
            {/* Mobile View - Products with videos underneath */}
            <div className="md:hidden">
                {products.map((elem, index) => (
                    <div key={index} className="mb-4">
                        <Product val={elem} mover={mover} count={index} isActive={true} />
                        <div className="mx-auto w-11/12 h-40 rounded-xl overflow-hidden mt-2">
                            <video
                                className="w-full h-full object-cover rounded-xl"
                                autoPlay
                                muted
                                loop
                                src={
                                    index === 0 ? arqitel :
                                    index === 1 ? ttr :
                                    index === 2 ? yir :
                                    index === 3 ? yahoo :
                                    rainfall
                                }
                            ></video>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View - Reduced size side video */}
            <div className="hidden md:block">
                {products.map((elem, index) => (
                    <Product val={elem} key={index} mover={mover} count={index} isActive={true} />
                ))}
                <div className="absolute top-0 w-full h-full pointer-events-none">
                    <motion.div
                        initial={{ y: pos, x: "-50%" }}
                        animate={{ y: pos + `rem` }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
                        className="window absolute w-[26rem] h-[16rem] left-[42%] rounded-xl overflow-hidden"
                    >
                        {products.map((_, index) => (
                            <motion.div
                                key={index}
                                animate={{ y: -pos + `rem` }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <video
                                    className="absolute object-cover rounded-xl"
                                    autoPlay
                                    muted
                                    loop
                                    src={
                                        index === 0 ? arqitel :
                                        index === 1 ? ttr :
                                        index === 2 ? yir :
                                        index === 3 ? yahoo :
                                        rainfall
                                    }
                                ></video>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Products;
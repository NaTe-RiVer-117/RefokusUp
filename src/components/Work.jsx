import React, { useState } from "react";
import { useScroll,useMotionValueEvent,motion } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "25%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "45%",
      left: "25%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "25%",
      left: "80%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "75%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "65%",
      left: "75%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "80%",
      left: "55%",
      isActive: false,
    },
  ]);


  const [activeIndices, setActiveIndices] = useState([]);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercent = latest * 100;
    let newActiveIndices = [];

    if (scrollPercent >= 8) newActiveIndices = [0, 1, 2, 3, 4, 5];
    else if (scrollPercent >= 6) newActiveIndices = [0, 1, 2, 3, 4];
    else if (scrollPercent >= 4) newActiveIndices = [0, 1, 2, 3];
    else if (scrollPercent >= 3) newActiveIndices = [0, 1, 2];
    else if (scrollPercent >= 2) newActiveIndices = [0, 1];
    else if (scrollPercent >= 1) newActiveIndices = [0];
    else newActiveIndices = [];

    setActiveIndices(newActiveIndices);
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-screen-xl relative mx-auto select-none leading-none px-4 py-3 text-center font-medium">
        <h1 className="text-[25vw] sm:text-[15vw] md:text-[35vw] text-shadow-[0_0_0.02em_#00ff1e] text-white">
          work
        </h1>

        <div className="absolute top-0 w-full h-full">
          {images.map((image, index) => (
            <motion.img
              className="absolute w-40 md:w-50 rounded-lg -translate-x-1/2 -translate-y-1/2"
              style={{
                top: image.top,
                left: image.left,
                width: "clamp(100px, 20vw, 200px)",
              }}
              src={image.url}
              alt="Work"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: activeIndices.includes(index) ? 1 : 0,
                scale: activeIndices.includes(index) ? 1 : 0.8,
              }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
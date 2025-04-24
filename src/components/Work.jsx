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


  const [visibleCount, setVisibleCount] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const percent = Math.floor(latest * 100);
    let count = 0;
    
    if (percent >= 8) count = 6;
    else if (percent >= 6) count = 5;
    else if (percent >= 4) count = 4;
    else if (percent >= 3) count = 3;
    else if (percent >= 2) count = 2;
    else if (percent >= 1) count = 1;
    
    setVisibleCount(count);
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
              key={index}
              className="absolute w-40 md:w-50 rounded-lg -translate-x-1/2 -translate-y-1/2"
              style={{
                top: image.top,
                left: image.left,
                width: "clamp(100px, 20vw, 200px)",
              }}
              src={image.url}
              alt="Work"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index < visibleCount ? 1 : 0,
                scale: index < visibleCount ? 1 : 0.8,
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
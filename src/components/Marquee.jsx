import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesurls, direction }) => {
  // Calculate appropriate speed based on screen width
  const [speed, setSpeed] = React.useState(40);
  
  React.useEffect(() => {
    const handleResize = () => {
      // Faster on mobile, slower on desktop
      const newSpeed = window.innerWidth < 768 ? 20 : 40;
      setSpeed(newSpeed);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex w-full overflow-hidden shadow-[0_0_0.5em_#00FF1e] md:shadow-[0_0_0.9em_#00FF1e]">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex flex-shrink-0 gap-10 sm:gap-20 md:gap-40 py-6 sm:py-8 md:py-10 pr-10 sm:pr-20 md:pr-40"
      >
        {imagesurls.map((url, index) => (
          <img 
            key={index} 
            src={url} 
            className="h-6 sm:h-8 md:h-10 w-auto object-contain" 
            alt="Brand logo"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex flex-shrink-0 gap-10 sm:gap-20 md:gap-40 py-6 sm:py-8 md:py-10 pr-10 sm:pr-20 md:pr-40"
      >
        {imagesurls.map((url, index) => (
          <img 
            key={index} 
            src={url} 
            className="h-6 sm:h-8 md:h-10 w-auto object-contain" 
            alt="Brand logo"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
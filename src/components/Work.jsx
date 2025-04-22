import React, { useState } from "react";

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
      top: "55%",
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
      top: "90%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "65%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "80%",
      left: "50%",
      isActive: false,
    },
  ]);

  return (
    <div className="w-full overflow-hidden ">
      <div className="max-w-screen-xl relative mx-auto select-none leading-none px-4 py-3 text-center font-medium">
        {/* Responsive text size */}
        <h1 className="text-[25vw] sm:text-[15vw] md:text-[35vw] text-shadow-[0_0_0.02em_#00ff1e] text-white">
          work
        </h1>

        <div className="absolute top-0 w-full h-full">
          {images.map(
            (image, index) =>
              image.isActive == true && (
                <img
                  className="absolute w-40 md:w-50 rounded-lg -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: image.top,
                    left: image.left,
                    // Responsive adjustments
                    width: "clamp(100px, 20vw, 200px)",
                  }}
                  src={image.url}
                  alt="Work"
                  key={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

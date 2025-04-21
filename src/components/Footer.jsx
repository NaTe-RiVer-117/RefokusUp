import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full select-none">
        <div className=" max-w-screen-xl mx-auto py-10 flex gap-32">
          <div className="basis-1/2">
            <h1 className="text-[11.5rem] text-white font-semibold leading-none tracking-tight">
              refokus.
            </h1>
          </div>
          <div className="basis-1/2 flex gap-4">
            <div className="basis-1/3">
              <h4 className=" mb-10 text-white capitalize font-semibold text-xl">
                socials
              </h4>
              {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                <a
                  key={index}
                  className="block mt-2 capitalize hover:text-white text-zinc-400"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="basis-1/3">
              <h4 className=" mb-10 text-white font-semibold capitalize text-xl">
                Sitemap
              </h4>
              {["Home", "Work", "Careers", "Contact"].map((item, index) => (
                <a
                  key={index}
                  className="block mt-2 capitalize hover:text-white text-zinc-400"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="basis-1/2 flex flex-col p-5 items-end">
              <p className="text-right text-white">
                Refokus is pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <img
                className="w-32 mt-12"
                src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

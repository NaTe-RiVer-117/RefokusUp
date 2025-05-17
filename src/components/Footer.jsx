import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full select-none">
        <div className="w-11/12 max-w-screen-xl mx-auto py-6 sm:py-8 md:py-10 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32">
          {/* Brand Section */}
          <div className="w-full md:basis-1/2 leading-none">
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[11.5rem] text-white font-semibold leading-none tracking-tight">
              refokus.
            </h1>
            <div className="flex flex-wrap gap-4 mt-6 md:mt-8 lg:mt-10 ml-2 md:ml-5 leading-none">
              {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, index) => (
                <a
                  key={index}
                  href={null}
                  className="block mt-2 capitalize hover:text-white text-zinc-400 text-sm md:text-base"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links and Info Section */}
          <div className="w-full md:basis-1/2 flex flex-col sm:flex-row gap-8">
            {/* Socials and Sitemap for mobile (stacked) */}
            <div className="flex w-full justify-between sm:hidden">
              <div className="w-1/2">
                <h4 className="mb-4 md:mb-6 lg:mb-10 text-white capitalize font-semibold text-lg md:text-xl">
                  socials
                </h4>
                {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                  <a
                    key={index}
                    href={null}
                    className="block mt-2 capitalize hover:text-white text-zinc-400 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="w-1/2">
                <h4 className="mb-4 md:mb-6 lg:mb-10 text-white font-semibold capitalize text-lg md:text-xl">
                  Sitemap
                </h4>
                {["Home", "Work", "Careers", "Contact"].map((item, index) => (
                  <a
                    key={index}
                    href={null}
                    className="block mt-2 capitalize hover:text-white text-zinc-400 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Tablet and Desktop layout */}
            <div className="hidden sm:flex gap-4 w-full">
              <div className="basis-1/3">
                <h4 className="mb-4 md:mb-6 lg:mb-10 text-white capitalize font-semibold text-lg md:text-xl">
                  socials
                </h4>
                {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                  <a
                    key={index}
                    href={null}
                    className="block mt-2 capitalize hover:text-white text-zinc-400 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="basis-1/3">
                <h4 className="mb-4 md:mb-6 lg:mb-10 text-white font-semibold capitalize text-lg md:text-xl">
                  Sitemap
                </h4>
                {["Home", "Work", "Careers", "Contact"].map((item, index) => (
                  <a
                    key={index}
                    href={null}
                    className="block mt-2 capitalize hover:text-white text-zinc-400 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="basis-1/2 flex flex-col p-0 md:p-5 items-start md:items-end">
                <p className="text-left md:text-right text-white text-sm md:text-base">
                  Refokus is pioneering digital agency driven by design and
                  empowered by technology.
                </p>
                <img
                  className="w-24 md:w-32 mt-6 md:mt-12"
                  src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                  alt="logo"
                />
              </div>
            </div>
            
            {/* Mobile Company Description & Logo */}
            <div className="sm:hidden w-full mt-6">
              <p className="text-left text-white text-sm mb-6">
                Refokus is pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <img
                className="w-24"
                src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
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
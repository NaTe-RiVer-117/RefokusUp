import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full select-none">
        <div className=" max-w-screen-xl mx-auto py-10 flex gap-32">
          <div className="basis-1/2 leading-none">
            <h1 className="text-[11.5rem] text-white font-semibold leading-none tracking-tight">
              refokus.
            </h1>
           <div className="flex gap-4 mt-10 ml-5 leading-none">
            {["Privacy Policy", "Cookie Policy","Impressum", "Terms"].map((item, index) => (
              <a
                key={index}
                href={null}
                className="block mt-2 capitalize hover:text-white text-zinc-400"
              >
                {item}
              </a>
            ))}
           </div>
          </div>
          <div className="basis-1/2 flex gap-4">
            <div className="basis-1/3">
              <h4 className=" mb-10 text-white capitalize font-semibold text-xl">
                socials
              </h4>
              {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                <a
                  key={index}
                  href={null}
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
                  href={null}
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

import React from 'react'
import Stripe from './Stripe'
const Stripes = () => {
    var data = [
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 45,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 117,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 63,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number:45,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 117,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 63,
        },
      ];
      return (
        <div className="
          flex 
          flex-wrap md:flex-nowrap 
          items-center 
          overflow-x-auto md:overflow-hidden
          scrollbar-hide
          bg-slate-950
          data-scroll
          mt-5
          shadow-[0_0_9em_#00ff1e,0_0_5em_#00ff1e,0_0_2em_#00ff1e]
        ">
          {data.map((elem, index) => (
            <Stripe key={index} val={elem} />
          ))}
        </div>)
        
}

export default Stripes
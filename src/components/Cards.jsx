import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
   <>
      {/* Added extra margin-top to prevent overlap with Marquees */}
      <div className='w-full mt-16 sm:mt-20 md:mt-0'>
        <div className="w-11/12 max-w-screen-xl mx-auto py-10 sm:py-16 md:py-20 flex flex-col md:flex-row gap-4">
            <Card 
              width={"w-full md:basis-1/3"} 
              start={false} 
              para={true} 
              heading={"Up Next: Culture"}   
              hover={"#240443"} 
              title={"Who We Are"} 
            />
            <Card 
              width={"w-full md:basis-2/3"} 
              start={true} 
              para={false} 
              hover={"#05c041"}  
              title={<>Let's get to it,<br className="hidden sm:block" />together!</>}
            />
        </div>
      </div>
   </>
  )
}

export default Cards
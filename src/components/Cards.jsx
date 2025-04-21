import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
   <>
      <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-20 flex gap-1 ">
            <Card width ={"basis-1/3"} start={false} para={true} heading={"Up Next: Culture"}  title={"Who We Are"} />
            <Card width ={"basis-2/3"} start={true} para={false} hover="true"  title={<>Let's get to it,<br />together!</>}/>
        </div>

    </div>
   </>
  )
}

export default Cards
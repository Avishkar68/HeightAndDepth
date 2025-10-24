import React from 'react'
import { ParallaxScrollDemo } from '../components/ParallaxScrollDemo'

const Gallery = () => {
  const blueColor = '#22ABDF';

  return (
    <div className='w-screen flex flex-col justify-center items-center'>
         <h1 
           className="text-5xl mt-10 mb-6 font-bold"
           style={{ color: blueColor }} // Primary Blue Header
         >
           FAITH FRAMES
         </h1>
      <ParallaxScrollDemo />
    </div>
  )
}

export default Gallery
import React from 'react'
import { ParallaxScrollDemo } from '../components/ParallaxScrollDemo'

const Gallery = () => {
  const blueColor = '#22ABDF';

  return (
    <div className='w-screen flex flex-col justify-center items-center'>
     
         <h1
        className="text-4xl md:text-6xl mt-10 font-extrabold tracking-tight text-center"
        style={{ color: blueColor }} // Primary Blue Header
      >
        FAITH FRAMES
      </h1>
  
      <ParallaxScrollDemo />
    </div>
  )
}

export default Gallery
import React from 'react'
import Hero from '../sections/Hero'
import WhatWeDo from '../sections/WhatWeDo'
import OurStories from '../sections/OurStory'
import Stats from '../sections/Stats'
import Testimonials from '../sections/Testimonials'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <WhatWeDo/>
      <OurStories/>
      <Stats/>
      <Testimonials/>
    </div>
  )
}

export default Home

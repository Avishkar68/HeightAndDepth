import React from 'react'
import Hero from '../sections/Hero'
import WhatWeDo from '../sections/WhatWeDo'
import OurStories from '../sections/OurStory'
import Stats from '../sections/Stats'
import Testimonials from '../sections/Testimonials'
import upComingEvents from '../sections/upComingEvents'
import HelpUsSection from '../sections/HelpUsSection'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
    
      <WhatWeDo/>
      <OurStories/>
      <Stats/>
      <upComingEvents/>
      <Testimonials/>
      <HelpUsSection />
    </div>
  )
}

export default Home

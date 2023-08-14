import React from 'react'
import Home from './home/Home'
import WhatWeOffer from './WhatWeOffer'
import Achievments from './Achievments'
import ClassesCard from './ClassesCard'
import WhyChooseUs from './WhyChooseUs'
import TestimonialsTable from './testimonials/TestimonialsTable'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <>
      <Home />
      <Achievments />
      <WhatWeOffer />
      <ClassesCard />
      <WhyChooseUs />
      <TestimonialsTable />
      <Footer />
    </>
  )
}

export default LandingPage

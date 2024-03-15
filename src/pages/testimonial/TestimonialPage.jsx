import React from 'react'
import Testimonial from '../../components/testimonial/Testimonial'
import HeroBanner from '../../components/heroBanner/HeroBanner'
import Layout from '../../components/layout/Layout'

const TestimonialPage = () => {
  return (
    <Layout>
      <HeroBanner name={"TestimonialPage"}/>
      <Testimonial/>
    </Layout>
  )
}

export default TestimonialPage
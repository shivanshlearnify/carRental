import React from 'react'
import Testimonial from '../../components/testimonial/Testimonial'
import HeroBanner from '../../components/heroBanner/HeroBanner'
import Layout from '../../components/layout/Layout'
import ScrollTopArrow from '../../components/scrollTopArrow/ScrollTopArrow'

const TestimonialPage = () => {
  return (
    <Layout>
      
      <ScrollTopArrow/>
      <HeroBanner name={"TestimonialPage"}/>
      <Testimonial/>
    </Layout>
  )
}

export default TestimonialPage
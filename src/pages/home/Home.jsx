import React from 'react'
import Layout from '../../component/layout/Layout'
import HeroSection from '../../component/heroSection/HeroSection'
import Category from '../../component/category/Category'
import HomePageProductCard from '../../component/homePageProductCard/HomePageProductCard'
import Track from '../../component/track/Track'
import Testimonial from '../../component/testimonial/Testimonial'

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home

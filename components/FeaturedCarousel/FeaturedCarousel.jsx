import React, { useState, useEffect } from 'react'
import test from '../../images/test.webp'
import ReactElasticCarousel from 'react-elastic-carousel'
import Image from 'next/image'
import FeaturedCarouselSingle from './FeaturedCarouselSingle'

const FeaturedCarousel = ({ featuredCarousel }) => {
  const [slides, setSlides] = useState([])
  return (
    <>
      <ReactElasticCarousel enableAutoPlay autoPlaySpeed={3000}>
          {featuredCarousel.map((item, index) => (
            <FeaturedCarouselSingle featuredCarousel={item} key={index}/>
          ))}
      </ReactElasticCarousel>
    </>

  )
}

export default FeaturedCarousel
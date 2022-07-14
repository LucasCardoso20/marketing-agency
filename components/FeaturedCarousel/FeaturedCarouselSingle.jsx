import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../client/client'

const FeaturedCarouselSingle = ({ featuredCarousel }) => {
  return (
    <div
      className='carousel-featured'
      style={{ backgroundImage: `url(${urlFor(featuredCarousel.image)})` }}
    >
      <motion.div className={featuredCarousel.contentPositionInitial ? 'container-initial container' : 'carousel-content'}>
        <h1 style={{
          color:
            `${featuredCarousel.titleColor === 'main' ? '#3A3A50' : ''}
          ${featuredCarousel.titleColor === 'second' ? '#ff3a5f' : ''}
          ${featuredCarousel.titleColor === 'white' ? '#fff' : ''}
          `
        }}
        >
          {featuredCarousel.carouselTitle}
        </h1>

        <h4 style={{
          color:
            `${featuredCarousel.subTitleColor === 'main' ? '#3A3A50' : ''}
              ${featuredCarousel.subTitleColor === 'second' ? '#ff3a5f' : ''}
              ${featuredCarousel.subTitleColor === 'white' ? '#fff' : ''}
              `
        }}
          className={featuredCarousel.contentPositionInitial ? 'h4-carousel' : ''}
        >
          {featuredCarousel.carouselSubTitle}
        </h4>


        <Link href='/' >
          <a className='btn btn-carousel'>
            {featuredCarousel.buttonText}
          </a>
        </Link>

      </motion.div>

    </div>
  )
}

export default FeaturedCarouselSingle
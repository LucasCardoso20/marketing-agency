import React from 'react'
import { urlFor } from '../../client/client'

const FeaturedText = ({ featuredText }) => {
  return (
    <section className='featured-text' style={{ backgroundImage: `url(${urlFor(featuredText[0].backgroundImage)})` }}>
      <div className="featured-text-container">
        <h4>{featuredText[0].Subtitle}</h4>
        <h2>{featuredText[0].title}</h2>

        <div className="container-btns">
          <button className="btn btn-second-color">Free analysis</button>
          <button className="btn btn-third-color">Learn More</button>
        </div>
      </div>

    </section>
  )
}

export default FeaturedText
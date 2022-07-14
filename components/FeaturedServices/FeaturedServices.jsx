import React from 'react'
import { urlFor } from '../../client/client'

const FeaturedServices = ({ featuredServices, featuredServicesSection }) => {
  return (
    <section className='featured-services'
      style={{ backgroundImage: `url(${urlFor(featuredServicesSection[0].backgroundImage)})` }}
    >
      <div className="container">
        <div className="featured-services-titles">
          <h2>{featuredServicesSection[0].title}</h2>
          <h4>{featuredServicesSection[0].subtitle}</h4>

        </div>

        <div className='horizontal-line'>
          <span className="horizontal-line-span"></span>
        </div>

        <div className="services-grid">
          {featuredServices.map((item, index) => (
            <article className='services-item-container' key={index}>
              <div className="item-container-img">
                <img src={urlFor(item.image ? item.image : '')} alt='' />
                <h5>{item.itemTitle && item.itemTitle}</h5>
              </div>

              <p>
                {item.itemDescription && item.itemDescription}
              </p>
            </article>
          ))}
        </div>

      </div>


    </section>
  )
}

export default FeaturedServices
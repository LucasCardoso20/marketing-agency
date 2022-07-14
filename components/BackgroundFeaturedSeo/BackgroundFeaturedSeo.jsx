import React from 'react'
import { urlFor } from '../../client/client'

const BackgroundFeaturedSeo = ({backgroundFeaturedSeo}) => {
  const {title, subTitle, text, buttonText, backgroundImage} = backgroundFeaturedSeo[0];
  return (
    <section id='background-featured-seo' className='background-featured-seo' style={{backgroundImage: `url(${urlFor(backgroundImage)})`}}>
      {console.log(backgroundFeaturedSeo)}
      <div className="background-featured-container">
        <h1 className='background-featured-title'>
          {title}
        </h1>

        <h4 className='background-featured-subtext'>
          {subTitle}
        </h4>

        <p className='background-featured-text'>{text}</p>

        <button className="btn btn-second-color">{buttonText}</button>
      </div>
    </section>
  )
}

export default BackgroundFeaturedSeo
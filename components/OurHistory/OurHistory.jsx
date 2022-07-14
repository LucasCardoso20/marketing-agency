import React from 'react'
import { urlFor } from '../../client/client'
import BlockContent from '@sanity/block-content-to-react'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const OurHistory = ({ ourHistory }) => {
  const {body, tags} = ourHistory[0]
  return (
    <section id='ourHistory' className='our-history' style={{ backgroundImage: `url(${urlFor(ourHistory[0].backgroundImage)})` }}>
      <div className="our-history-container title-h2 container">
        <h2>
          Our History
        </h2>

        <div className="horizontal-line ">
          <span className='horizontal-line-span'></span>
        </div>


        <p className="our-history-excerpt">
          {ourHistory[0].excerpt}
        </p>

        <div className='our-history-block'>
          {console.log(body[0]) }
          {body[0] !== undefined && (
            <BlockContent blocks={body} projectId='9luiiryd' dataset='production'/>
          )}
        </div>

        <div className="our-history-checks">
        {tags.map((item, index)=> (
            <div key={index} className="our-history-checks-container">
              <BsFillCheckCircleFill/>
              <h5 key={item}>{item}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurHistory
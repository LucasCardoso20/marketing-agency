import React from 'react'
import { urlFor } from '../../client/client'
import { motion } from 'framer'
import { AiFillGithub } from 'react-icons/ai'
const OurTeam = ({ ourTeam }) => {
  return (
    <section id='our-team' className='our-team'>
      <div className="our-team-container container">
        <div className="title-container">
          <h2 className='title-h2 title-name'>Meet Our Team</h2>
          <h5 className='subtitle subtitle-white'>We’d like to introduce you to some of the people who make LaraWay what it is today.</h5>
        </div>

        <div className='horizontal-line'>
          <span className='horizontal-line-span-white'></span>
        </div>

        <div className="our-team-people">
          {ourTeam.map((item) => (
            <figure className="person-container" key={item.name}>
              <div className='motion-image'>
                <img src={urlFor(item.image)} />
              </div>
              <div className="name-container">
                <h5 className='title-h4 title-name'>{item.name}</h5>
                <span className='subtitle-span'>{item.position}</span>
              </div>

            </figure>
          ))}
        </div>
      </div>

      <div className='btn-container'>
        <button className='btn btn-carousel'>
          View All
        </button>
      </div>

    </section>
  )
}

export default OurTeam
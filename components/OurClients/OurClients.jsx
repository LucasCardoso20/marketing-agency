import React from 'react'
import { urlFor } from '../../client/client'
const OurClients = ({ ourClients }) => {
  return (
    <section id='our-clients' className='our-clients'>

      <div className="our-clients container container">
        <div className="title-container">
          <h2 className='title-h2'>Our Clients</h2>
        </div>

        <div className="horizontal-line">
          <span className="horizontal-line-span"></span>
        </div>

        <ul>
          {
            ourClients.map((item, index) => (
              <li key={index}>
                <img src={urlFor(item.image)} />
              </li>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default OurClients
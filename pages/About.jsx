import Link from 'next/link'
import React from 'react'
import {CompanyStats} from '../components/index'
import { client, urlFor } from '../client/client'

const about = ({aboutPage, companyStats}) => {
  const {bannerImage, bannerTitle, bannerText, buttonText} = aboutPage[0]
  return (
    <>
    {console.log(aboutPage)}
      <div className='site-map'>
        <div className='site-map-container container'>
          <Link href='/'>
            <a>
              <h5>
                HOME
              </h5>
            </a>
          </Link>
          <span>|</span>
          <Link href="/About">
            <a>
              <h5>About</h5>
            </a>
          </Link>
        </div>
      </div>

      <section className="about-page" style={{backgroundImage: `url(${urlFor(bannerImage)})`}}>
        <div className="about-page-banner-content">
          <h2 className='second-color'>{bannerTitle}</h2>

          <h5 className='white-color'>{bannerText}</h5>

          <Link href={''}>
            <a>
              <button className="btn btn-second-color">{buttonText}</button>
            </a>
          </Link>
        </div>
      </section>
      <CompanyStats companyStats={companyStats}/>
      
    </>

  )
}

export const getStaticProps = async () => {
  const query = `*[_type == "aboutPage"]`;
  const aboutPage = await client.fetch(query)

  const companyStatsQuery = '*[_type == "companyStats"]'
  const companyStats = await client.fetch(companyStatsQuery)

  return {
    props: { aboutPage, companyStats }
  }
}

export default about
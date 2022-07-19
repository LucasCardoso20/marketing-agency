import Link from 'next/link'
import React from 'react'
import { CompanyStats } from '../components/index'
import { client, urlFor } from '../client/client'

const about = ({ aboutPage, companyStats, keyAdvantages }) => {
  const { bannerImage, bannerTitle, bannerText, buttonText } = aboutPage[0]

  return (
    <>
      {console.log(keyAdvantages)}
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

      <section className="about-page" style={{ backgroundImage: `url(${urlFor(bannerImage)})` }}>
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
      <CompanyStats companyStats={companyStats} />
      <section className="key-advantages">
        <div className="key-advantages-container container">
          <h2 className="title-h2">Some of Our Key Advantagess</h2>

          <div className="horizontal-line">
            <span className="horizontal-line-span"></span>
          </div>

          <div className="key-advantages-grid">
            {keyAdvantages.map((item, index) => (
              <article className='key-advantages-item-container' key={index}>
                <div className="item-container-img">
                  <img src={urlFor(item.image ? item.image : '')} alt='' />
                  <h5>{item.name}</h5>
                </div>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>

  )
}

export const getStaticProps = async () => {
  const query = `*[_type == "aboutPage"]`;
  const aboutPage = await client.fetch(query)

  const companyStatsQuery = '*[_type == "companyStats"]'
  const companyStats = await client.fetch(companyStatsQuery)

  const keyAdvantagesQuery = '*[_type == "keyAdvantages"]'
  const keyAdvantages = await client.fetch(keyAdvantagesQuery)

  return {
    props: { aboutPage, companyStats, keyAdvantages }
  }
}

export default about
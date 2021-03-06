import '../components/Header/Header.scss'
import '../components/SocialsBar/SocialsBar.scss'
import '../components/FeaturedCarousel/FeaturedCarousel.scss'
import '../components/FeaturedServices/FeaturedServices.scss'
import '../components/FeaturedText/FeaturedText.scss'
import '../components/OurHistory/OurHistory.scss'
import '../components/CompanyStats/CompanyStats.scss'
import '../components/OurTeam/OurTeam.scss'
import '../components/BlogPosts/BlogPosts.scss'
import '../components/BackgroundFeaturedSeo/BackgroundFeaturedSeo.scss'
import '../components/OurClients/OurClients.scss'
import '../components/Footer/Footer.scss'

//page styles

import './styles/about.scss'
import './styles/blog.scss'
import './styles/caseStudies.scss'
import './styles/contacts.scss'
import './styles/services.scss'
import './styles/singlePost.scss'

import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
}

export default MyApp

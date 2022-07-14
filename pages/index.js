import {
  Header,
  FeaturedCarousel,
  FeaturedServices,
  FeaturedText,
  OurHistory,
  CompanyStats,
  OurTeam,
  BlogPosts,
  BackgroundFeaturedSeo,
  OurClients,
  Footer
} from '../components/index'

import { client } from '../client/client';



function App({
  featuredCarousel,
  featuredServices,
  featuredServicesSection,
  featuredText,
  ourHistory,
  companyStats,
  post,
  ourTeam,
  backgroundFeaturedSeo,
  ourClients,
  footer,
}) {
  return (

    <div>
      <Header />
      <FeaturedCarousel featuredCarousel={featuredCarousel} />
      <FeaturedServices featuredServices={featuredServices} featuredServicesSection={featuredServicesSection} />
      <FeaturedText featuredText={featuredText} />
      <OurHistory ourHistory={ourHistory} />
      <CompanyStats companyStats={companyStats}/>
      <OurTeam ourTeam={ourTeam}/>
      <BlogPosts post={post}/>
      <BackgroundFeaturedSeo backgroundFeaturedSeo={backgroundFeaturedSeo}/>
      <OurClients ourClients={ourClients}/>
      <Footer footer={footer}/>
    </div>

  );
}


export const getServerSideProps = async () => {
  const query = '*[_type == "carouselFeatured"]';
  const featuredCarousel = await client.fetch(query);

  const servicesQuery = '*[_type == "featuredServices"]'
  const featuredServices = await client.fetch(servicesQuery)

  const servicesSectionQuery = '*[_type == "featuredServicesSection"]'
  const featuredServicesSection = await client.fetch(servicesSectionQuery)

  const featuredTextQuery = '*[_type == "featuredTitle"]'
  const featuredText = await client.fetch(featuredTextQuery)

  const ourHistoryQuery = '*[_type == "ourHistory"]'
  const ourHistory = await client.fetch(ourHistoryQuery)

  const companyStatsQuery = '*[_type == "companyStats"]'
  const companyStats = await client.fetch(companyStatsQuery)

  const backgroundFeaturedSeoQuery = '*[_type == "backgroundFeaturedSeo"]'
  const backgroundFeaturedSeo = await client.fetch(backgroundFeaturedSeoQuery)

  const ourTeamQuery = '*[_type == "ourTeam"]'
  const ourTeam = await client.fetch(ourTeamQuery)

  const ourClientsQuery = '*[_type == "ourClients"]'
  const ourClients = await client.fetch(ourClientsQuery)

  const footerQuery = '*[_type == "footer"]'
  const footer = await client.fetch(footerQuery)

  const postQuery = '*[_type == "post"]'
  const post = await client.fetch(postQuery)


  return {
    props: {
      featuredCarousel,
      featuredServices,
      featuredServicesSection,
      featuredText,
      ourHistory,
      companyStats,
      post,
      ourTeam,
      backgroundFeaturedSeo,
      ourClients,
      footer,
    }
  }
}


export default App;
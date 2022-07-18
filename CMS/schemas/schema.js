// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them

import blockContent from './blockContent'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import carouselFeatured from './carouselFeatured'
import featuredServices from './featuredServices'
import featuredServicesSection from './featuredServicesSection'
import featuredTitle from './featuredTitle'
import ourHistory from './ourHistory'
import companyStats from './companyStats'
import ourTeam  from './ourTeam'
import ourClients from './ourClients'
import footer from './footer'
import backgroundFeaturedSeo from './backgroundFeaturedSeo'
import post from './post'
import category from './category'
import author from './author'
import aboutPage from './aboutPage'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    carouselFeatured,
    featuredServicesSection,
    featuredServices,
    featuredTitle,
    ourHistory,
    blockContent,
    companyStats,
    post,
    category,
    author,
    ourTeam,
    backgroundFeaturedSeo,
    ourClients,
    footer,

    //About Page

    aboutPage,
  ]),
})

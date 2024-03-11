/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [ 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `HoldTML`,
    //     icon: ``,
    //   },
    // },
    // "gatsby-plugin-gatsby-cloud", 

    "gatsby-plugin-offline", 
    "gatsby-plugin-netlify", 
    "gatsby-plugin-smoothscroll", 
    // {
    //   resolve: `gatsby-plugin-gatsby-cloud`,
    //   options: {
    //     // Your Gatsby Cloud API key
    //     apiKey: `YOUR_API_KEY`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

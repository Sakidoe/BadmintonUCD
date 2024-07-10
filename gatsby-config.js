/**
 
@type {import('gatsby').GatsbyConfig}*/

module.exports = {
    pathPrefix: "/BadmintonUCD",
    siteMetadata: {
      title: "Badminton @ UC Davis",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp"
    ],
  };

module.exports = {
  pathPrefix: "/de-portfolio",
  siteMetadata: {
    title: "Data Engineer Portfolio",
    description: "Portfolio showcasing data engineering projects and architectures",
    author: "Pranav Hingane",
    siteUrl: "https://yoursite.com",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // gatsby-plugin-manifest temporarily disabled - requires a valid icon PNG
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `data-engineer-portfolio`,
    //     short_name: `portfolio`,
    //     start_url: `/`,
    //     background_color: `#0a192f`,
    //     theme_color: `#64ffda`,
    //     display: `minimal-ui`,
    //     icon: `static/favicon.png`, // Add a real 512x512 PNG to enable
    //   },
    // },
  ],
};

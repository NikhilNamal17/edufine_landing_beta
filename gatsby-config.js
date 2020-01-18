module.exports = {
  siteMetadata: {
    title: `EduFine`,
    description: `A simple one page marketing starter for saas companies.`,
    author: `Nikhil Namal & Karan Bhatt`,
    image: `src/images/site-image.png`,
    twitterUsername: "@Nikhil17_namal",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EduFine`,
        short_name: `EduFine`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://netlify.us19.list-manage.com/subscribe/post?u=02c66175e77c1b3f14213354c&amp;id=8e02001bad',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-134080378-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      },
    }
  ],
}

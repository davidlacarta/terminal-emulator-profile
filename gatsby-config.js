module.exports = {
  siteMetadata: {
    title: `David Lacarta`,
    description: `David Lacarta Profile`,
    url: `https://davidlacarta.com`,
    image: `/images/icon.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `david-lacarta`,
        short_name: `davidlacarta`,
        start_url: `/`,
        background_color: "lightslategrey",
        theme_color: "lightslategrey",
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};

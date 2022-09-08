require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `gatsby-lb-test`,
    siteUrl: `https://testlb.kubash.org`,
  },
  plugins: [],
}

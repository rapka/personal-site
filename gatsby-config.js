module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: 'College Hill',
    siteUrl: 'https://www.collegehill.io',
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'static/favicon.png',
    }
  }],
};
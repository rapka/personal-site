module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    title: 'College Hill',
    siteUrl: 'https://www.collegehill.io',
  },
  plugins: [
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      sassOptions: {
        includePaths: ['src/styles'],
      }
    },
  },
  'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'static/favicon.png',
    }
  }],
};
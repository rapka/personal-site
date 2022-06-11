const path = require(`path`);
const fs = require('fs');
const each = require('lodash/each')

const photos = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/photos.json')));

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/components/virtual-photography/GalleryPage.js`);
  // Query for markdown nodes to use in creating pages.

  console.log('lala', JSON.stringify(photos.galleries.length, null, 2));

    // Create blog post pages.
    each(photos.galleries, (gallery, key) => {
      console.log('lalala', key);
      createPage({
        // Path for this page — required
        path: `/virtual-photography/${key}`,
        component: blogPostTemplate,
        context: {
          // path: key,
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    });

};
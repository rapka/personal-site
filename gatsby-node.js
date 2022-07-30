const path = require('path');
const fs = require('fs');
const each = require('lodash/each');

const photos = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/photos.json')));
const musicData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/musicData.json')));

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const galleryPage = path.resolve('src/components/virtual-photography/GalleryPage.js');
  const releasePage = path.resolve('src/components/music/ReleasePage.js');
  each(photos.galleries, (gallery, key) => {
    createPage({
      // Path for this page — required
      path: `/virtual-photography/${key}`,
      component: galleryPage,
      context: {
        galleryKey: key,
      },
    })
  });

  each(musicData, (aliasData, alias) => {
    each(aliasData, (releasesData, releaseType) => {
      each(releasesData, (release, i) => {
        createPage({
          // Path for this page — required
          path: `/music/${alias}/${releaseType}/${release.slug}`,
          component: releasePage,
          context: {
            releaseData: release,
            alias,
          },
        });
      });
    });
  });
};
import React from 'react';
import PropTypes from 'prop-types';
import defaultsDeep from 'lodash/defaultsDeep';

import './Bandcamp.css';

function BandcampEmbed({ options, albumId }) {
  const defaultOpts = {
    width: 'min(100vw, 500px);',
    height: options && options.size === 'large' ? 500 : undefined,
    size: 'large',
    bgColor: '333333',
    linkColor: 'fe7eaf',
  };

  const opts = defaultsDeep({}, options, defaultOpts);
  const {
    width, height, bgColor, linkColor, size,
  } = opts;

  const iframeUrl = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}`
    + `/size=${size}/bgcol=${bgColor}/linkcol=${linkColor}/tracklist=false/transparent=true/`;

  console.log('rrrr', options, width, height, bgColor, linkColor, size);

  return (
    <div className="bandcampEmbed">
      <iframe
        style={{ border: 0, width: `${width}px`, height: `${height}px` }}
        src={iframeUrl}
        seamless
      >
        A weird error occured!
        {' '}
        <a href="https://www.bandcamp.com">Got to Bandcamp</a>
      </iframe>
    </div>
  );
}

BandcampEmbed.propTypes = {
  albumId: PropTypes.string.isRequired,
  options: PropTypes.shape({
    size: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
    linkColor: PropTypes.string,
  }),
};

export default BandcampEmbed;

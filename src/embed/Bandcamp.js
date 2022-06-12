import React from 'react';
import PropTypes from 'prop-types';

import './Bandcamp.css';

function BandcampEmbed({ size, options, albumId }) {
  let width = 'min(100vw, 500px);';
  let height = '120px';
  let bgColor = '333333';
  let linkColor = 'fe7eaf';
  let showTracklist = false;

  if (size === 'large') {
    width = '700px';
    height = '872px';
    showTracklist = true;
  }

  const iframeUrl = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}`
    + `/size=${size}/bgcol=${bgColor}/linkcol=${linkColor}/tracklist=${showTracklist}/transparent=true/`;

  return (
    <div className="bandcampEmbed">
      <iframe
        title="Embedded Bandcamp content"
        style={{ border: 0, width, height }}
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
  size: PropTypes.string,
  albumId: PropTypes.string.isRequired,
  options: PropTypes.shape({
    size: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    linkColor: PropTypes.string,
  }),
};

BandcampEmbed.defaultProps = {
  size: 'medium',
  showTracklist: false,
  options: {},
};

export default BandcampEmbed;

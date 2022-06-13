import React from 'react';
import PropTypes from 'prop-types';

import './Bandcamp.scss';

function BandcampEmbed({ size, options, albumId }) {
  let width = 'min(100vw, 700px)';
  let height = '120px';
  let bgColor = '333333';
  const linkColor = 'fe7eaf';
  let showTracklist = false;

  if (size === 'large') {
    width = '700px';
    height = '872px';
    bgColor = 'transparent';
    showTracklist = true;
  }

  let iframeUrl = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}`
    + `/size=large/bgcol=${bgColor}/linkcol=${linkColor}/tracklist=${showTracklist}/transparent=true/artwork=none`;

  // if (size == 'small') {
  //   iframeUrl += '/artwork=none';
  // }

  return (
    <div className="bandcampEmbed">
      <iframe
        title="Embedded Bandcamp content"
        style={{
          border: 0, maxWidth: width, height,
        }}
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
  size: 'small',
  showTracklist: false,
  options: {},
};

export default BandcampEmbed;

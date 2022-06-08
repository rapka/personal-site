import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import './YouTube.css';

function YouTubeEmbed({ videoId, options }) {
  return (
    <div className="youtubeEmbed">
      <YouTube videoId={videoId} opts={options} />
    </div>
  );
}

YouTubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
  options: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

YouTubeEmbed.defaultProps = {
  options: {},
};

export default YouTubeEmbed;

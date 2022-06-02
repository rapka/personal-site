import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import './YouTube.css';

function YouTubeEmbed({ videoId }) {
  return (
    <div className="youubeEmbed">
      <YouTube
        videoId={videoId}
      />
    </div>
  );
}

YouTubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
};

YouTubeEmbed.defaultProps = {};

export default YouTubeEmbed;

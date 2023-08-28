import React, { useState } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';
import SoundcloudEmbed from '../../embed/Soundcloud';

import './MorphologistAlbum.scss';

function AlbumEmbed({
  title,
  year,
  genres,
  youtubeId,
  youtubeOptions,
  bandcampId,
  bandcampOptions,
  soundcloudIds,
  tracks,
  slug,
}) {
  const [activeTrack, setActiveTrack] = React.useState(tracks.indexOf(get(window, 'location.hash')));
  const trackArt = tracks.map((track, index) => {
    const trackSlug = track.toLowerCase().replace(' ', '_');
    return (
      <img
        key={`trackImg-${index}`}
        className={`morphologistAlbum-trackArt ${index === activeTrack ? 'selected' : ''}`}
        alt={title}
        onClick={() => setActiveTrack(index)}
        src={`/images/music/morphologist/${title.toLowerCase().split(' ')[1]}/${trackSlug}.jpg`}
      />
    );
  });

  let soundcloudEmbed;

  if (activeTrack >= 0 && soundcloudIds[activeTrack]) {
    soundcloudEmbed = (
      <SoundcloudEmbed
        trackId={soundcloudIds[activeTrack]}
        title={title}
        artist="morphologist"
        artistName={artistName}
        slug={slug}
      />
    );
  }

  return (
    <div className="morphologistAlbum">
      <h5 className="morphologistAlbum-release">Coming soon.</h5>
      <div className="morphologistAlbum-text">
        <h4 className="morphologistAlbum-title">morphologist</h4>
        {!!title && <h4 className="morphologistAlbum-title">{title.toLowerCase()}</h4>}
        {!!year && <h4 className="morphologistAlbum-year">{year}</h4>}
        {activeTrack >= 0 && <h4 className="morphologistAlbum-trackTitle">{tracks[activeTrack]}</h4> }
      </div>
      <img className="morphologistAlbum-art" alt={title} src={`/images/music/morphologist/${slug}.jpg`} />
      <div className="morphologistAlbum-trackArtContainer">
        {trackArt}
      </div>
      {soundcloudEmbed}
    </div>
  );
}

AlbumEmbed.propTypes = {
  youtubeId: PropTypes.string,
  youtubeOptions: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  bandcampId: PropTypes.string,
  bandcampOptions: PropTypes.shape({
    size: PropTypes.string,
  }),
  soundcloudId: PropTypes.string,
  recordLabel: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  tracks: PropTypes.arrayOf(PropTypes.string),
  soundcloudIds: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
};

AlbumEmbed.defaultProps = {
  youtubeId: '',
  youtubeOptions: {},
  bandcampId: '',
  bandcampOptions: {},
  title: '',
  recordLabel: '',
  soundcloudIds: [],
  year: undefined,
  genres: [],
};

export default AlbumEmbed;

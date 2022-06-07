import React from 'react';
import PropTypes from 'prop-types';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';

function AlbumEmbed({
  title,
  year,
  genres,
  description,
  youtubeId,
  youtubeOptions,
  bandcampId,
  bandcampOptions,
}) {
  return (
    <div className="albumEmbed">
      {title && <h4 className="albumEmbed-title">{title}</h4>}
      {year && <h4 className="albumEmbed-year">{title}</h4>}
      {genres && genres.length && <div className="albumEmbed-genres">{genres}</div>}
      {description && <div className="albumEmbed-desc">{description}</div>}
      {youtubeId && <YouTubeEmbed videoId={youtubeId} options={youtubeOptions} />}
      {bandcampId && <BandcampEmbed albumId={bandcampId} options={bandcampOptions} />}
    </div>
  );
}

AlbumEmbed.propTypes = {
  youtubeId: PropTypes.string,
  youtubeOptions: PropTypes.object,
  bandcampId: PropTypes.string,
  bandcampOptions: PropTypes.shape({
    size: PropTypes.string,
  }),
  title: PropTypes.string,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
};

AlbumEmbed.defaultProps = {};

export default AlbumEmbed;

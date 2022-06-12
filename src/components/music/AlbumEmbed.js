import React from 'react';
import PropTypes from 'prop-types';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';

import './AlbumEmbed.scss';

function AlbumEmbed({
  title,
  year,
  genres,
  label,
  description,
  youtubeId,
  youtubeOptions,
  bandcampId,
  bandcampOptions,
  slug,
  alias,
}) {
  return (
    <div className="albumEmbed">
      <img className="albumEmbed-art" src={`/images/music/${alias}/${slug}.jpg`} />
      {!!title && <h4 className="albumEmbed-title">{title}</h4>}
      {!!year && <h4 className="albumEmbed-year">{year}</h4>}
      {!!label && <h4 className="albumEmbed-label">{label}</h4>}
      {genres && genres.length > 0 && (
        <div className="albumEmbed-genres">
          (
          {genres.join('/')}
          )
        </div>
      )}
      {description && <div className="albumEmbed-desc">{description}</div>}
      {youtubeId && <YouTubeEmbed videoId={youtubeId} options={youtubeOptions} />}
      {bandcampId && <BandcampEmbed albumId={bandcampId} options={bandcampOptions} />}
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
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
};

AlbumEmbed.defaultProps = {
  youtubeId: '',
  youtubeOptions: {},
  bandcampId: '',
  bandcampOptions: {},
  title: '',
  label: '',
  description: '',
  year: undefined,
  genres: [],
};

export default AlbumEmbed;

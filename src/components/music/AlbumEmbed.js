import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';

import './AlbumEmbed.scss';

function AlbumEmbed({
  title,
  year,
  genres,
  recordLabel,
  youtubeId,
  youtubeOptions,
  bandcampId,
  bandcampOptions,
  slug,
  alias,
  size,
  type,
}) {
  return (
    <div className={`albumEmbed ${size}`}>
      {!!title && <h4 className="albumEmbed-title">{title}</h4>}
      {!!year && <h4 className="albumEmbed-year">{year}</h4>}
      {!!recordLabel && <h4 className="albumEmbed-label">{recordLabel}</h4>}
      {genres && genres.length > 0 && (
        <div className="albumEmbed-genres">

          {genres.join(' | ')}

        </div>
      )}
      <Link to={`/music/${alias}/${type}/${slug}/`} className="albumEmbed-artLink"><img className="albumEmbed-art" alt={title} src={`/images/music/${alias}/${slug}.jpg`} /></Link>
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
  recordLabel: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
};

AlbumEmbed.defaultProps = {
  youtubeId: '',
  youtubeOptions: {},
  bandcampId: '',
  bandcampOptions: {},
  title: '',
  recordLabel: '',
  year: undefined,
  genres: [],
  size: 'medium',
  type: 'album',
};

export default AlbumEmbed;

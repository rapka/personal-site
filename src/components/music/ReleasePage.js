import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Header from '../Header';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';

import './ReleasePage.scss';

function ReleasePage({ path, pageContext }) {
  const {
    title,
    year,
    genres,
    description,
    label,
    youtubeId,
    youtubeOptions,
    bandcampId,
    bandcampOptions,
  } = pageContext.releaseData;

  return (
    <div className="virtualPhotography" id="galleryPage">
      <Header />
      <div className="releasePage">
        {!!title && <h2 className="releasePage-title">{title}</h2>}
        {!!year && (
          <h3 className="releasePage-year">
            <span className="releasePage-yearLabel">year = </span>
            {year}
          </h3>
        )}
        {!!label && (
          <h3 className="releasePage-label">
            <span className="releasePage-labelLabel">label = </span>
            {label}
          </h3>
        )}
        {genres && genres.length > 0 && (
          <div className="releasePage-genres">
            <span className="releasePage-genresLabel">genres = </span>
            (
            {genres.join('/')}
            )
          </div>
        )}
        {description && <div className="releasePage-desc">{description}</div>}
        {youtubeId && <YouTubeEmbed videoId={youtubeId} options={youtubeOptions} />}
        {bandcampId && (
          <BandcampEmbed albumId={bandcampId} size="large" options={{ width: '700px' }} />
        )}
      </div>
    </div>
  );
}

ReleasePage.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    releaseData: PropTypes.object.isRequired,
  }),
};

export default ReleasePage;

import React from 'react';
import PropTypes from 'prop-types';
import { titleCase } from 'title-case';
import Header from '../Header';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';

import './ReleasePage.scss';

function ReleasePage({ pageContext }) {
  const {
    title,
    year,
    genres,
    description,
    recordLabel,
    youtubeId,
    youtubeOptions,
    bandcampId,
    bandcampOptions,
    slug,
  } = pageContext.releaseData;

  const artUrl = `/images/music/${pageContext.alias}/${slug}.jpg`;
  const aliasName = titleCase(pageContext.alias.replace('-', ' '));

  return (
    <div className="releasePage">
      <Header />
      <div className="releasePage-content" style={{ backgroundImage: `url(${artUrl})` }}>
        <div className="releasePage-header">
          <h2 className="releasePage-alias">{aliasName}</h2>
          {!!title && <h2 className="releasePage-title">{title}</h2>}
          {!!year && (
            <h3 className="releasePage-year">
              <span className="releasePage-yearLabel">year = </span>
              {year}
            </h3>
          )}
          {!!recordLabel && (
            <h3 className="releasePage-label">
              <span className="releasePage-labelLabel">label = </span>
              {recordLabel}
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
        </div>
        {youtubeId && <YouTubeEmbed videoId={youtubeId} options={youtubeOptions} />}
        {bandcampId && (
          <div className="releasePage-bandcamp">
            <BandcampEmbed albumId={bandcampId} size="large" options={{ width: '700px' }} />
          </div>
        )}
      </div>
    </div>
  );
}

ReleasePage.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    releaseData: PropTypes.object.isRequired,
    alias: PropTypes.string.isRequired,
  }),
};

export default ReleasePage;

import React from 'react';
import PropTypes from 'prop-types';
import { titleCase } from 'title-case';
import Header from '../Header';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';

import './ReleasePage.scss';

const formatText = (text) => text.split('\n').join('<br />');

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
    slug,
  } = pageContext.releaseData;

  const artUrl = `/images/music/${pageContext.alias}/${slug}.jpg`;
  const aliasName = titleCase(pageContext.alias.replace('-', ' '));

  return (
    <div className="releasePage">
      <div className="releasePage-content" style={{ backgroundImage: `url(${artUrl})` }}>
        <Header />
        <div className="releasePage-headerContainer">
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
          {description && <div
            className="releasePage-desc"
            dangerouslySetInnerHTML={{ __html: formatText(description)}}
          />}
        </div>
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
  pageContext: PropTypes.shape({
    releaseData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      year: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      bandcampId: PropTypes.string,
      description: PropTypes.string,
      recordLabel: PropTypes.string,
      youtubeId: PropTypes.string,
      youtubeOptions: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    }).isRequired,
    alias: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReleasePage;

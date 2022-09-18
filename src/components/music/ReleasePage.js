import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import YouTubeEmbed from '../../embed/YouTube';
import BandcampEmbed from '../../embed/Bandcamp';
import SoundcloudEmbed from '../../embed/Soundcloud';

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
    bandcampOptions,
    soundcloudId,
    alias,
    slug,
  } = pageContext.releaseData;

  const artUrl = `/images/music/${pageContext.alias}/${slug}.jpg`;

  return (
    <div className="releasePage" style={{ backgroundImage: `url(${artUrl})` }}>
      <Header />
      <div className="releasePage-content">
        <div className="releasePage-headerContainer">
        <div className="releasePage-header">
          <h2 className="releasePage-alias">{pageContext.artistName.toLowerCase()}</h2>
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
        <div className="releasePage-embed">
        {bandcampId && <BandcampEmbed albumId={bandcampId} options={bandcampOptions} />}
        {youtubeId && <YouTubeEmbed videoId={youtubeId} options={youtubeOptions} />}
        {soundcloudId && <SoundcloudEmbed
          trackId={soundcloudId}
          title={title}
          artist={alias}
          artistName={pageContext.artistName}
          slug={slug}
          size='m'
        />}
        </div>
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
    artistName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReleasePage;

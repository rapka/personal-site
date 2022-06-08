import React from 'react';
import PropTypes from 'prop-types';
import ScreenshotCompare from './ScreenshotCompare';

import './DolphinMod.css';

function DolphinMod({
  title, downloadLink, images, gameId,
}) {
  const compareComponents = images.map((img) => (
    <ScreenshotCompare original={img.original} modded={img.modded} gameId={gameId} />
  ));

  return (
    <div className="dolphinMod">
      <h3>{title}</h3>
      <img
        className="dolphinMod-gameCover"
        src={`/public/images/covers/${gameId}.png`}
        alt={`${title} Game cover`}
      />
      {!!images.length && (
        <div className="dolphinMod-screenshotsSection">
          <div className="dolphinMod-screenshotsTitle">Screenshots</div>
          <div className="dolphinMod-screenshotsDesc">Hover or click to compare</div>
          <div className="dolphinMod-screenshots">{compareComponents}</div>
        </div>
      )}
      <a className="dolphinMod-download" href={downloadLink}>
        Download via Mega
      </a>
    </div>
  );
}

DolphinMod.propTypes = {
  title: PropTypes.string.isRequired,
  downloadLink: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      modded: PropTypes.string.isRequired,
    }),
  ),
};

DolphinMod.defaultProps = {
  images: [],
};

export default DolphinMod;

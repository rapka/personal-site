import React from 'react';
import PropTypes from 'prop-types';
import ScreenshotCompare from './ScreenshotCompare';

import './DolphinMod.css';

function DolphinMod({
  title, downloadLink, images, gameId,
}) {
  return (
    <div className="dolphinMod">
      <div className="dolphinMod-data">
        <a href={downloadLink}>
          <img
            className="dolphinMod-gameCover"
            target="_blank"
            src={`/images/covers/${gameId}.png`}
            alt={`${title} Game cover`}
          />
        </a>
        <div className="dolphinMod-dataText">
          <h3 className="dolphinMod-title">{title}</h3>
          <p className="dolphinMod-gameId">
            Game ID:
            {gameId}
          </p>
          <a className="dolphinMod-download" href={downloadLink} target="_blank" rel="noreferrer">
            Download
          </a>
        </div>
      </div>

      {!!images.length && (
        <div className="dolphinMod-screenshotsSection">
          <ScreenshotCompare images={images} gameId={gameId} />
        </div>
      )}
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

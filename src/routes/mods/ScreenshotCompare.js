import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ScreenshotCompare.css';

function ScreenshotCompare({ original, modded, gameId }) {
  const [active, setActive] = useState(false);

  return (
    <div className="screenshotCompare-container">
      <div
        className={classNames('screenshotCompare', { active })}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img
          src={`/public/images/screens/${gameId}/${original}`}
          className="screenshotCompare-original"
          alt="Original game screenshot"
        />
        <img
          src={`/public/images/screens/${gameId}/${modded}`}
          className="screenshotCompare-modded"
          alt="Modded game screenshot"
        />
      </div>
      <div className="screenshotCompare-label">{active ? 'HD textures' : 'original textures'}</div>
    </div>
  );
}

ScreenshotCompare.propTypes = {
  gameId: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  modded: PropTypes.string.isRequired,
};

export default ScreenshotCompare;

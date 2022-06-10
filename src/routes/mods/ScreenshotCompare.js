import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ScreenshotCompare.css';

function ScreenshotCompare({ gameId, images }) {
  const [active, setActive] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const thumbs = images.map((image, i) => (
    <img
      src={`/public/images/screens/${gameId}/${image.modded}`}
      key={i}
      className={classNames('screenshotCompare-thumb', { active: i === activeImage })}
      onClick={() => setActiveImage(i)}
    />
  ));

  return (
    <div className="screenshotCompare-container">
      <div className="dolphinMod-screenshotsDesc">Screenshots. Hover or click to compare</div>
      <div
        className={classNames('screenshotCompare', { active })}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img
          src={`/public/images/screens/${gameId}/${images[activeImage].original}`}
          className="screenshotCompare-original"
          alt="Original game screenshot"
        />
        <img
          src={`/public/images/screens/${gameId}/${images[activeImage].modded}`}
          className="screenshotCompare-modded"
          alt="Modded game screenshot"
        />
      </div>
      <div className="screenshotCompare-label">{active ? 'HD textures' : 'original textures'}</div>
      <div className="screenshotCompare-thumbContainer">{thumbs}</div>
    </div>
  );
}

ScreenshotCompare.propTypes = {
  gameId: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      modded: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ScreenshotCompare;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ClickableImage.css';

function ClickableImage({
  url, thumbnail, title, isFocused, onFocus, openModal,
}) {
  const imgUrl = thumbnail || url;

  const onClick = (event) => {
    event.preventDefault();
    onFocus();
    openModal();
  };

  const focusedOverlay = (
    <div className="clickableImage-focusedOverlay">
      {title && <div className="clickableImage-title">{title}</div>}
      <div
        className="clickableImage-fullSize"
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex="0"
      >
        Full size
      </div>
    </div>
  );

  return (
    <div className={classNames('clickableImage', { isFocused })}>
      <div className="clickableImage-container">
        <img
          src={imgUrl}
          alt={title || 'Game screenshot'}
          className="clickableImage-img"
          style={{ backgroundImage: imgUrl }}
        />
        {false && (
          <div className="clickableImage-img" style={{ backgroundImage: `url(${imgUrl})` }} />
        )}
        {true && focusedOverlay}
      </div>
    </div>
  );
}

ClickableImage.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
};

ClickableImage.defaultProps = {
  title: '',
  url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
  thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
};

export default ClickableImage;

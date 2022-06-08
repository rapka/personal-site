import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ClickableImage from './ClickableImage.js';

import './Gallery.css';

function Gallery({
  title,
  images,
  description,
  year,
  openModal,
  activeImage,
  onFocus,
  expanded,
  id,
}) {
  const MAX_IMAGES = 8;

  const imageComponents = images.map((imageProps, i) => (
    <div className="galleryItem">
      <ClickableImage
        isFocused={activeImage === i}
        onFocus={() => onFocus(i)}
        openModal={openModal}
        {...imageProps}
      />
    </div>
  ));

  return (
    <div className="galleryItem-container">
      <div className="galleryItem-row f-row">
        <h2 className="galleryItem-title">{title}</h2>
        <div className="galleryItem-label">
          {!!year && <div className="galleryItem-divider">|</div>}
          {!!year && <div className="galleryItem-year">{year}</div>}
        </div>
      </div>
      <div className="galleryItem-description">{description}</div>
      <div className="galleryItem-images">
        {expanded ? imageComponents : imageComponents.slice(0, MAX_IMAGES)}
      </div>
      {!expanded && (
        <Link className="galleryItem-viewMore" to={`/virtual-photography/${id}`}>
          View More &gt;&gt;
        </Link>
      )}
    </div>
  );
}

Gallery.propTypes = {
  expanded: PropTypes.bool,
  activeImage: PropTypes.number.isRequired,
  onFocus: PropTypes.func,
  openModal: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
  year: PropTypes.number,
  id: PropTypes.string.isRequired,
};

Gallery.defaultProps = {
  expanded: false,
  year: 0,
  description: '',
  images: '',
  id: '',
};

export default Gallery;

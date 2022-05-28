import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClickableImage from './ClickableImage.js';

import './Gallery.css';


function Gallery({
  title, images, description, year, location, maxColumns, openModal, activeImage, onFocus, expanded
}) {
  const MAX_IMAGES = maxColumns * 2;

  const imageComponents = images.map((imageProps, i) => (
    <div className="galleryItem" style={{ flex: `0 1 ${100 / maxColumns}%` }}>
      <ClickableImage
        isFocused={activeImage === i}
        onFocus={() => onFocus(i)}
        openModal={openModal}
        maxColumns={maxColumns}
        {...imageProps}
      />
    </div>
  ));

  return (
    <div className="react-portfolio-gallery">
      <div className="galleryItem-row">
      <h2 className="galleryItem-title">{title}</h2>
      <div className="galleryItem-label">
        {location && <div className="galleryItem-location">{location}</div>}
        {!!year && <div className="galleryItem-divider">|</div>}
        {!!year && <div className="galleryItem-year">{year}</div>}
      </div>
      </div>
      <div className="galleryItem-description">{description}</div>
      <div className="galleryItem-images">
        {expanded ? imageComponents : imageComponents.slice(0, MAX_IMAGES)}
      </div>
      {!expanded && <div className="galleryItem-viewMore">View More >></div>}
    </div>
  );
}

Gallery.propTypes = {
  expanded: PropTypes.bool,
  activeImage: PropTypes.number.isRequired,
  onFocus: PropTypes.func,
  openModal: PropTypes.func,
  maxColumns: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
  year: PropTypes.number,
  location: PropTypes.string,
};

Gallery.defaultProps = {
  expanded: false,
  maxColumns: 4,
  year: 0,
  description: '',
  images: '',
  location: '',
};

export default Gallery;

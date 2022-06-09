import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shuffle from 'lodash/shuffle';
import ClickableImage from './ClickableImage';

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

  const [shuffled, setShuffled] = useState([]);

  if (!expanded && !shuffled.length) {
    setShuffled(shuffle(imageComponents).slice(0, MAX_IMAGES));
  }

  return (
    <div className="galleryItem-container">
      <div className="galleryItem-row">
        <h2 className="galleryItem-title">{title}</h2>
        {!!year && <div className="galleryItem-year">({year})</div>}
      </div>
      <div className="galleryItem-description">{description}</div>
      <div className="galleryItem-images">{expanded ? imageComponents : shuffled}</div>
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

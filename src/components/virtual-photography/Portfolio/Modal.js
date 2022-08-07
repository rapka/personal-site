import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

function Modal({
  title, description, url, thumbnail, closeModal, year, index, maxImages, openImage,
}) {
  const nextPage = () => {
    if (index <= (maxImages - 1)) {
      openImage(null, index + 1);
    }
  };

  const prevPage = () => {
    if (index > 0) {
      openImage(null, index - 1);
    }
  };

  return (
    <div className="modal-contents">
      <button type="button" className="modal-closeButton" onClick={closeModal}>
        close
      </button>
      <div className="modal-counter">
        {`${index}/${maxImages}`}
      </div>
      <div className="modal-imageText">
        {title && <div className="modal-imageTitle">{title}</div>}
        {year && <div className="modal-imageYear">{year}</div>}
        {description && <div className="modal-imageDesc">{description}</div>}
      </div>
      <div className="modal-imageContainer">
        <img className="modal-imageGlow" src={url} alt="" />
        <img className="modal-image" src={url} alt={title} />
      </div>

      <div className="modal-pageButtons">
        <button
          className="modal-pageButton"
          type="button"
          onClick={prevPage}
        >
          prev
        </button>
        <button
          className="modal-pageButton"
          type="button"
          onClick={nextPage}
        >
          next
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  openImage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
  year: PropTypes.string,
  index: PropTypes.number.isRequired,
  maxImages: PropTypes.number.isRequired,
};

Modal.defaultProps = {
  title: '',
  description: '',
  url: '',
  thumbnail: '',
  year: '',
};

export default Modal;

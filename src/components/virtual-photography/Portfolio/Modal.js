import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

function Modal({
  title, description, url, thumbnail, closeModal, year, index, maxImages,
}) {
  return (
    <div className="modal-contents">
      <button type="button" className="modal-closeButton" onClick={closeModal}>
        (close)
      </button>
      <div className="modal-counter">
        {`${index}/${maxImages}`}
      </div>
      <div className="modal-imageText">
        <div className="modal-imageTitle">{title}</div>
        <div className="modal-imageYear">{year}</div>
        <div className="modal-imageDesc">{description}</div>
      </div>
      <div className="modal-imageContainer">
        <img className="modal-imageGlow" src={url} alt="" />
        <img className="modal-imageThumb" src={thumbnail} alt={title} />
        <img className="modal-image" src={url} alt={title} />
      </div>

      <form>
        <button type="button">prev</button>
        <button type="button">next</button>
      </form>
    </div>
  );
}

Modal.propTypes = {
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

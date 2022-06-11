import React from 'react';
import PropTypes from 'prop-types';
import Gallery from './Gallery.js';

import './Modal.css';

function Modal({
  title, description, url, thumbnail, closeModal, year,
}) {
  return (
    <div className="modal-contents">
      <button className="modal-closeButton" onClick={closeModal}>
        (close)
      </button>
      <div className="modal-imageText">
        <div className="modal-imageTitle">{title}</div>
        <div className="modal-imageYear">{year}</div>
        <div className="modal-imageDesc">{description}</div>
      </div>
      <div className="modal-imageContainer">
        <img className="modal-imageGlow" src={url} />
        <img className="modal-image" src={url} />
      </div>

      <form>
        <button>prev</button>
        <button>next</button>
      </form>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Modal;

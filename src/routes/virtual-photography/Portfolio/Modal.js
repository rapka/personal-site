import React from 'react';
import PropTypes from 'prop-types';
import Gallery from './Gallery.js';

import './Modal.css';

function Modal({
  title, description, url, thumbnail, closeModal, year,
}) {
  return (
    <div className="reactPortfolio-modalContents" onClick={closeModal}>
      <button className="reactPortfolio-modalCloseButton" onClick={closeModal}>(close)</button>
      <div className="reactPortfolio-modalImageText">
        <div>{title}</div>
        <div>{year}</div>
        <div>{description}</div>
      </div>
      <div className="reactPortfolio-modalImageContainer">
        <img className="reactPortfolio-modalImageGlow" src={url} />
        <img className="reactPortfolio-modalImage" src={url} />
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

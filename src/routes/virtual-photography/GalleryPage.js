import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import each from 'lodash/each';
import Modal from './Portfolio/Modal.js';
import Gallery from './Portfolio/Gallery.js';

import config from './config.json';

function GalleryPage({ galleryKey }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(-1);

  const openModal = () => {
    setIsOpen(true);
  };


  function openImage(galleryIndex, imageIndex) {
    setActiveGallery(galleryIndex);
    setActiveImage(imageIndex);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="react-portfolio" id="react-portfolio" style={style}>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="reactPortfolio-modal"
        contentLabel={`${activeImageData ? activeImageData.title : 'Closed'} Modal`}
        appElement={document.getElementById('react-portfolio')}
      >
        {activeImageData && <Modal closeModal={closeModal} {...activeImageData} />}
      </ReactModal>
      <div>
        <Gallery
          expanded={true}
          {...config.galleries[activeGallery || 'gotg']}
          maxColumns={8}
          openModal={openModal}
          onFocus={openImage.bind(null, index)}
          activeImage={activeImage}
        />
      </div>
    </div>
  );
}

GalleryPage.propTypes = {
  galleryKey: PropTypes.string.isRequired,
};


export default GalleryPage;

import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import Header from '../../Header';
import Modal from './Portfolio/Modal';
import Gallery from './Portfolio/Gallery';

import './VirtualPhotography.css';

import config from './config.json';

function GalleryPage() {
  const { galleryKey } = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(-1);

  const galleryData = config.galleries[galleryKey];
  const activeImageData = galleryData[activeImage];

  const openModal = () => {
    setIsOpen(true);
  };

  const openImage = (imageIndex) => {
    setActiveImage(imageIndex);
  };

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const contentLabel = `${activeImageData ? activeImageData.title : 'Closed'} Modal`;

  return (
    <div className="virtualPhotography" id="galleryPage">
      <Header />
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="reactPortfolio-modal"
        contentLabel={contentLabel}
        appElement={document.getElementById('react-portfolio')}
      >
        {activeImageData && <Modal closeModal={closeModal} {...activeImageData} />}
      </ReactModal>
      <div>
        <Gallery
          expanded
          {...galleryData}
          openModal={openModal}
          onFocus={openImage}
          activeImage={activeImage}
        />
      </div>
    </div>
  );
}

export default GalleryPage;

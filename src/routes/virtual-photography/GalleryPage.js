import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import each from 'lodash/each';
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

  console.log('fff', galleryData);

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

  return (
    <div className="virtualPhotography" id="react-portfolio">
      <Header />
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
          expanded
          {...galleryData}
          maxColumns={8}
          openModal={openModal}
          onFocus={openImage}
          activeImage={activeImage}
        />
      </div>
    </div>
  );
}

export default GalleryPage;

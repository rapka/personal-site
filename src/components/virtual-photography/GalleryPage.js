import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import isEmpty from 'lodash/isEmpty';

import Header from '../Header';
import Modal from './Portfolio/Modal';
import Gallery from './Portfolio/Gallery';

import '../../pages/VirtualPhotography.scss';

import config from '../../photos.json';

function GalleryPage({ pageContext }) {
  let appElement;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(-1);
  const { galleryKey } = pageContext;

  const galleryData = galleryKey === '/*' ? config.galleries['elden-ring-npcs'] : config.galleries[galleryKey];
  const activeImageData = activeImage === -1 ? {} : galleryData.images[activeImage];

  const openModal = () => {
    setIsOpen(true);
  };

  const openImage = (imageIndex, arg2) => {
    setActiveImage(arg2);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const contentLabel = `${activeImageData ? activeImageData.title : 'Closed'} Modal`;

  useEffect(() => {
    appElement = document.getElementById('react-portfolio');
  });

  let renderModal;
  if (activeImage !== -1 && !isEmpty(activeImageData)) {
    renderModal = (
      <Modal
        openImage={openImage}
        closeModal={closeModal}
        index={activeImage}
        maxImages={galleryData.images.length}
        {...activeImageData}
      />
    );
  }

  return (
    <div className="virtualPhotography" id="galleryPage">
      <Header />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="reactPortfolio-modal"
        contentLabel={contentLabel}
        appElement={appElement}
      >
        {!isEmpty(activeImageData) && renderModal}
      </ReactModal>
      <div>
        <Gallery
          expanded
          {...galleryData}
          id={galleryKey}
          openModal={openModal}
          onFocus={openImage}
          activeImage={activeImage}
        />
      </div>
    </div>
  );
}

GalleryPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default GalleryPage;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import isEmpty from 'lodash/isEmpty';
import Header from '../Header';
import Modal from './Portfolio/Modal';
import Gallery from './Portfolio/Gallery';

import '../../pages/VirtualPhotography.scss';

import config from '../../photos.json';

function GalleryPage({ path }) {
  console.log('gp', path);
  let appElement;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(-1);

  const galleryData = path == '/*' ? config.galleries['elden-ring-npcs'] : config.galleries[path];
  const activeImageData = activeImage === -1 ? {} : galleryData[activeImage];

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

  useEffect(() => {
    appElement = document.getElementById('react-portfolio');
  });

  return (
    <div className="virtualPhotography" id="galleryPage">
      <Header />
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="reactPortfolio-modal"
        contentLabel={contentLabel}
        appElement={appElement}
      >
        {!isEmpty(activeImageData) && <Modal closeModal={closeModal} {...activeImageData} />}
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

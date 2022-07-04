import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import each from 'lodash/each';
import isEmpty from 'lodash/isEmpty';
import Modal from './Modal';
import Gallery from './Gallery';

import './Portfolio.css';

function Portfolio({ galleries }) {
  let appElement;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(-1);
  const [activeGallery, setActiveGallery] = React.useState(Object.keys(galleries)[0] || '');
  // Modal.setAppElement('#react-portfolio');

  const openModal = () => {
    setIsOpen(true);
  };

  const activeImageData = activeImage > -1 && activeGallery
    ? galleries[activeGallery].images[activeImage] : {};

  const openImage = (galleryIndex, imageIndex) => {
    setActiveGallery(galleryIndex);
    setActiveImage(imageIndex);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  const contentLabel = `${activeImageData ? activeImageData.title : 'Closed'} Modal`;
  useEffect(() => {
    appElement = document.getElementById('react-portfolio');
  });

  const galleryComponents = [];
  each(galleries, (galleryData, key) => galleryComponents.push(
    <Gallery
      expanded={false}
      key={key}
      id={key}
      title={galleryData.title}
      description={galleryData.description}
      year={galleryData.year}
      images={galleryData.images}
      openModal={openModal}
      onFocus={openImage}
      activeImage={activeGallery === key ? activeImage : -1}
    />,
  ));

  const renderModal = () => {
    if (!activeGallery || !isEmpty(activeImageData)) {
      return null;
    }

    return (
      <Modal
        closeModal={closeModal}
        index={activeImage}
        maxImages={galleries[activeGallery].images.legnth}
        {...activeImageData}
      />
    );
  };

  return (
    <div className="react-portfolio" id="react-portfolio">
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="reactPortfolio-modal"
        contentLabel={contentLabel}
        appElement={appElement}
      >
        {renderModal}
      </ReactModal>
      {!!galleryComponents.length && <div>{galleryComponents}</div>}
    </div>
  );
}

Portfolio.propTypes = {
  galleries: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
    })),
  }),
};

Portfolio.defaultProps = {
  galleries: {},
};

export default Portfolio;

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
  const [activeGallery, setActiveGallery] = React.useState('');
  // Modal.setAppElement('#react-portfolio');

  const openModal = () => {
    setIsOpen(true);
  };

  const activeImageData = activeImage > -1 && activeGallery ? galleries[activeGallery].images[activeImage] : {};

  function openImage(galleryIndex, imageIndex) {
    setActiveGallery(galleryIndex);
    setActiveImage(imageIndex);
  }

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
      onFocus={openImage.bind(null, key)}
      activeImage={activeGallery === key ? activeImage : -1}
    />,
  ));

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
        {!isEmpty(activeImageData) && <Modal closeModal={closeModal} {...activeImageData} />}
      </ReactModal>
      {!!galleryComponents.length && <div>{galleryComponents}</div>}
    </div>
  );
}

Portfolio.propTypes = {
  galleries: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.array,
  }),
};

Portfolio.defaultProps = {
  galleries: {},
};

export default Portfolio;

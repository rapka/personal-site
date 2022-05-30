import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import each from 'lodash/each';
import Modal from './Modal.js';
import Gallery from './Gallery.js';

import './Portfolio.css';

const customStyles = {

};

function Portfolio({ galleries, style }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(-1);
  const [activeGallery, setActiveGallery] = React.useState('');
  // Modal.setAppElement('#react-portfolio');

  const openModal = () => {
    setIsOpen(true);
  };

  const activeImageData = (activeImage > -1 && activeGallery) ? galleries[activeGallery].images[activeImage] : null;

  console.log('hihi222', activeImage, activeGallery, galleries, activeImageData);
  let subtitle;
  const galleryComponents = [];
  each(galleries, (galleryData, key) => galleryComponents.push((
    <Gallery
      expanded={false}
      key={key}
      id={key}
      {...galleryData}
      openModal={openModal}
      onFocus={openImage.bind(null, key)}
      activeImage={activeGallery === key ? activeImage : -1}
    />
  )));

  function openImage(galleryIndex, imageIndex) {
    setActiveGallery(galleryIndex);
    console.log('imageData', galleryIndex, imageIndex);
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
        {galleryComponents}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  galleries: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.array,
  }),
  style: PropTypes.object,
};

Portfolio.defaultProps = {
  galleries: {},
  style: {},
};

export default Portfolio;

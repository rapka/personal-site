import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import isEmpty from 'lodash/isEmpty';
import Header from '../Header';

import '../../pages/VirtualPhotography.scss';

import config from '../../photos.json';

function ReleasePage({ path, releaseData }) {
  console.log('gp', path);

  return (
    <div className="virtualPhotography" id="galleryPage">
      <Header />
      {JSON.stringify(releaseData, null, 2)}
    </div>
  );
}

ReleasePage.propTypes = {
  releaseData: PropTypes.object.isRequired,
};

export default ReleasePage;

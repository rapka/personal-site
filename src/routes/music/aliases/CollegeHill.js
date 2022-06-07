import React from 'react';
import PropTypes from 'prop-types';
import AlbumEmbed from '../AlbumEmbed';

import './AliasSection.css';
import './CollegeHill.css';

function CollegeHill() {
  return (
    <section className="alias-container" id="alias-collegehill">
      <h3 className="alias-title">College Hill</h3>
      Original Work
      <h4 className="alias-releaseType">Albums</h4>
      Overground Underground
      <AlbumEmbed youtubeId="wVvy1dLo19s" />
      <AlbumEmbed
        youtubeId="wVvy1dLo19s"
        bandcampId="948407697"
        bandcampOptions={{ size: 'medium' }}
      />
      <AlbumEmbed bandcampId="948407697" bandcampOptions={{ size: 'large' }} />
      A Stranger in Gotham
      <h4 className="alias-releaseType">EPs</h4>
      <h4 className="alias-releaseType">Singles</h4>
      <h4 className="alias-releaseType">Remixes</h4>
      <h4 className="alias-releaseType">Mixes</h4>
    </section>
  );
}

CollegeHill.propTypes = {};

CollegeHill.defaultProps = {};

export default CollegeHill;

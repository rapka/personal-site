import React from 'react';
import AlbumEmbed from '../AlbumEmbed';

import './AliasSection.css';
import './CollegeHill.css';

function CollegeHill() {
  return (
    <section className="alias-container" id="alias-collegehill">
      <h3 className="alias-title">College Hill</h3>
      <h5 className="alias-description">
        Primary alias for releasing music.
        Grime / Dubstep / Bass / Baltimore Club / Trap / etc
      </h5>
      Original Work
      <h4 className="alias-releaseType">Albums</h4>
      <div className="alias-albumContainer">
        <AlbumEmbed
          bandcampId="3658324833"
          bandcampOptions={{ size: 'large' }}
          title="Rico Suavve Phaze 1: A Stranger In Gotham"
          genres={['Trap', 'Hip-Hop', 'Instrumental']}
          year={2017}
        />
        <AlbumEmbed
          youtubeId="wVvy1dLo19s"
          bandcampId="948407697"
          bandcampOptions={{ size: 'medium' }}
          title="Overground Underground"
          genres={['Mashup']}
          year={2019}
        />
      </div>

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

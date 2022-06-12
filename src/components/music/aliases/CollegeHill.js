import React from 'react';
import AlbumEmbed from '../AlbumEmbed';
import musicData from '../../../musicData.json';

import './AliasSection.scss';
import './CollegeHill.css';

function CollegeHill() {
  const albumComponents = musicData['college-hill'].albums.map(releaseData => <AlbumEmbed {...releaseData} />);
  const epComponents = musicData['college-hill'].eps.map(releaseData => <AlbumEmbed {...releaseData} />);
  const singleComponents = musicData['college-hill'].singles.map(releaseData => <AlbumEmbed {...releaseData} />);

  return (
    <section className="alias-container" id="alias-collegehill">
      <h3 className="alias-title">College Hill</h3>
      <h5 className="alias-description">
        Primary alias for releasing music. Grime / Dubstep / Bass / Baltimore Club / Trap / etc
      </h5>
      Original Work
      <h4 className="alias-releaseType">Albums</h4>
      <div className="alias-releases alias-albums">
        {albumComponents}
      </div>
      <h4 className="alias-releaseType">EPs</h4>
      <div className="alias-releases alias-eps">
        {epComponents}
      </div>
      <h4 className="alias-releaseType">Singles</h4>
      <div className="alias-releases alias-singles">
        {singleComponents}
      </div>
      <h4 className="alias-releaseType">Remixes</h4>
      <h4 className="alias-releaseType">Mixes</h4>
    </section>
  );
}

CollegeHill.propTypes = {};

CollegeHill.defaultProps = {};

export default CollegeHill;

import React from 'react';
import AlbumEmbed from '../AlbumEmbed';
import musicData from '../../../musicData.json';

import './AliasSection.scss';
import './CollegeHill.scss';

function CollegeHill() {
  const albumComponents = musicData['college-hill'].album.map((releaseData) => (
    <AlbumEmbed {...releaseData} type="album" alias="college-hill" size="large" />
  ));
  const epComponents = musicData['college-hill'].ep.map((releaseData) => (
    <AlbumEmbed {...releaseData} type="ep" alias="college-hill" size="medium" />
  ));
  const singleComponents = musicData['college-hill'].single.map((releaseData) => (
    <AlbumEmbed {...releaseData} type="single" alias="college-hill" size="small" />
  ));

  return (
    <section className="alias-container" id="alias-collegehill">
      <h3 className="alias-description">
        Primary alias for releasing music. Genres: Grime / Dubstep / Bass / Baltimore Club / Trap /
        etc
      </h3>
      <h4 className="alias-releaseType">Albums</h4>
      <div className="alias-releases alias-albums">{albumComponents}</div>
      <h4 className="alias-releaseType">EPs</h4>
      <div className="alias-releases alias-eps">{epComponents}</div>
      <h4 className="alias-releaseType">Singles</h4>
      <div className="alias-releases alias-singles">{singleComponents}</div>
      <h4 className="alias-releaseType">Remixes</h4>
      <h4 className="alias-releaseType">Mixes</h4>
    </section>
  );
}

CollegeHill.propTypes = {};

CollegeHill.defaultProps = {};

export default CollegeHill;

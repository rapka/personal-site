import React from 'react';

import './AliasSection.scss';
import './Morphologist.scss';
import MorphologistAlbum from '../MorphologistAlbum';

function Morphologist() {
  return (
    <section className="alias-container" id="alias-morphologist">
      <h4 className="alias-title">Morphologist</h4>
      <h5 className="alias-description">Acid Techno.</h5>
      <MorphologistAlbum
        title="Extant Africana"
        year={2023}
        month="May"
        day={5}
        tracks={[
          'Southern Rhinocerous',
          'Silverback',
          'Impala',
          'Hyena',
          'King Cheetah',
          'Wildebeest',
          'Plains Zebra',
          'Bush Elephant'
        ]}
      />
      {/*<MorphologistAlbum
        title="Extant Americana"
        year={2023}
        month="June"
        day={19}
        tracks={[
          'Lynx',
          'Diamondback',
          'Bark Scorpion',
          'Coyote',
          'Peregrine',
          'Nine-Banded',
          'Bald Eagle',
          'Mustang'
        ]}
      />*/}
    </section>
  );
}

Morphologist.propTypes = {};

Morphologist.defaultProps = {};

export default Morphologist;

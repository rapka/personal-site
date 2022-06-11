import React from 'react';
import Header from '../components/Header';
import AliasSelector from '../components/music/AliasSelector';
import CollegeHillSection from '../components/music/aliases/CollegeHill';
import MorphologistSection from '../components/music/aliases/Morphologist';
import FurySection from '../components/music/aliases/Fury';

import './Music.scss';

function Music() {
  const labels = ['College Hill', 'Morphologist', 'Fury'];
  const [activeAlias, setActiveAlias] = React.useState('College Hill');

  return (
    <div className={`musicSection musicSection-${activeAlias.replace(' ', '-')}`}>
      <Header />
      <AliasSelector
        labels={labels}
        activeAlias={activeAlias}
        onChange={(l) => setActiveAlias(l)}
      />
      {activeAlias === 'College Hill' && <CollegeHillSection />}
      {activeAlias === 'Morphologist' && <MorphologistSection />}
      {activeAlias === 'Fury' && <FurySection />}
    </div>
  );
}

export default Music;

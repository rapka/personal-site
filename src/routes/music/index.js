import React from 'react';
import Header from '../../Header';
import AliasSelector from './AliasSelector';
import CollegeHillSection from './aliases/CollegeHill';
import MorphologistSection from './aliases/Morphologist';
import FurySection from './aliases/Fury';

function Music() {
  const labels = ['College Hill', 'Morphologist', 'Fury'];
  const [activeAlias, setActiveAlias] = React.useState('College Hill');

  return (
    <div>
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

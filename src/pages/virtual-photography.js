import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/virtual-photography/Portfolio/Portfolio';

import './VirtualPhotography.scss';

import config from '../photos.json';

function App() {
  return (
    <div className="virtualPhotography">
      <Header />
      <Portfolio {...config} />
    </div>
  );
}

export default App;

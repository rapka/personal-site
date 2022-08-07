import React from 'react';
import Portfolio from '../components/virtual-photography/Portfolio/Portfolio';
import Header from '../components/Header';

import config from '../photos.json';

import './VirtualPhotography.scss';

function App() {
  return (
    <div className="virtualPhotography">
      <Header />
      <h2 className="virtualPhotography-title">Video Game Photography</h2>
      <Portfolio {...config} />
    </div>
  );
}

export default App;

import React from 'react';
import Portfolio from './Portfolio/Portfolio';
import Header from '../../Header';

import config from './config.json';

import './VirtualPhotography.css';

function App() {
  return (
    <div className="virtualPhotography">
      <Header />
      <Portfolio {...config} />
    </div>
  );
}

export default App;

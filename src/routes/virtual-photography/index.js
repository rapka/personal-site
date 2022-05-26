import React from 'react';
import Portfolio from './Portfolio/Portfolio';
import Header from '../../Header';

import config from './config.json';

const style = {
  background: 'black',
  color: '#F03E88',
}

function App() {
  return (
    <div >
      <Header />
      <Portfolio {...config} style={style} />
    </div>
  );
}

export default App;

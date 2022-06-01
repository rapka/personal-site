import React, { useState, useCallback, useEffect } from 'react';
import set from 'lodash/set';

import Cover from './Cover';
import Scope from './Scope';
import Background from './Background';
import Snow from './Snow';

import config from './config';

import './App.css';

function App() {
  const [playing, setPlaying] = useState(false);

  const playFunction = useCallback((event) => {
    if(event.keyCode === 32) {
      event.preventDefault();
      setPlaying(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", playFunction, false);

    return () => {
      document.removeEventListener("keydown", playFunction, false);
    };
  }, [playFunction]);

  const { artist, title, art, scopes } = config;

  return (
    <div className="App">
      <Scope playing={playing} audioSrc={passion.wav} {...scopes} />
      <Background />
      <Cover
        playing={playing}
        backwards={art.backwards}
        rotationDuration={art.rotationDuration}
        coverUrl={art.file}
      />
    </div>
  );
}

export default App;

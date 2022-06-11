import React from 'react';
import { Router, Link, Location } from '@reach/router';
import Header from '../components/Header';

function App() {
  return (
    <div>
      <Header />
      Resume see more at
      {' '}
      <Link to="/projects">/projects</Link>
    </div>
  );
}

export default App;

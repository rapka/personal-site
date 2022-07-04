import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

function App() {
  return (
    <div>
      <Header />
      <p>
        TODO
        <br />
        See more at
        {' '}
        <Link to="/projects">/projects</Link>
      </p>
    </div>
  );
}

export default App;

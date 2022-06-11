import React from 'react';
import Header from '../components/Header';
import { Router, Link, Location } from "@reach/router"

function App() {
  return (
    <div>
      <Header />
      Resume see more at <Link to="/projects">/projects</Link>
    </div>
  );
}

export default App;

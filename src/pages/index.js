import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

import './index.scss';

function IndexPage() {
  return (
    <>
      <title>Home Page</title>
      <Header />
      <br />
      <main className="indexPage">
        <h3>hi</h3>
        <p>my name's Rae and this is my website</p>
        <p>
          i make things like
          <br />
          <br />
          <Link to="/music/">electronic music</Link>
          <br />
          <br />
          <Link to="/dev/">code</Link>
          <br />
          <br />
          <Link to="/mods/">video game mods</Link>
          <br />
          <br />
          <Link to="/virtual-photography/">video game screenshots</Link>
        </p>
      </main>
    </>
  );
}

export default IndexPage;

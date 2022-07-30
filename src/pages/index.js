import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

import './index.scss';

function IndexPage() {
  return (
    <>
      <title>Home Page</title>
      <Header />
      <main className="indexPage">
        <br />
        <h3>Hello, friend!</h3>
        <h3>This is the personal website for Richard &quot;College Hill&quot; Adjogah.</h3>
        <p>
          I love
          {' '}
          <Link to="/music/">making music</Link>
          ,
          {' '}
          <Link to="/dev/">writing code</Link>
          , and
          {' '}
          <Link to="/mods/">video games</Link>
        </p>
      </main>
    </>
  );
}

export default IndexPage;

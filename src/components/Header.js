import React from 'react';
import { Router, Link, Location } from '@reach/router';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">root</Link>
      <Link to="/music/">music</Link>
      <Link to="/dev/">development</Link>
      <Link to="/mods/">game modding</Link>
      <Link to="/resume/">resume</Link>
      <Link to="/virtual-photography/">virtual photography</Link>
      <Link to="/amvs/">amvs</Link>
    </header>
  );
}

export default Header;

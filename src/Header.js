import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">root</Link>
      <Link to="/music">music</Link>
      <Link to="/mods">game modding</Link>
      <Link to="/resume">resume</Link>
      <Link to="/virtual-photography">virtual photography</Link>
    </header>
  );
}

export default Header;

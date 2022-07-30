import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Link to="/">home</Link>
      <Link to="/music/">music</Link>
      <Link to="/dev/">development</Link>
      <Link to="/mods/">game modding</Link>
      <Link to="/virtual-photography/">virtual photography</Link>
    </header>
  );
}

export default Header;

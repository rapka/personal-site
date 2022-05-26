import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Gear from './img/gear.svg';

import './Header.css';

const markdownLinkToHref = (str) => str.replace(/\[(.*)\]\((.*)\)/, '<a href="$2">$1</a>');

function Header() {
  return (
    <header className="wordleHeader">
      <Link to="/">root</Link>
      <Link to="/music">music</Link>
      <Link to="/mods">game modding</Link>
      <Link to="/resume">resume</Link>
      <Link to="/virtual-photography">virtual photography</Link>
    </header>
  );
}

export default Header;

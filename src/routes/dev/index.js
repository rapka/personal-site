import React from 'react';
import Header from '../../Header';
import Scope from '../../viz/Scope';

import './Dev.css';

function Dev() {
  return (
    <div className="devPage">
      <Header />
      TODO Dev
      <ul>
      <li>
      <a href="https://grimearchive.org" className="devPage-siteTitle">
        grimearchive.org
      </a>
      </li>
      <li>
      <a href="wordlebookmarks.app" className="devPage-siteTitle">
        wordlebookmarks.app
      </a>
      </li>
      <li>
      <a href="https://bloodfrenzy.club/" className="devPage-siteTitle">
        bloodfrenzy.club/
      </a>
      </li>
      <li>
      hyperbreeder
      </li>
      <li>
      esrgan
      </li>
      <li>scope example
      <Scope />
      </li>
      </ul>
    </div>
  );
}

export default Dev;

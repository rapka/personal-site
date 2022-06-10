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
        <li className="devPage-item">
          <a href="https://grimearchive.org" className="devPage-siteTitle">
            grimearchive.org
          </a>
          <ul className="devPage-siteDetails">
            <li>2015-present</li>
            <li>
              Website for hosting and cataloging recording of live grime performances and radio
              shows.
            </li>
          </ul>
        </li>
        <li className="devPage-item">
          <a href="wordlebookmarks.app" className="devPage-siteTitle">
            wordlebookmarks.app
          </a>
        </li>
        <li className="devPage-item">
          <a href="https://bloodfrenzy.club/" className="devPage-siteTitle">
            bloodfrenzy.club/
          </a>
        </li>
        <li className="devPage-item">hyperbreeder</li>
        <li>esrgan</li>
        <li>
          scope example
          <Scope />
        </li>
      </ul>
    </div>
  );
}

export default Dev;

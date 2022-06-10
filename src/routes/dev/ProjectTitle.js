import React from 'react';
import Header from '../../Header';
import Scope from '../../viz/Scope';

import './ProjectTitle.css';

function ProjectTitle({
  title, url, year, githubUrl,
}) {
  return (
    <div className="projTitle-container">
      {title ? (
        <a href="https://grimearchive.org" className="projTitle">
          {title}
        </a>
      ) : (
        { title }
      )}
      <div className="projTitle-year">
        (
        {year}
        )
      </div>
      <div className="projTitle-github">
        (
        <a href={`https://github.com/rapka/${githubUrl}`} className="projTitle-githubLink">
          github repo
        </a>
        )
      </div>
    </div>
  );
}

export default ProjectTitle;

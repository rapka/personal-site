import React from 'react';
import PropTypes from 'prop-types';

import './ProjectTitle.css';

function ProjectTitle({
  title, url, year, githubUrl,
}) {
  const titleElem = url ? (
    <a href={url} className="projTitle">
      {title}
    </a>
  ) : (
    <div className="projTitle">{title}</div>
  );

  return (
    <div className="projTitle-container">
      {titleElem}
      <div className="projTitle-year">
        (
        {year}
        )
      </div>
      <div className="projTitle-github">
        (
        <a href={`https://github.com/rapka/${githubUrl}`} className="projTitle-githubLink">
          github
        </a>
        )
      </div>
    </div>
  );
}

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  githubUrl: PropTypes.string.isRequired,
  url: PropTypes.string,
};

ProjectTitle.defaultProps = {
  year: '',
  url: '',
};

export default ProjectTitle;

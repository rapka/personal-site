import React from 'react';
import PropTypes from 'prop-types';
import each from 'lodash/each';
import classNames from 'classnames';

import './AliasSelector.css';

function AliasSelector({ onChange, labels, activeAlias }) {
  const options = [];

  each(labels, (label, i) => {
    if (i > 0) {
      options.push(
        <div
          className="aliasOption-divider"
          key={`divider-${i}`}
        >
          aka
        </div>,
      );
    }

    options.push(
      <button
        className={classNames('aliasOption', { selected: label === activeAlias })}
        key={label}
        onClick={() => {
          onChange(label);
        }}
      >
        {label}
      </button>,
    );
  });

  return (
    <div className="aliasSelector-container" id="alias-collegehill">
      {options}
    </div>
  );
}

AliasSelector.propTypes = {
  onChange: PropTypes.func,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeAlias: PropTypes.string,
};

AliasSelector.defaultProps = {
  activeAlias: 'College Hill',
  onChange: () => {},
};

export default AliasSelector;

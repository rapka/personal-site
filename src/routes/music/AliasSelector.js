import React from 'react';
import PropTypes from 'prop-types';
import each from 'lodash/each';
import classNames from 'classnames';

import './AliasSelector.css';

function AliasSelector({ onChange, labels, activeAlias }) {
  const options = [];

  each(labels, (label, i) => options.push(
    <div
      className={classNames('aliasOption', { selected: label === activeAlias })}
      key={label}
      onClick={() => {
        console.log('you', label);
        onChange(label);
      }}
    >
      {label}
    </div>,
  ));

  return (
    <div className="aliasSelector-container" id="alias-collegehill">
      {options}
    </div>
  );
}

AliasSelector.propTypes = {
  onChange: PropTypes.func,
  labels: PropTypes.arrayOf(PropTypes.string),
  activeAlias: PropTypes.string,
};

AliasSelector.defaultProps = {
  activeAlias: 'College Hill',
};

export default AliasSelector;

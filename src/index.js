/* eslint import/extensions: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

const styleElement = document.createElement('style');
document.head.appendChild(styleElement);

ReactDOM.render(<App />, document.querySelector('#root'));

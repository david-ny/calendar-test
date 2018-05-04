// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const appNode = document.getElementById('app');

ReactDOM.render(
  <App />,
  appNode,
);

if (module.hot) {
  module.hot.accept();
}

// @ts-check
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import { createStore } from 'redux';

// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import reducer from './reducers';
import App from './components/App';
import { getGonData } from './actions';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!');
console.log('gon', window.gon);

// eslint-disable-next-line no-underscore-dangle
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(reducer, devtoolMiddleware);

store.dispatch(getGonData(window.gon));
render(<Provider store={store}><App /></Provider>, document.getElementById('chat'));

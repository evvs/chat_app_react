// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
import io from 'socket.io-client';
import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { init } from './slices/channels';
import { addMessage } from './slices/messages';
import reducers from './slices';
import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = configureStore({
  reducer: reducers,
});

console.log('it works!');
console.log('gon', gon);

store.dispatch(init(window.gon));

const userName = faker.internet.userName();
if (!cookies.get('username')) {
  cookies.set('username', userName);
}

const socket = io();

socket.on('connect', () => console.log('connected to socket!!!'));
socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(addMessage(attributes)));

render(
  <Provider store={store}><App /></Provider>, document.getElementById('chat'),
);

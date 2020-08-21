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
import {
  init, addChannel, delChannel, reChannel,
} from './slices/channels';

import { addMessage } from './slices/messages';
import reducers from './slices';
import App from './components/App';
import { UserNameProvider } from './Context';

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
const username = cookies.get('username');

const socket = io();
socket.on('connect', () => console.log('connected to socket!!!'));
socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(addMessage(attributes)));
socket.on('newChannel', ({ data: { attributes } }) => store.dispatch(addChannel(attributes)));
socket.on('removeChannel', ({ data }) => {
  store.dispatch(delChannel({ channelId: data.id }));
});
socket.on('renameChannel', ({ data }) => store.dispatch(reChannel(data)));

render(
  <Provider store={store}>
    <UserNameProvider value={username}>
      <App />
    </UserNameProvider>
  </Provider>, document.getElementById('chat'),
);

export default store.dispatch;

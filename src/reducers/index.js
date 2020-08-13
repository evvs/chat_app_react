import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const channels = handleActions(
  {
    [actions.getGonData]: (state, { payload: { channels } }) => ({
      channels,
      currentChannel: 1,
    }),
    [actions.changeChannel]: (state, { payload: { id } }) => ({ ...state, currentChannel: id }),
  },
  {
    channels: [],
    currentChannel: null,
  },
);

const messages = handleActions(
  {
    [actions.getGonData]: (state, { payload: { messages } }) => messages,
    [actions.addNewMessage]: (state, { payload }) => [...state, payload],
  },
  [//{
    // id: 1,
    // channelId: 1,
    // author: 'Kiri',
    // data: 'Hello from messages',
  //}, {
  ],
);

export default combineReducers({
  channels,
  messages,
});

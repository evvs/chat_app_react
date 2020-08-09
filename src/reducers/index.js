import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import _ from 'lodash';
import * as actions from '../actions';

const channels = handleActions(
  {
    // eslint-disable-next-line no-shadow
    [actions.getGonData]: (state, { payload: { channels } }) => ({
      byId: _.keyBy(channels, 'id'),
      allIds: channels.map(({ id }) => id),
      currentChannel: 1,
    }),
  },
  {
    byId: {},
    allIds: [],
    currentChannel: null,
  },
);

const messages = handleActions(
  {
    [actions.addNewMessage]: (state, { payload: { message } }) => {
      return [...state, message];
    }
  },
  [{
    id: 1,
    channelId: 1,
    author: 'Kiri',
    data: 'Hello from messages',
  },{
    id: 2,
  channelId: 1,
  author: 'eri',
  data: 'Hello qweqweqweages',
}],
);

export default combineReducers({
  channels,
  messages,
});

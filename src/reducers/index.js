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
    }),
  },
  {
    byId: {},
    allIds: [],
  },
);

export default combineReducers({
  channels,
});

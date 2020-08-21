import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { close } from './modal';

export const addNewChannel = createAsyncThunk(
  'channels/addNewChannel',
  async ({ name }, { dispatch }) => {
    try {
      await axios.post(routes.channelsPath(), {
        data: {
          attributes: {
            name,
          },
        },
      });
      dispatch(close());
    } catch (err) {
      //if (!err.response) {
      //dispatch(errorActions.addError(err));
      //throw err;
      console.log(err);
    }
  },
);

export const deleteChannel = createAsyncThunk(
  'channels/deleteChannel',
  async (id, { dispatch }) => {
    try {
      console.log(id);
      await axios.delete(routes.channelPath(id), { params: { id } });
      dispatch(close());
    } catch (err) {
      //if (!err.response) {
      //dispatch(errorActions.addError(err));
      //throw err;
      console.log(err);
    }
  },
);

const channels = createSlice({
  name: 'channels',
  initialState: {
    allChannels: [],
    currentChannel: null,
  },
  reducers: {
    init: (state, action) => ({
      allChannels: action.payload.channels,
      currentChannel: 1,
    }),
    addChannel: (state, action) => {
      const {
        id, name, removable,
      } = action.payload;
      state.allChannels.push({
        id, name, removable,
      });
    },
    setCurrentChannel: (state, action) => ({ ...state, currentChannel: action.payload.id }),
  },
  extraReducers: {
    [addNewChannel.fulfilled]: () => {},
  },
});

export const { init, setCurrentChannel, addChannel } = channels.actions;
export default channels.reducer;

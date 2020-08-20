import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

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

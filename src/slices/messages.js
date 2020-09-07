import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import routes from '../routes';
import { showError } from './errors';
import { delChannel } from './channels';

export const sendMessage = createAsyncThunk(
  'messages/addMessage',
  async ({ channelId, text, author }, { dispatch }) => {
    try {
      await axios.post(routes.channelMessagesPath(channelId), {
        data: {
          attributes: {
            author,
            text,
          },
        },
      });
    } catch (err) {
      dispatch(showError(err));
      throw err;
    }
  },
);

export const throwTestError = createAsyncThunk(
  'messages/throwTestError',
  async (url, { dispatch }) => {
    try {
      await axios.get(url);
    } catch (err) {
      dispatch(showError(err));
      throw err;
    }
  },
);

const messages = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const {
        id, channelId, author, text,
      } = action.payload;
      state.push({
        id, channelId, author, text,
      });
    },
  },
  extraReducers: {
    [delChannel]: (state, action) => {
      const deletedChannelId = action.payload.channelId;
      return state.filter(({ channelId }) => channelId !== deletedChannelId);
    },
  },
});

export const { addMessage } = messages.actions;

export default messages.reducer;

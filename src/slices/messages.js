import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import routes from '../routes';
import { init } from './channels';
import { showError } from './errors';

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
  name: 'channels',
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
    [sendMessage.fulfilled]: () => {},
    [init]: (state, action) => action.payload.messages,
  },
});

export const { addMessage } = messages.actions;

export default messages.reducer;

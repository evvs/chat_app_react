import axios from 'axios';
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import routes from '../routes';
import { init } from './channels';

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
      //if (!err.response) {
        //dispatch(errorActions.addError(err));
        //throw err;
      console.log(err);
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

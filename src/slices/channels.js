import { createSlice } from '@reduxjs/toolkit';

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
    setCurrentChannel: (state, action) => ({ ...state, currentChannel: action.payload.id }),
  },
});

export const { init, setCurrentChannel } = channels.actions;
export default channels.reducer;

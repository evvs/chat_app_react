import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    type: '',
    show: false,
  },
  reducers: {
    open: (state, action) => ({
      type: action.payload.type,
      show: true,
    }),
    close: () => ({
      type: '',
      show: false,
    }),
  },
});

export const { open, close } = modal.actions;
export default modal.reducer;

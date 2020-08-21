import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    type: '',
    show: false,
    clickedElemId: null,
    clickedElemName: '',
  },
  reducers: {
    open: (state, action) => ({
      type: action.payload.type,
      show: true,
      clickedElemId: action.payload.id || null,
      clickedElemName: action.payload.name || '',
    }),
    close: () => ({
      type: '',
      show: false,
    }),
  },
});

export const { open, close } = modal.actions;
export default modal.reducer;

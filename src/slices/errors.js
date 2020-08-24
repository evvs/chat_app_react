import _ from 'lodash';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import delay from '../utils';

const errors = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    addError: (state, action) => {
      const {
        id,
        text,
        errorData,
      } = action.payload;
      state.unshift({ id, text, errorData });
    },
    removeError: (state, action) => state.filter(({ id }) => action.payload.id !== id),
  },
});

export const showError = createAsyncThunk(
  'errors/addNewError',
  async (data, { dispatch }) => {
    const id = _.uniqueId();
    dispatch(errors.actions.addError({
      id,
      text: 'Error. Check console for details',
      errorData: data,
    }));
    await delay(3000);
    dispatch(errors.actions.removeError({ id }));
  },
);

export default errors.reducer;

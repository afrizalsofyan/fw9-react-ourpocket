import { createSlice } from '@reduxjs/toolkit';
import { getAllNotification, updateNotification } from '../actionAsync/notification';

const initialState = {
  successMsg: null,
  errorMsg: null,
  results: []
};

const notification = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getAllNotification.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getAllNotification.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.results = action.payload.result;
    });
    build.addCase(updateNotification.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(updateNotification.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
    });
  },
});

export {getAllNotification, updateNotification};
export default notification.reducer;

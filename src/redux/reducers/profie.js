import { createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../actionAsync/profile';

const initialState = {
  result: {}
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) =>{
    build.addCase(getProfile.fulfilled, (state, action)=>{
      state.result = action.payload;
    });
  }
});

export {getProfile};
export default profile.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { addPhoneNumber, changePassword, getProfile, updateProfile } from '../actionAsync/profile';

const initialState = {
  result: {},
  successMsg: null
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) =>{
    build.addCase(getProfile.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
    build.addCase(updateProfile.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
      state.successMsg = action.payload?.result.message;
    });
    build.addCase(changePassword.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
    build.addCase(addPhoneNumber.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
  }
});

export {getProfile};
export default profile.reducer;
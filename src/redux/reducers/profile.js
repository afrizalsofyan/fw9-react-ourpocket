import { createSlice } from '@reduxjs/toolkit';
import { addPhoneNumber as addPhone, changePassword as changePass, getProfile as profileUser, updateProfile as updateProfileUser } from '../actionAsync/profile';

const initialState = {
  result: {},
  successMsg: null
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) =>{
    build.addCase(profileUser.pending, (state, action)=>{
      state.successMsg = null;
    });
    build.addCase(profileUser.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
    build.addCase(updateProfileUser.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
      state.successMsg = action.payload?.result.message;
    });
    build.addCase(changePass.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
    build.addCase(addPhone.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
  }
});

export {profileUser, addPhone, updateProfileUser, changePass};
export default profile.reducer;
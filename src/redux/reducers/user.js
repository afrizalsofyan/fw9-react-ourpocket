import { createSlice } from '@reduxjs/toolkit';
import { changePasswordUser, changePinUser, deletePhoto, getAllUser, getProfileCurrentUser, getUser, updatePhoneNumberUser, updateProfileUser } from '../actionAsync/user';

const initialState = {
  results: [],
  dataUser: {},
  profile: {},
  infoData: {},
  successMsg: null,
  errorMsg: null,
  successUpdateMsg: null,
  errorUpdateMsg: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    // createPin: (state, action) => {
    //   state.pin = action.payload;
    // },
    // testLogin: (state, action) => {
    //   state.email = action.payload;
    //   state.password = action.payload;
    // }
    saveErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
    saveErrorMsgUpdate: (state, action) => {
      state.errorUpdateMsg = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(getAllUser.pending, (state, action)=>{
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getAllUser.fulfilled, (state, action)=>{
      state.results = action.payload.result;
      state.infoData = action.payload.info;
      state.errorMsg = action.payload.errorMsg;
      state.successMsg = action.payload.message;
    });
    build.addCase(getUser.fulfilled, (state, action)=>{
      state.dataUser = action.payload?.result;
    });
    build.addCase(getProfileCurrentUser.pending, (state, action)=>{
      state.errorMsg = null;
      state.successMsg = null;
      state.successUpdateMsg = null;
      state.errorUpdateMsg = null;
    });
    build.addCase(getProfileCurrentUser.fulfilled, (state, action)=>{
      state.profile = action.payload.result;
    });
    build.addCase(updatePhoneNumberUser.pending, (state, action)=>{
      state.successUpdateMsg = null;
      state.errorUpdateMsg = null;
    });
    build.addCase(updatePhoneNumberUser.fulfilled, (state, action)=>{
      state.successUpdateMsg = action.payload.successMsg;
      state.errorUpdateMsg = action.payload.errorMsg;
    });
    build.addCase(changePasswordUser.pending, (state, action)=>{
      state.successUpdateMsg = null;
      state.errorUpdateMsg = null;
    });
    build.addCase(changePasswordUser.fulfilled, (state, action)=>{
      state.successUpdateMsg = action.payload.successMsg;
    });
    build.addCase(changePinUser.pending, (state, action)=>{
      state.successUpdateMsg = null;
      state.errorUpdateMsg = null;
    });
    build.addCase(changePinUser.fulfilled, (state, action)=>{
      state.successUpdateMsg = action.payload.successMsg;
    });
    build.addCase(updateProfileUser.pending, (state, action)=>{
      state.successUpdateMsg = null;
      state.errorUpdateMsg = null;
    });
    build.addCase(updateProfileUser.fulfilled, (state, action)=>{
      state.successUpdateMsg = action.payload.successMsg;
    });
    build.addCase(deletePhoto.pending, (state, action)=>{
      state.successUpdateMsg = null;
      state.errorUpdateMsg = null;
    });
    build.addCase(deletePhoto.fulfilled, (state, action)=>{
      state.successUpdateMsg = action.payload.successMsg;
    });
  }
});

export const {saveErrorMsg, saveErrorMsgUpdate} = user.actions;

export {getAllUser, getUser, getProfileCurrentUser, updatePhoneNumberUser, changePasswordUser, changePinUser, updateProfileUser, deletePhoto};

export default user.reducer;
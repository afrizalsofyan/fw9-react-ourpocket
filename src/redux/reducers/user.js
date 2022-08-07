import { createSlice } from '@reduxjs/toolkit';
import { getAllUser, getUser } from '../actionAsync/user';

const initialState = {
  result: [],
  dataUser: null
};

export const user = createSlice({
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
  },
  extraReducers: (build) => {
    build.addCase(getAllUser.fulfilled, (state, action)=>{
      state.result = action.payload?.result;
    });
    build.addCase(getUser.fulfilled, (state, action)=>{
      state.dataUser = action.payload?.result;
    });
  }
});

export {getAllUser};

export default user.reducer;
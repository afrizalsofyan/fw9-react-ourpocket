import { createSlice } from '@reduxjs/toolkit';
import { getAllUser } from '../actionAsync/user';

const initialState = {
  result: {}
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
  }
});

export {getAllUser};

export default user.reducer;
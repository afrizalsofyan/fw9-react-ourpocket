import { createSlice } from '@reduxjs/toolkit';
import { login } from '../actionAsync/auth';

const initialState = {
  token: localStorage.getItem('token') || null,
  errorMsg: null,
  successMsg: null
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      return initialState;
    }
  },
  extraReducers: (build) => {
    build.addCase(login.pending, (state)=>{
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      if(token) {
        state.token = token;
        localStorage.setItem('token', token);
      } else {
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });
    build.addCase(login.rejected, (state, action)=>{
      state.errorMsg = 'Data not found !!! Please register first.';
    });
  }
});

export {login};
export const {logout} = auth.actions;
export default auth.reducer;
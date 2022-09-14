import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { createPin, login, register } from '../actionAsync/auth';

const initialState = {
  token: Cookies.get('token') || null,
  refreshToken: Cookies.get('refreshToken') || null,
  errorMsg: null,
  successMsg: null,
  succsessCreatePin: null,
  errorCreatePin: null
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      // action.payload();
      return initialState;
    },
    saveNewToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (build) => {
    //login
    build.addCase(login.pending, (state)=>{
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload.result?.token;
      const refreshToken = action.payload.result?.refreshToken;
      if(token) {
        state.token = token;
        // localStorage.setItem('token', token);
        state.refreshToken = refreshToken;
        Cookies.set('token', token);
        Cookies.set('refreshToken', refreshToken);
      } else {
        state.token = Cookies.get('refreshToken');
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });
    build.addCase(login.rejected, (state, action)=>{
      state.errorMsg = 'Data not found !!! Please register first.';
    });
    //register
    build.addCase(register.pending, (state)=>{
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state,action)=>{
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
    // //createPin
    // build.addCase(createPin.pending, (state)=>{
    //   state.succsessCreatePin = null;
    //   state.errorCreatePin = null;
    // });
    // build.addCase(createPin.fulfilled, (state, action)=>{
    //   state.succsessCreatePin = action.payload?.successMsg;
    //   state.errorCreatePin = action.payload?.errorMsg;
    // });
  }
});

export {login, createPin};
export const {logout, saveNewToken} = auth.actions;
export default auth.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { createPin, login, register } from '../actionAsync/auth';

const initialState = {
  token: localStorage.getItem('token') || null,
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
      localStorage.removeItem('token');
      action.payload();
      return initialState;
    }
  },
  extraReducers: (build) => {
    //login
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

export {login};
export {createPin};
export const {logout} = auth.actions;
export default auth.reducer;
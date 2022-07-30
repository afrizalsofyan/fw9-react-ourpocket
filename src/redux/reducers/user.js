import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // username,
  email: '',
  password: '',
  pin: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    createPin: (state, action) => {
      state.pin = action.payload;
    },
    testLogin: (state, action) => {
      state.email = action.payload;
      state.password = action.payload;
    }
  }
});

export const {createPin} = userSlice.actions;

export default userSlice.reducer;
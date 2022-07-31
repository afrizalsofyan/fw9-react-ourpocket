import { combineReducers } from '@reduxjs/toolkit';
import transfer from './input';
import userSlice from './user';
import profile from  './profie';
import auth from './auth';

const reducer = combineReducers({
  inputAmount: transfer,
  user: userSlice,
  profile,
  auth
});

export default reducer;
import { combineReducers } from '@reduxjs/toolkit';
import transfer from './input';
import userSlice from './user';
import profile from  './profie';

const reducer = combineReducers({
  inputAmount: transfer,
  user: userSlice,
  profile
});

export default reducer;
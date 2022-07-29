import { combineReducers } from '@reduxjs/toolkit';
import transfer from './input';
import userSlice from './user';

const reducer = combineReducers({
  inputAmount: transfer,
  user: userSlice
});

export default reducer;
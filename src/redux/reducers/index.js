import { combineReducers } from '@reduxjs/toolkit';
import transfer from './input';
// import profile from  './profie';
import auth from './auth';
import transaction from './transaction';
import user from './user';

const reducer = combineReducers({
  inputAmount: transfer,
  // profile,
  auth,
  transaction,
  user
});

export default reducer;
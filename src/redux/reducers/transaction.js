import {createSlice} from '@reduxjs/toolkit';
import { historyTransaction } from '../actionAsync/transaction';

const initialState = {
  result: {},
  
};

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(historyTransaction.pending, (state, action)=>{
      state.result = {};
    });
    build.addCase(historyTransaction.fulfilled, (state, action)=>{
      state.result = action.payload;
    });
  }
});

export {historyTransaction};
export default transaction.reducer;
import {createSlice} from '@reduxjs/toolkit';
import { getSomeTransaction, historyTransaction, topupBalanceTransaction, transferAmountTransaction } from '../actionAsync/transaction';

const initialState = {
  result: {},
  someResult: [],
  sucessMsg: null, 
  errorMsg: null,
};

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(historyTransaction.pending, (state, action)=>{
      state.result = {};
      state.errorMsg = null;
      state.sucessMsg = null;
    });
    build.addCase(historyTransaction.fulfilled, (state, action)=>{
      state.result = action.payload;
    });
    build.addCase(getSomeTransaction.pending, (state, action)=>{
      state.someResult = [];
      state.errorMsg = null;
      state.sucessMsg = null;
    });
    build.addCase(getSomeTransaction.fulfilled, (state, action)=>{
      state.someResult = action.payload.result;
    });
    build.addCase(transferAmountTransaction.pending, (state, action)=>{
      state.errorMsg = null;
      state.sucessMsg = null;
    });
    build.addCase(transferAmountTransaction.fulfilled, (state, action)=>{
      state.someResult = action.payload.result;
      state.errorMsg = action.payload.errorMsg;
      state.sucessMsg = action.payload.message;
    });
    build.addCase(topupBalanceTransaction.pending, state => {
      state.sucessMsg = null;
    });
    build.addCase(topupBalanceTransaction.fulfilled, (state, action) => {
      state.sucessMsg = action.payload.message;
    });
  }
});

export {historyTransaction, getSomeTransaction, transferAmountTransaction};
export default transaction.reducer;
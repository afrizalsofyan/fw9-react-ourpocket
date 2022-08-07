import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
  note: '-',
  time: null,
  type_id: 0
};

export const counterSlice = createSlice({
  name: 'input',
  initialState,
  reducers:{
    addAmount: (state, action) => {
      state.amount = parseInt(action.payload, 10);
    },
    addNote: (state, action) => {
      state.note = action.payload;
    },
    addTime: (state, action) => {
      state.time = action.payload;
    },
    addTypeTransaction: (state, action) => {
      state.type_id = action.payload;
    }
  }
});

export const {addAmount, addNote, addTime, addTypeTransaction} = counterSlice.actions;

export default counterSlice.reducer;
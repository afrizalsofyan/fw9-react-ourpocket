import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: 0,
    note: '-'
}

export const counterSlice = createSlice({
    name: "input",
    initialState,
    reducers:{
        addAmount: (state, action) => {
            state.amount = parseInt(action.payload, 10)
        },
        addNote: (state, action) => {
            state.note = action.payload
        }
    }
})

export const {addAmount, addNote} = counterSlice.actions

export default counterSlice.reducer
import { combineReducers } from "@reduxjs/toolkit"
import transfer from "./input"

const reducer = combineReducers({
    inputAmount: transfer
})

export default reducer
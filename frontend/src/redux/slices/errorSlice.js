import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError: (state, action) => {
            return action.payload
        },

        clearError: (state, action) => {
            return initialState
        }
    }
})

export const selectErrorMessage = (state) => state.error

export default errorSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload }
        },
        resetFilters: (state) => {
            return initialState
        }
    }
})

export const { setTitleFilter } = filterSlice.actions
export const { resetFilters } = filterSlice.actions

export const selectTitleFilter = (store) => store.filter.title

export default filterSlice.reducer
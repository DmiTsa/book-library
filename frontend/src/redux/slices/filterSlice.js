import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false,
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload }
        },
        setAuthorFilter: (state, action) => {
            return { ...state, author: action.payload }
        },
        toggleFavorite: (state) => {
            return { ...state, onlyFavorite: !state.onlyFavorite }
        },
        resetFilters: () => {
            return initialState
        }
    }
})

export const { setTitleFilter, setAuthorFilter, resetFilters, toggleFavorite } = filterSlice.actions

export const selectTitleFilter = (store) => store.filter.title
export const selectAuthorFilter = (store) => store.filter.author
export const selectOnlyFavorite = (store) => store.filter.onlyFavorite

export default filterSlice.reducer
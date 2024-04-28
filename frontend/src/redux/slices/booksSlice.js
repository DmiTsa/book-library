import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => { return [...state, action.payload] },

        delBook: (state, action) => { return state.filter((book) => book.id !== action.payload) },

        toggleBook: (state, action) => {
            return state.map((book) =>
                book.id === action.payload
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            )
        },

    }
})

export const { addBook, delBook, toggleBook } = booksSlice.actions

export const selectorBook = (state) => state.books

export default booksSlice.reducer
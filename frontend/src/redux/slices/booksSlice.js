import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import createBook from "../../utils/createBook.js";

const initialState = []

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
    const res = await axios.get("http://localhost:4000/random-book");

    return res.data
})

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

    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                const book = createBook(action.payload.title, action.payload.author, "API");
                state.push(book)
            }
        })
    }
})

export const { addBook, delBook, toggleBook } = booksSlice.actions

export const selectorBook = (state) => state.books

export const thunkFunction = async (dispatch, getState) => {
    try {
        const res = await axios.get("http://localhost:4000/random-book");

        if (res?.data?.title && res?.data?.author) {
            const { title, author } = res.data;
            const book = createBook(title, author, "API");

            dispatch(addBook(book));
        }
    } catch (error) {
        console.log(`ERROR ${error}`);
    }
};

export default booksSlice.reducer
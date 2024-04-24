import { ADD_BOOK, DEL_BOOK } from './types'

const initialState = []

const booksReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_BOOK: return [...state, action.payload]

        case DEL_BOOK: return state.filter((book) => book.id !== action.payload)

        default: return state

    }
}

export default booksReducer
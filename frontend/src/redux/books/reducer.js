import { ADD_BOOK, DEL_BOOK, TOGGLE_FAVORITE } from './types'

const initialState = []

const booksReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_BOOK: return [...state, action.payload]

        case DEL_BOOK: return state.filter((book) => book.id !== action.payload)

        case TOGGLE_FAVORITE: return state.map((book) =>
            book.id === action.payload
                ? { ...book, isFavorite: !book.isFavorite }
                : book
        )

        default: return state

    }
}

export default booksReducer
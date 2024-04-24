import { ADD_BOOK } from './types'

// const { ADD_BOOK } = actions

export const addBook = (newBook) => {
    return {
        type: ADD_BOOK,
        payload: newBook
    }
}
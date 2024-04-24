import { ADD_BOOK, DEL_BOOK, TOGGLE_FAVORITE } from './types'

// const { ADD_BOOK } = actions

export const addBook = (newBook) => {
    return {
        type: ADD_BOOK,
        payload: newBook
    }
}

export const delBook = (id) => {
    return {
        type: DEL_BOOK,
        payload: id
    }
}

export const toggleBook = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: id
    }
}
import { v4 as uuid } from 'uuid'

export default function createBook(title, author, source) {
    const book = {
        title,
        author,
        source: `(${source})`,
        id: uuid(),
        isFavorite: false,
    };

    return book
}

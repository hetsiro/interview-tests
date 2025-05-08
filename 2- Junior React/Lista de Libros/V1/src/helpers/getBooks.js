import { library } from '../data/library.json';


export const getBooks = () => {

    const mappedBooks = library.map(( books ) => {
        return {
            ISBN: books.book.ISBN,
            author: books.book.author,
            cover: books.book.cover,
            genre: books.book.genre,
            pages: books.book.pages,
            synopsis: books.book.synopsis,
            title: books.book.title,
            year: books.book.year
        }
    })

    return mappedBooks;
}

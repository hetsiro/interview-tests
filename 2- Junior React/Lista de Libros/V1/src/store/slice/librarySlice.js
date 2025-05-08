import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  sortedBooks: [],
  genres: [],
  actualList: []
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;

      state.sortedBooks = JSON.parse(localStorage.getItem('sortedBooks')) || state.books;
      state.actualList = JSON.parse(localStorage.getItem('actualList')) || [];
    },
    setGenres: (state, { payload }) => {
      state.genres = payload;
      state.genres.unshift('All');
    },
    addToList: (state, { payload }) => { // Eliminamos el libro de la librería y lo añadimos a la lista
      state.sortedBooks = state.sortedBooks.filter((book) => book.title !== payload.title);
      state.actualList.push(payload);

      localStorage.setItem('sortedBooks', JSON.stringify(state.sortedBooks));
      localStorage.setItem('actualList', JSON.stringify(state.actualList));
    },
    removeFromList: (state, { payload }) => {
      state.actualList = state.actualList.filter((book) => book.title !== payload.title);
      state.sortedBooks.push(payload);

      localStorage.setItem('sortedBooks', JSON.stringify(state.sortedBooks));
      localStorage.setItem('actualList', JSON.stringify(state.actualList));
    },
    searchByFilters: (state, { payload }) => {
      state.sortedBooks = [];

      state.books.forEach(book => {
        if(!state.actualList.some((actualBook) => book.title === actualBook.title))
          state.sortedBooks.push(book);
      });
      
      state.sortedBooks = state.sortedBooks.filter((book) => book.genre === payload.inputGenres || payload.inputGenres === 'All')
      if(payload.inputPages > 0)
      state.sortedBooks = state.sortedBooks.filter((book) => book.pages <= payload.inputPages)
      state.sortedBooks = state.sortedBooks.filter((book) => book.title.toLowerCase().includes(payload.inputSearch.toLowerCase()))
    
    },

}});

export const { setBooks, setGenres, addToList, removeFromList, searchByFilters } = librarySlice.actions

export default librarySlice.reducer
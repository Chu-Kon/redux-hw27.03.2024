import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, name: 'Азбука' },
    { id: 2, name: '1984' },
    { id: 3, name: 'Как выучить JS за 2 дня' },
    { id: 4, name: 'Как нас обманывают книги' },
  ],
  cart: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToCart: (state, action) => {
      const bookId = action.payload;
      const bookToAdd = state.books.find((book) => book.id === bookId);
      if (bookToAdd) {
        state.cart.push(bookToAdd);
      }
    },
    removeBookFromCart: (state, action) => {
      const bookId = action.payload;
      state.cart = state.cart.filter((book) => book.id !== bookId);
    },
    removeFromBooks: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    addNewBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
  },
});

export const { addBookToCart, removeBookFromCart, removeFromBooks, addNewBook } = booksSlice.actions;

export default booksSlice.reducer;
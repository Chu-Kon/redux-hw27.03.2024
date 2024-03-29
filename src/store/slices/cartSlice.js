import { createSlice } from '@reduxjs/toolkit';

// Здесь будут храниться объекты книг в корзине
const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const book = action.payload;
      state.items.push(book);
    },
    removeFromCart: (state, action) => {
      const bookId = action.payload;
      state.items = state.items.filter((book) => book.id !== bookId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
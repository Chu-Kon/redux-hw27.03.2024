import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import booksReducer from './booksSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  books: booksReducer,
});

export default rootReducer;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import bookReducer from '../features/books/booksSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    book: bookReducer
  },
});

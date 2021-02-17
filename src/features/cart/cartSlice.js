import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    books: [],
    cart: {},
    temporyCart: {}
  },
  reducers: {
    saveBooks(state, action) {
      console.log('here')
      const books = action.payload

      state.books = books
    },
    addToCart(state, action) {
      const { isbn } = action.payload

      if (state.temporyCart[isbn]) {
        state.cart[isbn] = state.cart[isbn] > 0 ? state.cart[isbn] + state.temporyCart[isbn] : state.temporyCart[isbn]
        delete state.temporyCart[isbn]
      } else if (state.cart[isbn]) {
        state.cart[isbn]+= 1
      }
      else  {
        state.cart[isbn] = 1
      }
    },
    increase(state, action) {
      const { isbn } = action.payload

      if (state.temporyCart[isbn]) {
        state.temporyCart[isbn] += 1
      } else {
        state.temporyCart[isbn] = 1
      }
    },
    decrease(state, action) {
      const { isbn } = action.payload

      if (state.temporyCart[isbn] === 1) {
        delete state.temporyCart[isbn]
      } else if (state.temporyCart[isbn] ) {
        state.temporyCart[isbn] -= 1
      }
    }
  },
});

export const { increase, decrease, addToCart, addTodo, saveBooks } = cartSlice.actions;

export const selectAmount = (state, isbn) => {
  return state.cart[isbn] ? state.cart[isbn] : 0
}

export default cartSlice.reducer;

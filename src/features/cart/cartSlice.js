import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: {},
    temporyCart: {},
    offer: {},
    offerPath: []
  },
  reducers: {
    addToCart(state, action) {
      const { isbn } = action.payload

      if (state.temporyCart[isbn]) {
        state.cartList[isbn] = state.cartList[isbn] > 0 ? state.cartList[isbn] + state.temporyCart[isbn] : state.temporyCart[isbn]
        delete state.temporyCart[isbn]
      } else if (state.cartList[isbn]) {
        state.cartList[isbn]+= 1
      }
      else  {
        state.cartList[isbn] = 1
      }
    },
    increaseBookToCart(state, action) {
      const { isbn } = action.payload

      if (state.temporyCart[isbn]) {
        state.temporyCart[isbn] += 1
      } else {
        state.temporyCart[isbn] = 1
      }
    },
    decreaseBookToCart(state, action) {
      const { isbn } = action.payload

      if (state.temporyCart[isbn] === 1) {
        delete state.temporyCart[isbn]
      } else if (state.temporyCart[isbn]) {
        state.temporyCart[isbn] -= 1
      }
    },
    createOfferPath(state, action) {
      const { cartList } = action.payload

      for (const isbn in cartList) {
        state.offerPath.push(isbn)
      }
    }
  },
});

export const { increaseBookToCart, decreaseBookToCart, addToCart, createOfferPath } = cartSlice.actions;

export const selectCart = state => state.cart.cartList

export const selectAmount = (state, isbn) => state.cart.cartList[isbn] ? state.cart.cartList[isbn] : 0

export const selectOfferPath = state => state.cart.offerPath


export default cartSlice.reducer;

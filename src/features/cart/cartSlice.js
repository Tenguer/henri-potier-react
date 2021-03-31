import { createSlice } from "@reduxjs/toolkit";
import { getCartPrice, fetchOffers } from "./cart.service"
import { booksQuantityManager } from '../books/booksSlice'

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartPrice: 0,
    cartPriceWithOffer: 0
  },
  reducers: {
    addCartPrice(state, action) {
      state.cartPrice = action.payload
    },
    addCartPriceWithOffer(state, action) {
      state.cartPriceWithOffer = action.payload
    },
  }
});

export const { addCartPrice, addCartPriceWithOffer } = cartSlice.actions;

// CartList
export const selectBooksListTocart = state => {
  const { booksList } = state.book
  const cartList = Object.values(booksList).filter(book => book.quantity > 0)

  return cartList
}

// Asynchronous thunk action
export function addToCart({ isbn, quantity}) {
  return async (dispatch, getState) => {
    try {
      dispatch(booksQuantityManager({ isbn, quantity }))

      const cartList = selectBooksListTocart(getState())
      const cartPrice = getCartPrice(cartList)
      const priceMinusOffer = await fetchOffers({ cartPrice, cartList })

      dispatch(addCartPrice(cartPrice))
      dispatch(addCartPriceWithOffer(priceMinusOffer, cartPrice))
    } catch (error) {
      console.error(error)
    }
  }
}
 

export default cartSlice.reducer;

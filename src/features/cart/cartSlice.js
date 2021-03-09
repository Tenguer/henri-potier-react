import { createSlice } from "@reduxjs/toolkit";
import { getOffer } from "../../services/bookService"
import { offerCalc } from "./cart.service"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: {},
    temporyCart: {},
    cartPriceWithOffer: 0
  },
  reducers: {
    addToCart(state, action) {
      const { isbn, quantity, quantityPrice } = action.payload

      state.cartList[isbn] = { isbn, quantity, quantityPrice }
    },

    addCartPrice(state, action) {
      console.log("here addCartPrice")
      state.cartPriceWithOffer = action.payload
    }
  }
});

export const { increaseBookToCart, decreaseBookToCart, addToCart, cartPriceTotal, addCartPrice } = cartSlice.actions;

export const selectAmount = (state, isbn) => state.cart.cartList[isbn] ? state.cart.cartList[isbn] : 0

export const selectCartPriceTotal = (booksList) => {
  let cartPrice = 0
  const booksValues = Object.values(booksList)

  booksValues.forEach(book => cartPrice += book.quantityPrice)
  return cartPrice
}

export const selectOfferPath = (cartList) => {
  const newCartList = Object.values(cartList)
  let cartPath = []

  if (newCartList.length > 0) {
    newCartList.forEach(book => cartPath.push(book.isbn))
  }
  return cartPath
}

// Asynchronous thunk action
export function fetchOffers(pathCart, totalPrice) {
  return async dispatch => {
    try {
			const response = await getOffer(pathCart)
      const priceMinusOffer = offerCalc(response.data.offers, totalPrice)

      return addCartPrice(priceMinusOffer)
		} catch (error) {
			console.error(error)
		}
  }
}


export default cartSlice.reducer;

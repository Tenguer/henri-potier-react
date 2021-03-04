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
      const { isbn } = action.payload

      if (state.temporyCart[isbn]) {
        state.cartList[isbn] = state.cartList[isbn] > 0 ? state.cartList[isbn] + state.temporyCart[isbn] : state.temporyCart[isbn]
        delete state.temporyCart[isbn]
      } else if (state.cartList[isbn]) {
        state.cartList[isbn] += 1
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
    addCartPrice(state, action) {
      console.log("here")
      state.cartPriceWithOffer = action.payload
    }
  }
});

export const { increaseBookToCart, decreaseBookToCart, addToCart, cartPriceTotal, addCartPrice } = cartSlice.actions;

export const selectAmount = (state, isbn) => state.cart.cartList[isbn] ? state.cart.cartList[isbn] : 0

export const selectBooksCart = state => {
  const booksCart = []
  const booksList = state.book.booksList
  const cartList = state.cart.cartList
  let temporyBook = {}
  
  for (const isbn in cartList) {
    for (const index in booksList) {
      if (booksList[index].isbn === isbn) {
        temporyBook = { ...booksList[index] }
        temporyBook["qty"] = cartList[isbn]
        temporyBook["cartPrice"] = booksList[index].price * cartList[isbn]
        booksCart.push(temporyBook)
      }
    }
  }
  return booksCart
}

export const selectCartPriceTotal = (cartList) => {
  let cartPrice = 0

  for (let i = 0; i < cartList.length; i++) {
    cartPrice += cartList[i].cartPrice
  }
  return cartPrice
}

export const selectOfferPath = state => {
  const { cartList } = state.cart
  const cartPath = []

  if (cartList) {
    for (const isbn in cartList) {
      cartPath.push(isbn)
    }
  }
  return cartPath
}

export const selectCartPriceWithOffer = state => state.cart.cartPriceWithOffer


// Asynchronous thunk action
export function fetchOffers(pathCart, totalPrice) {
  return async dispatch => {
    try {
			const response = await getOffer(pathCart)
      const priceMinusOffer = offerCalc(response.data.offers, totalPrice)

      dispatch(addCartPrice(priceMinusOffer))
		} catch (error) {
			console.error(error)
		}
  }
}

export default cartSlice.reducer;

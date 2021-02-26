import { createSlice } from "@reduxjs/toolkit"

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    booksList: {},
  },
  reducers: {
    saveBooks(state, action) {
      state.booksList = action.payload
    }
  }
})

export const { saveBooks } = bookSlice.actions;

export const selectBooks = state => state.book.booksList

export const selectBooksCart = (state, cartList) => {
  const booksCart = []
  let temporyBook = {}
  
  for (const isbn in cartList) {
    for (const index in state.book.booksList) {
      if (state.book.booksList[index].isbn === isbn) {
        temporyBook = { ...state.book.booksList[index] }
        temporyBook["cartQty"] = cartList[isbn]
        temporyBook["cartPrice"] = state.book.booksList[index].price * temporyBook.cartQty
        booksCart.push(temporyBook)
      }
    }
  }
  return booksCart
}

export default bookSlice.reducer
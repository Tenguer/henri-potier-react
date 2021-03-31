import { createSlice } from "@reduxjs/toolkit"
import { getBooks } from "../../services/bookService"
import { newBooksWithQuantity } from "./booksSlice.service"

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    booksList: [],
  },
  reducers: {
    saveBooksList(state, action) {
      state.booksList = action.payload
    },
    booksQuantityManager(state, action) {
      const { isbn, quantity } = action.payload

      if (state.booksList[isbn].quantity + quantity < 0) {
        state.booksList[isbn].quantity = 0
        state.booksList[isbn].quantityPrice = 0
      } else {
        const bookPrice = state.booksList[isbn].price
        state.booksList[isbn].quantity += quantity
        state.booksList[isbn].quantityPrice = bookPrice * state.booksList[isbn].quantity 
      }
    }
  }
})

export default bookSlice.reducer

export const { saveBooksList, booksQuantityManager } = bookSlice.actions;

export const selectBooksList = state => state.book.booksList

// Asynchronous thunk action
export function fetchBooks() {
  return async dispatch => {
    try {
			const response = await getBooks()
      const books = response.data
      const booksWithQuantity = newBooksWithQuantity(books)

      dispatch(saveBooksList(booksWithQuantity))
		} catch (error) {
			console.error(error)
		}
  }
}

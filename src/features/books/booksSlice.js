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
    increaseBookQuantity(state, action) {
      const { isbn, quantity } = action.payload

      if (state.booksList[isbn]) {
        state.booksList[isbn].quantity += quantity
        state.booksList[isbn].quantityPrice = state.booksList[isbn].price * state.booksList[isbn].quantity
      }
    },
    decreaseBookQuantity(state, action) {
      const { isbn } = action.payload

      if (state.booksList[isbn] > 0) {
        state.booksList[isbn].quantity -= 1
        state.booksList[isbn].quantityPrice = state.booksList[isbn].price * state.booksList[isbn].quantity
      }
    },
    updateQuantity(state, action) {
      const {isbn, quantity} = action.payload;

      if(state.booksList[isbn]) {
        state.booksList[isbn].quantity += quantity;
      }
    }
  }
})

export const { saveCopyBooks, saveBooksList, increaseBookQuantity, decreaseBookQuantity } = bookSlice.actions;

export const selectBooksList = state => state.book.booksList

export const selectBooksListTocart = state => {
  const { booksList } = state.book
  const values = Object.values(booksList)
  let cartBooksList = {}

  for (const [key, value] of Object.entries(values)) {
    if (value.quantity > 0) {
      cartBooksList[key] = value
    }
  }
  return cartBooksList
}

export default bookSlice.reducer

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

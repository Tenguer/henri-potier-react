import { createSlice } from "@reduxjs/toolkit"
import { getBooks } from "../../services/bookService"
import { newBooksWithQuantity } from "./booksSlice.service"

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    booksList: [],
    copyBooks: []
  },
  reducers: {
    saveBooksList(state, action) {
      state.booksList = action.payload
    },
    saveCopyBooks(state, action) {
      state.copyBooks = action.payload
    }
  }
})

export const { saveCopyBooks, saveBooksList } = bookSlice.actions;

export const selectBooks = state => state.book.booksList

export default bookSlice.reducer

// Asynchronous thunk action
export function fetchBooks() {
  return async dispatch => {
    try {
			const response = await getBooks()
      const books = response.data
      const booksWithQuantity = newBooksWithQuantity(books)

      dispatch(saveCopyBooks(books))
      dispatch(saveBooksList(booksWithQuantity))
		} catch (error) {
			console.error(error)
		}
  }
}

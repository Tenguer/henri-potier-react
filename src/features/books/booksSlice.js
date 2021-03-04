import { createSlice } from "@reduxjs/toolkit"
import { getBooks } from "../../services/bookService"

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    booksList: []
  },
  reducers: {
    saveBooks(state, action) {
      state.booksList = action.payload
    }
  }
})

export const { saveBooks } = bookSlice.actions;

export const selectBooks = state => state.book.booksList

export default bookSlice.reducer

// Asynchronous thunk action
export function fetchBooks() {
  return async dispatch => {
    try {
			const response = await getBooks()
      dispatch(saveBooks(response.data))
		} catch (error) {
			console.error(error)
		}
  }
}

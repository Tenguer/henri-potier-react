import React, { useEffect }  from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar"


import { getBooks } from "./services/bookService"
import { saveBooks } from "./features/books/booksSlice"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()

  // eslint-disable-next-line
  useEffect(async () => {
		try {
			const response = await getBooks()
      dispatch(saveBooks(response.data))
		} catch (error) {
			console.error(error)
		}
	}, [dispatch])

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;

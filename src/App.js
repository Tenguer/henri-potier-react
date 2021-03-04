import React, { useEffect }  from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar"
import { fetchBooks } from "./features/books/booksSlice"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
	}, [dispatch])

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;

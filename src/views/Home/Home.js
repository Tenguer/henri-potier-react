import React, { useState } from "react";
import { useSelector } from "react-redux"
import Book from "../../components/Book/Book"
import { selectBooksList } from "../../features/books/booksSlice"
import "./Home.scss"

export default function Home() {
  const booksList = useSelector(selectBooksList)
  const [booksCounter, setBooksCounter] = useState({})

  const increaseCompter = ({ isbn }) => {
    if (booksCounter[isbn]) {
      let tempo = { ...booksCounter }
      tempo[isbn] = tempo[isbn] + 1
      setBooksCounter(tempo)
    } else {
      const newBook = { [isbn] : 1 }
      setBooksCounter({ ...booksCounter, ...newBook })
    }
  }

  const decreaseCompter = ({ isbn }) => {
    if (booksCounter[isbn]) {
      let tempo = { ...booksCounter }
      tempo[isbn] = tempo[isbn] - 1
      setBooksCounter(tempo)
    }
  }

  const renderBookList = () => (
    Object.values(booksList).map(({ isbn, title, cover, synopsis, price, quantity, quantityPrice }) => (
      <Book
        key = { isbn }
        isbn = { isbn }
        title = { title }
        cover = { cover }
        synopsis = { synopsis }
        price = { price }
        booksCounter = { booksCounter }
        increaseCompter = { increaseCompter }
        decreaseCompter = { decreaseCompter }
        setBooksCounter = { setBooksCounter }
      />
    ))
  )

  return (
    <div>
      {
        renderBookList()
      }
    </div>
  )
}

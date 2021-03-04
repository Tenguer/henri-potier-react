import React from "react";
import Book from "../../components/Book/Book"
import { selectBooks } from "../../features/books/booksSlice"
import { useSelector } from "react-redux"
import "./Home.scss"

export default function Home() {
  const booksList = useSelector(selectBooks)

  const renderBookList = () => (
    booksList.map(({ isbn, title, cover, synopsis, price }) => (
      <Book
        key={ isbn }
        isbn={ isbn }
        title={ title }
        cover={ cover }
        synopsis={ synopsis }
        price={ price }
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

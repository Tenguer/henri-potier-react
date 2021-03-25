import React, { useState } from "react";
import { useSelector } from "react-redux"
import Book from "../../components/Book/Book"
import {increaseBookQuantity, selectBooksList} from "../../features/books/booksSlice"
import "./Home.scss"
import Quantity from "../../components/Quantity/Quantity";
import BookQuantity from "../../components/BookQuantity/BookQuantity";

export default function Home() {
  const booksList = useSelector(selectBooksList)

  const addToCart = () => dispatch(updateQuantity({ isbn, quantity }));

  const renderBookList = () => (
    Object.values(booksList).map(({ isbn, title, cover, synopsis, price, quantity, quantityPrice }) => (
      <Book
        key = { isbn }
        isbn = { isbn }
        title = { title }
        cover = { cover }
        synopsis = { synopsis }
        price = { price }
      >
        <BookQuantity
          isbn={isbn}
          onAddToCart={addToCart}
       />
      </Book>
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

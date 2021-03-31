import React from "react";
import { useDispatch, useSelector } from "react-redux"
import Book from "../../components/Book/Book"
import QuantityButton from '../../components/QuantityButton/QuantityButton'
import { selectBooksList } from "../../features/books/booksSlice"
import { addToCart } from "../../features/cart/cartSlice"
import "./Home.scss"

export default function Home() {
  const booksList = useSelector(selectBooksList)
  const dispatch = useDispatch()

  const addCart = (isbn) => (quantity) => {
    dispatch(addToCart({ isbn, quantity }))
  }

  const renderBookList = () => (
    Object.values(booksList).map(({ isbn, title, cover, synopsis, price }) => (
      <Book
        key = { isbn }
        isbn = { isbn }
        title = { title }
        cover = { cover }
        synopsis = { synopsis }
        price = { price }
      >
        <QuantityButton
          data-testid="increaseButton"
          onSubmitQuantity = { addCart(isbn) }
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

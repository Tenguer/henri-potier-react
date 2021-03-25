import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { increaseBookQuantity } from "../../features/books/booksSlice"
import QuantityButton from '../Quantity/Quantity'

export default function Book(props) {
  const { children, isbn, title, cover, price, booksCounter, setBooksCounter } = props
  const dispatch = useDispatch();


  return (
    <article className="book">
      <div className="book-img">
        <Link to={{
            pathname: `/book/${ isbn }`,
            state: {
              ...props
            }
          }}
          className="book-title"
        >

					<img src={ cover } alt={ `Couvertude de : ${ title }` } />
				</Link>
      </div>

      <div>
        <Link to={{
            pathname: `/book/${ isbn }`,
            state: {
              ...props
            }
          }}
          className="book-title"
        >
            <p>{ title }</p>
				</Link>

				<div>{ price }€</div>

        <div>
          <span>Quantité : </span>
          { booksCounter[isbn] || 0 }
        </div>

       {children}
      </div>
    </article>
  )
}

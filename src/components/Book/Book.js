import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { increaseBookQuantity } from "../../features/books/booksSlice"
import QuantityButton from '../QuantityButton/QuantityButton'

export default function Book(props) {
  const { isbn, title, cover, price, booksCounter, increaseCompter, decreaseCompter, setBooksCounter } = props
  const dispatch = useDispatch();

  const addCart = ({ isbn }) => {
    if (booksCounter[isbn]) {
      const quantity = booksCounter[isbn]
      const newBooksCounter = { ...booksCounter }

      dispatch(increaseBookQuantity({ isbn, quantity }))
      delete newBooksCounter[isbn]
      setBooksCounter(newBooksCounter)
    } else {
      dispatch(increaseBookQuantity({ isbn, "quantity" : 1 }))
    }
  }

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

        <QuantityButton
          data-testid="increaseButton"
          isbn = { isbn }
          increaseCompter = { increaseCompter }
          decreaseCompter = { decreaseCompter }
				/> 

        <button
          className="btn-add"
          onClick={ () => addCart({isbn}) }
        >
          Ajouter au panier
        </button>
      </div>
    </article>
  )
}

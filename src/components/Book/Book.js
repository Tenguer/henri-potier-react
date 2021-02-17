import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import AmountButton from '../../components/AmountButton/AmountButton'

export default function Book(props) {
  const { isbn, title, cover, price  } = props
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

        <AmountButton
          data-testid="increaseButton"
          amount = { 1 }
          isbn = { isbn }
				/> 

        <button
          className="btn-add"
          onClick={ () => dispatch(addToCart({isbn})) }
        >
          Ajouter au panier
        </button>
      </div>
    </article>
  )
}

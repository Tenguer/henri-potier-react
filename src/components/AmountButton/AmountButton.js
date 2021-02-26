import React from "react"
import {  useSelector, useDispatch } from 'react-redux'
import {
  increaseBookToCart,
  decreaseBookToCart
} from '../../features/cart/cartSlice'
import "./AmountButton.scss"

export default function Book({ amount, isbn }) {
  const stateAmount =  useSelector(state => state.cart.temporyCart[isbn] ? state.cart.temporyCart[isbn] : 0)

  const dispatch = useDispatch();

  return (
		<div className="amount_container">
      <div>
        <span>Quantité : </span>
        { stateAmount } 
      </div>

      <div>
        <button
          className="amount_btn"
          data-testid="increase-button"
          onClick={ () => dispatch(increaseBookToCart({amount, isbn })) }
        >
          +
        </button>

        <button
        className="amount_btn"
        data-testid="decrease-button"
          onClick={ () => dispatch(decreaseBookToCart({amount, isbn })) }
        >
          -
        </button>
      </div>
		</div>
)}

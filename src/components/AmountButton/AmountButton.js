import React from "react"
import {  useSelector, useDispatch } from 'react-redux'
import {
  increase,
  decrease,
  selectQty
} from '../../features/button/buttonSlice'
import "./AmountButton.css"

export default function Book({ amount, isbn }) {
  const qty = useSelector(selectQty);
  const dispatch = useDispatch();
  console.log( 'amountbutton', amount, isbn )

  return (
		<div className="amount_container">
      <div>
        <span>Quantité : </span>
        { qty }
        0
      </div>
      
      <div>
        <button
          className="amount_btn"
          data-testid="increase-button"
          onClick={ () => dispatch(increase({amount, isbn})) }
        >
          +
        </button>

        <button
        className="amount_btn"
        data-testid="decrease-button"
          onClick={ () => dispatch(decrease({amount, isbn})) }
        >
          -
        </button>
      </div>
		</div>
)}

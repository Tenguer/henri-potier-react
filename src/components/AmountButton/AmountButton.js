import React from "react"
import {  useSelector, useDispatch } from 'react-redux'
import {
  increase,
  decrease,
  selectQty
} from './buttonSlice'
import "./AmountButton.css"

export default function Book({amount}) {
  const qty = useSelector(selectQty);
  const dispatch = useDispatch();

  return (
		<div className="amount_container">
      <div>
        <span>Quantité : </span>
        { qty }
      </div>
      
      <div>
        <button
          className="amount_btn"
          onClick={ () => dispatch(increase(amount)) }
        >
          +
        </button>

        <button
        className="amount_btn"
          onClick={ () => dispatch(decrease(amount)) }
        >
          -
        </button>
      </div>
		</div>
)}

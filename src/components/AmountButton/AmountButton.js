import React from "react"
import {  useSelector, useDispatch } from 'react-redux'
import {
  increase,
  decrease,
  selectQty
} from '../../features/button/buttonSlice'
import "./AmountButton.css"

export default function Book() {
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
          data-testid="increase-button"
          onClick={ () => dispatch(increase()) }
        >
          +
        </button>

        <button
        className="amount_btn"
        data-testid="decrease-button"
          onClick={ () => dispatch(decrease()) }
        >
          -
        </button>
      </div>
		</div>
)}

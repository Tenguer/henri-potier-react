import React from "react"
import "./AmountButton.css"

export default function Book({ qty = 1, increase, decrease, amount = 0}) {

  return (
    <div className="amount_container" data-testid="increaseButton">
      <div>{`Quantité : ${qty}`}</div>

      <div>
        <button
          data-testid="increase-button"
          className="amount_btn"
          onClick={ () => increase(amount) }
        >
          +
        </button>

        <button
        className="amount_btn"
          onClick={ decrease }
        >
          -
        </button>
      </div>
		</div>
)}

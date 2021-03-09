import React from "react"
import "./QuantityButton.scss"

export default function Book({ isbn, increaseCompter, decreaseCompter  }) {
  return (
		<div className="quantity_container">
      <div>
        <button
          className="quantity_btn"
          data-testid="increase-button"
          onClick={ () => increaseCompter({ isbn }) }
        >
          +
        </button>

        <button
          className="quantity_btn"
          data-testid="decrease-button"
          onClick={ () => decreaseCompter({ isbn }) }
        >
          -
        </button>
      </div>
		</div>
)}

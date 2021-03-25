import React from "react"
import "./Quantity.scss"

export default function Quantity({ increaseCompter, decreaseCompter  }) {
  return (
    <div className="quantity_container">
      <div>
        <button
          className="quantity_btn"
          data-testid="increase-button"
          onClick={ () => increaseCompter() }
        >
          +
        </button>

        <button
          className="quantity_btn"
          data-testid="decrease-button"
          onClick={ () => decreaseCompter() }
        >
          -
        </button>
      </div>
    </div>
)}

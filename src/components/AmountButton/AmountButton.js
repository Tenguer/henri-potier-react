import React from "react"
import "./AmountButton.css"

export default function Book({ qty = 1, increase, decrease}) {

  return (
		<div className="amount_container">
      <div>
        <span>Quantité : </span>
        { qty }
      </div>
      
      <div>
        <button
          className="amount_btn"
          onClick={ increase }
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

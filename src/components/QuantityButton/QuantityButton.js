import React, { useState } from "react"
import "./QuantityButton.scss"

export default function QuantityButton({ onSubmitQuantity}) {  
  const [quantity, setquantity] = useState(0)

  const increase = () => {
    setquantity(quantity + 1)
  }

  const decrease = () => {
    setquantity(quantity - 1)
  }

  const submitQuantity = (quantity) => {
    onSubmitQuantity(quantity || 1 )
    setquantity(0)
  }

  return (
		<div>
      <div className="quantity_container">
        <span>{ quantity }</span>
        <div>
          <button
            className="quantity_btn"
            data-testid="increase-button"
            onClick={ () => increase() }
          >
            +
          </button>

          <button
            className="quantity_btn"
            data-testid="decrease-button"
            onClick={ () => decrease() }
          >
            -
          </button>
        </div>
      </div>
      <div>
      <button
          className="btn-add"
          data-testid="increaseButton-add"
          onClick={ () => submitQuantity(quantity) }
        >
          Ajouter au panier
        </button>
      </div>
    </div>
)}

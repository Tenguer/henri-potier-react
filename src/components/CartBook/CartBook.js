import React from 'react'
import './CartBook.scss'

function CartBook ({ cover, title, quantity, quantityPrice }) {
  return (
    <div className="cartbook__container">
      <div className="cartbook__img">
        <img src={ cover } alt={ `Couverture du livre ${ title }` }/>
      </div>
      <div className="cartbook__information">
        <div>
          Title: { title }
        </div>
        <div>
          Quantité : { quantity }
        </div>
        <div>
          Prix : { quantityPrice } €
        </div>
      </div>  
    </div>
  )
}

export default CartBook;
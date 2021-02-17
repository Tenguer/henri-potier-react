import React from 'react'
import './CartBook.scss'

function CartBook ({ cover, title, price, qty, isbn }) {
  return (
    <div className="cartbook__container">
      <div className="cartbook__img">
        <img src={ cover } alt={ `Couverture du livre ${title}`}/>
      </div>
      <div className="cartbook__information">
        <div>
          Title: { title }
        </div>
        {/* <div>
          isbn: { isbn }
        </div> */}
        <div>
          Price : { price * qty}
        </div>
        <div>
          Quantité : { qty }
        </div>
      </div>
    </div>
  )
}

export default CartBook;
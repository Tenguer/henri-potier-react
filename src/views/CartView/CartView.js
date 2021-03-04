import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CartBook from "../../components/CartBook/CartBook"
import {
	selectBooksCart,
	selectCartPriceTotal,
	selectOfferPath,
	fetchOffers,
	selectCartPriceWithOffer,
	// addCartPrice
} from  "../../features/cart/cartSlice"

export default function CartView() {
	const cartList = useSelector(state => selectBooksCart(state))
	const totalPrice = useSelector(() => selectCartPriceTotal(cartList))
	const pathCart = useSelector(state => selectOfferPath(state))
  const dispatch = useDispatch()
	const cartPriceWithOffer = useSelector(state => selectCartPriceWithOffer(state))
 
	// eslint-disable-next-line
  useEffect(() => {
		if (pathCart.length > 0) {
			dispatch(fetchOffers(pathCart, totalPrice))
		}
	}, [dispatch, pathCart, totalPrice])

	return (
		<div>
      <div>Cart view</div>

			{
				cartList.map(({ isbn, title, cover, price, cartPrice, qty }) => 
					<CartBook
						key = { isbn }
						title = { title }
						cover = { cover }
						price = { price }
						cartPrice = { cartPrice }
						qty = { qty }
					>
					</CartBook>
				)
			}
			<div>
				Prix du panier: { totalPrice } €
			</div>
			<div>Prix total avec réduction : { cartPriceWithOffer } €</div>
		</div>
	)
}

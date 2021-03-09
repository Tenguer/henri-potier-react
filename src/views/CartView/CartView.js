import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import CartBook from "../../components/CartBook/CartBook"
import {
	selectCartPriceTotal,
	selectOfferPath,
	fetchOffers
} from  "../../features/cart/cartSlice"
import { selectBooksListTocart } from "../../features/books/booksSlice"

export default function CartView() {
  const dispatch = useDispatch()
	const cartList = useSelector(state => selectBooksListTocart(state))
	const totalPrice = useSelector(() => selectCartPriceTotal(cartList))
	const pathCart = useSelector(() => selectOfferPath(cartList))
	const [offer, setoffer] = useState(0)

	// eslint-disable-next-line
  useEffect(() => {
		if (pathCart.length > 0) {
			dispatch(fetchOffers(pathCart, totalPrice)).then(response => {
				setoffer(response.payload)
			})
		}
	}, [dispatch, pathCart, totalPrice])

  const renderBookList = () => (
    Object.values(cartList).map(({ isbn, title, cover, price, quantityPrice, quantity }) => (
      <CartBook
				key = { isbn }
				title = { title }
				cover = { cover }
				price = { price }
				quantityPrice = { quantityPrice }
				quantity = { quantity }
      />
    ))
  )

	return (
		<div>
      <div>Cart view</div>
			{
				renderBookList()
			}
			<div>
				Prix du panier: { totalPrice } €
			</div>
			<div>Prix total avec réduction : {offer} €</div>
		</div>
	)
}

import React from "react"
import { useSelector } from "react-redux"
import CartBook from "../../components/CartBook/CartBook"
import { selectBooksListTocart } from  "../../features/cart/cartSlice"

export default function CartView() {
	const cartList = useSelector(state => selectBooksListTocart(state))
	const totalPrice = useSelector(state => state.cart.cartPrice)
	const cartPriceWithOffer = useSelector(state => state.cart.cartPriceWithOffer)

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
			<div>Prix total avec réduction : { cartPriceWithOffer } €</div>
		</div>
	)
}

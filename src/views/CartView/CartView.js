import React from "react"
import { useSelector } from 'react-redux'
import CartBook from '../../components/CartBook/CartBook'

export default function CartView() {
	const books = useSelector(state => state.cart.cart)

	return (
		<div>
      cart view
			{
				Object.keys(books).map((isbn) => 
				<CartBook
						key={isbn}
						isbn={isbn}
						qty={books[isbn]}
					>
					</CartBook>
				)
			}
		</div>
	)
}

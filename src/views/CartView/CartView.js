import React from "react"
import { useSelector } from 'react-redux'
import CartBook from '../../components/CartBook/CartBook'
import { selectBooksCart } from  "../../features/books/booksSlice"
import { selectCart } from  "../../features/cart/cartSlice"

export default function CartView() {
	const cartList = useSelector(selectCart)
	const books = useSelector(state => selectBooksCart(state, cartList))

	return (
		<div>
      cart view
			{
				books.map(({isbn, title, cover, price, cartPrice, cartQty}) => 
					<CartBook
						key={isbn}
						title={title}
						cover={cover}
						price={price}
						cartPrice={cartPrice}
						qty={cartQty}
					>
					</CartBook>
				)
			}
		</div>
	)
}

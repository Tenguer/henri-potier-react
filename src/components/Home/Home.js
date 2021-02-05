
import React, { useState, useEffect } from "react";
import { getBooks } from "../../services/BookService"
import Book from "../Book/Book"
import "./Home.css"
import { Route, Switch } from "react-router-dom";
// import BookView from "../BookView/BookView";
// import { useParams } from "@reach/router";
import AmountButton from '../AmountButton/AmountButton'
import {increasePure} from "./Home.service";

export default function Home() {
	const [books, setBooks] = useState([])
	const [qty, setQty] = useState(0)

	useEffect(() => {
		getBooks()
			.then(response => {
				setBooks(response.data)
			})
			.catch(error => {
				console.error(error)
			});
		}, [])

		// const bookId = useParams();
		// let selectedBook = {};
		// if (bookId) {
		// 	selectedBook = books.find(book => book.isbn === bookId);
		// }


		function increase (amount) {
			const newQyt = increasePure(qty, amount)
			setQty(newQyt);
			console.log("increase")
		}

		function decrease (amount) {
			if (qty > 0) {
				setQty(qty - amount)
			}
			console.log("decrease")
		}

	return (
		<div>
				<AmountButton
					data-testid="increaseButton"
					amount={2}
					qty = { qty }
					increase = { increase }
					decrease = { decrease }
				/>

			<Switch>
				{/* <Route path="/book/:isbn" exact>
					<BookView {...selectedBook} />
				</Route> */}
				<Route path="" exact>
				{
					books.map(({ isbn, title, cover, synopsis, price }) => (
						<Book
							key={ isbn }
							isbn={ isbn }
							title={ title }
							cover={ cover }
							synopsis={ synopsis }
							price={ price }
						/>
					))
				}
				</Route>
			</Switch>
		</div>
	)
}

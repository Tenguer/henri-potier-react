import React, { useState, useEffect } from "react";
import { getBooks } from "../../services/bookService"
import Book from "../../components/Book/Book"
import BookView from "../BookView/BookView"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./Home.css"
import AmountButton from "../../components/AmountButton/AmountButton";

export default function Home() {
	const [books, setBooks] = useState([])

  // eslint-disable-next-line
  useEffect(async () => {
		try {
			const response = await getBooks()
      setBooks(response.data)
		} catch (error) {
			console.error(error)
		}
	}, [])

  return (
    <div>
      <Router>
				<Switch>
					<Route path="/book/:isbn">
						<BookView />
					</Route>

					<Route path="/">
            {
              books.map(({ isbn, title, cover, synopsis, price }) => (
                <Book
                  key={ isbn }
                  isbn={ isbn }
                  title={ title }
                  cover={ cover }
                  synopsis={ synopsis }
                  price={ price }
                >
					<AmountButton
						data-testid="increaseButton"
						amount = { 1 }
					/>
				</Book>
              ))
            }
      		</Route>
				</Switch>
			</Router>
    </div>
  )
}

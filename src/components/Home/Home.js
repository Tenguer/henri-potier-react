
import React, { useState, useEffect } from "react";
import { getBooks } from "../../services/BookService"
import Book from "../Book/Book"
import "./Home.css"

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
		</div>
	)
}

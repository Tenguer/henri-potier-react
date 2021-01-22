import React, { useState, useEffect } from 'react';
import apiService, { getBooks } from '../../services/BookService'
import Book from '../Book/Book'
import './Home.css'

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    try {
      const res = await apiService.getBooks();
      setBooks(res.data)
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div>
        {
          books.map(({ isbn, title, cover, synopsis }) => (
            <Book
              key={isbn}
              isbn={isbn}
              title={title}
              cover={cover}
              synopsis={synopsis}
            />
          ))
        }
    </div>
  );
}

export default Home;

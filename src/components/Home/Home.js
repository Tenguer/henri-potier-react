import React, { useState, useEffect } from 'react';
import apiClient from '../../services/BookService'
import Book from '../Book/Book'
import './Home.css'

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    apiClient.get('/books')
    .then(res => {
      console.log(res.data)
      setBooks(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
        {
          books.map(book => (
            <Book book={book} key={book.isbn}></Book>
          ))
        }
    </div>
  );
}

export default Home;
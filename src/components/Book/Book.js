import React from 'react'

function Book(book) {
  return (
    <article className="book">
      <div className="book-img">
        <a href="/" className="book-title">
          <img src={book.book.cover} alt={`Couvertude de : ${book.title}`} />
        </a>
      </div>
      
      <div className="book-info">
        <a href="/" className="book-title">
          <p>{ book.book.title }</p>
        </a>
        <div>{book.book.price}€</div>

        <button className="btn-add">
          Ajouter au panier
        </button>
      </div>
    </article>
)}

export default Book;
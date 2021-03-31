import React from 'react'
import { Link } from "react-router-dom"

export default function Book(props) {
  const { children, isbn, title, cover, price } = props

  return (
    <article className="book">
      <div className="book-img">
        <Link to={{ pathname: `/book/${ isbn }`, state: { ...props } }} className="book-title" >
					<img src={ cover } alt={ `Couvertude de : ${ title }` } />
				</Link>
      </div>

      <div>
        <Link to={{ pathname: `/book/${ isbn }`, state: { ...props } }} className="book-title" >
          <p>{ title }</p>
				</Link>

				<div>{ price }€</div>
        
        { children }

      </div>
    </article>
  )
}

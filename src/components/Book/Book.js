import React from "react"
import { Link } from "react-router-dom"

export default function Book({ isbn, title, cover, price, synopsis  }) {
	return (
		<article className="book">
			<div className="book-img">
				<Link to={{
					pathname: `/book/${ isbn }`,
					state: { isbn, title, cover, price, synopsis  }
				}}
					  className="book-title"
				>

					<img src={ cover } alt={ `Couvertude de : ${ title }` } />
				</Link>
			</div>

			<div className="book-info">
				<Link to={{
					pathname: `/book/${ isbn }`,
					state: { isbn, title, cover, price, synopsis  }
				}}
				className="book-title"
				>
					<p>{ title }</p>
				</Link>

				<div>{ price }€</div>

				<button className="btn-add">
          Ajouter au panier
				</button>
			</div>
		</article>
	)}

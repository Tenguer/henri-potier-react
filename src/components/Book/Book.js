import React from 'react'
import { Link } from "react-router-dom"
import AmountButton from '../../components/AmountButton/AmountButton'

export default function Book(props) {
  const { isbn, title, cover, price  } = props
  // const [qty, setQty] = useState(0)


  // function increase (amount) {
  //   setQty(qty + amount)
  //   console.log("increase")
  // }
  
  // function decrease (amount) {
  //   if (qty > 0) {
  //     setQty(qty - amount)
  //   }
  //   console.log("decrease")
  // }

  return (
    <article className="book">
      <div className="book-img">
        <Link to={{
            pathname: `/book/${ isbn }`,
            state: {
              ...props
            }
          }}
          className="book-title"
        >

					<img src={ cover } alt={ `Couvertude de : ${ title }` } />
				</Link>
      </div>

      <div>
        <Link to={{
            pathname: `/book/${ isbn }`,
            state: {
            ...props
            }
          }}
          className="book-title"
          >
            <p>{ title }</p>
				</Link>

				<div>{ price }€</div>

        <AmountButton
          data-testid="increaseButton"
          amount = { 1 }
				/> 

        <button className="btn-add">Ajouter au panier</button>
      </div>
    </article>
  )
}

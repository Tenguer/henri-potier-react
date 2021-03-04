import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../../views/Home/Home'
import CartView from '../../views/CartView/CartView'
import BookView from "../../views/BookView/BookView"
import './NavBar.scss'

function NavBar() {
 return (
  <Router>
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="/"
              className="navbar__link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="navbar__link"
            >
              Panier
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/cart" exact>
          <CartView />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/book/:isbn">
						<BookView />
					</Route>
      </Switch>
    </div>
  </Router>
 )
}

export default NavBar;
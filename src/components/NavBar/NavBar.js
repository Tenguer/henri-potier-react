import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../../views/Home/Home'
import CartView from '../../views/CartView/CartView'
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
              Pannier
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/cart">
          <CartView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
 )
}

export default NavBar;
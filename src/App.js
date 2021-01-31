import "./App.css"
import Home from "./components/Home/Home.js"
import BookView from "./components/BookView/BookView.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function App() {
	return (
		<div className="App" id="app">
			<Router>
				<Switch>
					<Route path="/book/:isbn">
						<BookView />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

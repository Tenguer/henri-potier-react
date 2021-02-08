import React from "react"
import { useLocation } from "react-router-dom"

export default function BookView() {
	let { title, cover, isbn, price, synopsis } = useLocation().state

	return (
		<div>
			<div style={{color: "red"}}>Hello c'est le BookView de : { isbn }</div>
			<div style={{color: "orange"}}>cover: { cover }</div>
			<div style={{color: "green"}}>isbn: { isbn }</div>
			<div style={{color: "blue"}}>price: { price }</div>
			<div style={{color: "purple"}}>synopsis: { synopsis }</div>
			<div style={{color: "brown"}}>title: { title }</div>
		</div>
	)
}

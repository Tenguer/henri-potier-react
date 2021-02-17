import React from "react"
import { useLocation } from "react-router-dom"

export default function BookView() {
	let { title, cover, isbn, price, synopsis } = useLocation().state

	return (
		<div>
			<div>Hello c'est le BookView de : { isbn }</div>
			<div>cover: { cover }</div>
			<div>isbn: { isbn }</div>
			<div>price: { price }</div>
			<div>synopsis: { synopsis }</div>
			<div>title: { title }</div>
		</div>
	)
}

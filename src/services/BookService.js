import axios from "axios"

const apiClient = axios.create({
	baseURL: "https://henri-potier.techx.fr/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
})

export const getBooks = () => {return apiClient.get("/books")}
export const getBook = (isbn) => { return apiClient.get("/books/" + isbn) }
export const getOffer = (books) => {return apiClient.get(`/books/${books}/commercialOffers`)}


export default apiClient
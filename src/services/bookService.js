import axios from 'axios'

const apiClient = axios.create({
  baseURL: "https://henri-potier.techx.fr/",
  withCredentials: false,
  headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
})

export const getBooks = () => { return apiClient.get("/books") }
export const getOffer = (books) => {
  return apiClient.get(`/books/${ books }/commercialOffers`)
}

export default apiClient;
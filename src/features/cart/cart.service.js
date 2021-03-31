import { getOffer } from "../../services/bookService"

export function offerCalc(offers, totalPrice) {
    let offer = 0;
    let finalPrice = totalPrice;

    for (let i = 0; i < offers.length; i++) {
      if (offers[i].type === "percentage") {
        offer = totalPrice -  (totalPrice * offers[i].value) / 100;
      } else if (offers[i].type === "minus") {
        offer = totalPrice - offers[i].value;
      } else if (offers[i].type === "slice") {
        if  (totalPrice > offers[i].sliceValue) {
          offer = Math.floor(
            totalPrice -  (totalPrice / offers[i].sliceValue) * offers[i].value
          );
        }
      }
      if  (totalPrice > offer && finalPrice > offer) {
        finalPrice = offer;
      }
    }
  return finalPrice
}

export function getCartPrice(cartList) {
  const booksValues = Object.values(cartList)
  let cartPrice = 0

  booksValues.forEach(book => cartPrice += book.quantityPrice)
  return cartPrice
}

export function getOfferPath(cartList) {
  return cartList.map(book => 
    Array.from(Array(book.quantity)).map(() => book.isbn)
  )
}

export async function fetchOffers({ cartPrice, cartList}) {
  try {
    const path = getOfferPath(cartList)
    const response = await getOffer(path)
    return offerCalc(response.data.offers, cartPrice)
  } catch (error) {
    console.error(error)
  }
}
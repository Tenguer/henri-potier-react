import bookSlice, { saveBooks, selectBooks, selectBooksCart } from "./booksSlice"

describe("saveBook", () => {
  it("Save book to state", () => {
    // given 
    const state = { booksList: {} };
    // when
    const result = bookSlice(state, { type: saveBooks.type, payload: { "123" : 1 }})
    // then
    expect(result).toEqual({ booksList:{ "123": 1 }})
  })
})

describe("selectBooks", () => {
  it("Return books", () => {
    //given
    const state = { book:{ booksList: { "123":2, "12":3, "24":19 } } }
    // when
    const result = selectBooks(state)
    // then
    expect(result).toEqual({ "123":2, "12":3, "24":19})
  })
})

describe("selectBooksCart", () => {
  it("Return books", () => {
    //given
    const state = {
      book: {
        booksList: {
          0: {
            isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
            title: "Henri Potier à l'école des sorciers",
            price: 35,
            cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media"
          },
          1: {
            isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
            title: "Henri Potier et la Chambre des secrets",
            price: 30,
            cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp1.jpg?alt=media"
          },
          2: {
            isbn: "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
            title: "Henri Potier et le Prisonnier d'Azkaban",
            price: 30,
            cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media"
          }
        }
      }
    }
    const cartList = {
      "c8fabf68-8374-48fe-a7ea-a00ccd07afff": 2,
      "a460afed-e5e7-4e39-a39d-c885c05db861": 3,
      "fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 19
    }
    // when
    const result = selectBooksCart(state, cartList)
    // then
    expect(result).toEqual([
      {
        isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        title: "Henri Potier à l'école des sorciers",
        price: 35,
        cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
        cartQty: 2,
        cartPrice: 70
      },
      {
        isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
        title: "Henri Potier et la Chambre des secrets",
        price: 30,
        cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp1.jpg?alt=media",
        cartQty: 3,
        cartPrice: 90
      },
      {
        isbn: "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
        title: "Henri Potier et le Prisonnier d'Azkaban",
        price: 30,
        cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media",
        cartQty: 19,
        cartPrice: 570
      }
    ]
    )
  })
})

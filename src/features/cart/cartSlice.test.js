import cartSlice, {
  selectAmount,
  selectBooksCart,
  selectCartPriceTotal,
  addToCart,
  increaseBookToCart,
  decreaseBookToCart
} from "./cartSlice"

describe("selectAmount", () => {
  it("Should return 0 when cart is empty", () => {
    // given 
    const state = {
      cart: {
        cartList: {}
      }
    };
    const index = 0;
    // when
    const result = selectAmount(state, index)
    // then
    expect(result).toBe(0)
  })

  it("Should return qty given when index is existing", () => {
    // given 
    const state = {
      cart: {
        cartList: { "123": 1 , "234": 2 }
      }
    };
    const isbn = "123";
    // when
    const result = selectAmount(state, isbn)
    // then
    expect(result).toBe(1)
  })
})

describe("addToCart", () => {
  it("Test de addToCart ", () => {
    // given 
    const state = {
      cartList: {},
      temporyCart: {}
    };
    const isbn = "123";
    // when
    const result = cartSlice(state, { type: addToCart.type, payload: { isbn } })
    // then
    expect(result).toEqual({ cartList: { "123": 1 }, temporyCart: {} })
  })
})

describe("increaseBookToCart", () => {
  it("Test add qty book", () => {
    // given
    const state = { cartList: {}, temporyCart: { "123": 1 } };
    const isbn = "123"
    // when
    const result = cartSlice(state, { type: increaseBookToCart.type, payload: { isbn } })
    // then
    expect(result).toEqual({ cartList: {}, temporyCart: { "123": 2 } })
  })
})

describe("decreaseBookToCart", () => {
  it("Decrease whent qty === 1", () => {
    // given
    const state = { cartList: {}, temporyCart: { "123": 1 } };
    const isbn = "123"
    // when
    const result = cartSlice(state, { type: decreaseBookToCart.type, payload: { isbn } })
    // then
    expect(result).toEqual({ cartList:{}, temporyCart: {} })
  })

  it("Decrease when qty > 1", () => {
    // given
    const state = { cartList: {}, temporyCart: { "123": 4 } };
    const isbn = "123"
    // when
    const result = cartSlice(state, { type: decreaseBookToCart.type, payload: { isbn } })
    // then
    expect(result).toEqual({ cartList: {}, temporyCart: {"123": 3} })
  })
})

describe("selectBooksCart", () => {
  it("Return books list object for cart, with qty and price", () => {
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
      },
      cart: {
        cartList : {
          "c8fabf68-8374-48fe-a7ea-a00ccd07afff": 2,
          "a460afed-e5e7-4e39-a39d-c885c05db861": 3,
          "fcd1e6fa-a63f-4f75-9da4-b560020b6acc": 4
        }
      }
    }
    // when
    const result = selectBooksCart(state)
    // then
    expect(result).toEqual([
      {
        isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        title: "Henri Potier à l'école des sorciers",
        price: 35,
        cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
        qty: 2,
        cartPrice: 70
      },
      {
        isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
        title: "Henri Potier et la Chambre des secrets",
        price: 30,
        cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp1.jpg?alt=media",
        qty: 3,
        cartPrice: 90
      },
      {
        isbn: "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
        title: "Henri Potier et le Prisonnier d'Azkaban",
        price: 30,
        cover: "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media",
        qty: 4,
        cartPrice: 120
      }
    ])
  })
})

describe("carPriceTotal", () => {
  it("cartPriceTotal return goob price", () => {
    //given
    const state = {}
    const cartList = [
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
        cartQty: 4,
        cartPrice: 120
      }
    ]
    //when
    const result = selectCartPriceTotal(state, cartList)
    //then
    expect(result).toBe(280)
  })
})
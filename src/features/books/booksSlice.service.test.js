import { newBooksWithQuantity } from "./booksSlice.service"

describe("newBooksWithQuantity", () => {
  it("newBooksWithQuantity return new object with quantity and price", () => {
    // given
    const books = {
      0: {
        isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        title: "Henri Potier à l'école des sorciers",
        price: 35
      },
      1: {
        isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
        title: "Henri Potier et la Chambre des secrets",
        price: 30
      },
      2: {
        isbn: "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
        title: "Henri Potier et le Prisonnier d'Azkaban",
        price: 30
      },
      3: {
        isbn: "c30968db-cb1d-442e-ad0f-80e37c077f89",
        title: "Henri Potier et la Coupe de feu",
        price: 29
      },
      4: {
        isbn: "78ee5f25-b84f-45f7-bf33-6c7b30f1b502",
        title: "Henri Potier et l'Ordre du phénix",
        price: 28
      },
      5: {
        isbn: "cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6",
        title: "Henri Potier et le Prince de sang-mêlé",
        price: 30
      },
      6: {
        isbn: "bbcee412-be64-4a0c-bf1e-315977acd924",
        title: "Henri Potier et les Reliques de la Mort",
        price: 35
      }
    }
    // when
    const result = newBooksWithQuantity(books)
    // then
    expect(result).toEqual([{
      "c8fabf68-8374-48fe-a7ea-a00ccd07afff": {
        isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        title: "Henri Potier à l'école des sorciers",
        price: 35,
        quantity: 0,
        quantityPrice: 0
      },
      "a460afed-e5e7-4e39-a39d-c885c05db861": {
        isbn: "a460afed-e5e7-4e39-a39d-c885c05db861",
        title: "Henri Potier et la Chambre des secrets",
        price: 30,
        quantity: 0,
        quantityPrice: 0
      },
      "fcd1e6fa-a63f-4f75-9da4-b560020b6acc": {
        isbn: "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
        title: "Henri Potier et le Prisonnier d'Azkaban",
        price: 30,
        quantity: 0,
        quantityPrice: 0
      },
      "c30968db-cb1d-442e-ad0f-80e37c077f89": {
        isbn: "c30968db-cb1d-442e-ad0f-80e37c077f89",
        title: "Henri Potier et la Coupe de feu",
        price: 29,
        quantity: 0,
        quantityPrice: 0
      },
      "78ee5f25-b84f-45f7-bf33-6c7b30f1b502": {
        isbn: "78ee5f25-b84f-45f7-bf33-6c7b30f1b502",
        title: "Henri Potier et l'Ordre du phénix",
        price: 28,
        quantity: 0,
        quantityPrice: 0
      },
      "cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6": {
        isbn: "cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6",
        title: "Henri Potier et le Prince de sang-mêlé",
        price: 30,
        quantity: 0,
        quantityPrice: 0
      },
      "bbcee412-be64-4a0c-bf1e-315977acd924": {
        isbn: "bbcee412-be64-4a0c-bf1e-315977acd924",
        title: "Henri Potier et les Reliques de la Mort",
        price: 35,
        quantity: 0,
        quantityPrice: 0
      }
    }])
  })
})
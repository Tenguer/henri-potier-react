import bookSlice, { saveCopyBooks, saveBooksList, selectBooks, increaseBookQuantity, decreaseBookQuantity } from "./booksSlice"

describe("saveCopyBooks", () => {
  it("Save book to state", () => {
    // given 
    const state = { booksList: {}, copyBooks: {} };
    // when
    const result = bookSlice(state, { type: saveCopyBooks.type, payload: { "123" : 1 }})
    // then
    expect(result).toEqual({ booksList: {}, copyBooks: { "123": 1 }})
  })
})

describe("saveBooksList", () => {
  it("saveBooksList to state", () => {
    // given 
    const state = { booksList: {}, copyBooks: {} };
    // when
    const result = bookSlice(state, { type: saveBooksList.type, payload: { "123" : 1 }})
    // then
    expect(result).toEqual({ booksList: {"123":1}, copyBooks: {}})
  })
})

describe("selectBooks", () => {
  it("Return books", () => {
    //given
    const state = { book: { booksList: { "123":2, "12":3, "24":19 }, copyBooks: {} } }
    // when
    const result = selectBooks(state)
    // then
    expect(result).toEqual({ "123":2, "12":3, "24":19})
  })
})

// describe("increaseBookQuantity", () => {
//   it("Increase quantity", () => {
//     //given
//     const state = {
//       booksList: [
//         {
//           isbn:"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
//           title:"Henri Potier à l'école des sorciers",
//           price:35,
//           cover:"https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
//           "quantity": 0,
//           "quantityPrice": 0
//         },
//           {
//           isbn:"a460afed-e5e7-4e39-a39d-c885c05db861",
//           title:"Henri Potier et la Chambre des secrets",
//           price:30,
//           cover:"https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp1.jpg?alt=media",
//           "quantity": 0,
//           "quantityPrice": 0
//         },
//         {
//           isbn:"fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
//           title:"Henri Potier et le Prisonnier d'Azkaban",
//           price:30,
//           cover:"https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media",
//           "quantity": 0,
//           "quantityPrice": 0
//         }
//       ]
//     }
//     const isbn = "c8fabf68-8374-48fe-a7ea-a00ccd07afff"
//     // when
//     const result = bookSlice(state, {
//       type: increaseBookQuantity.type,
//       payload: isbn
//     })

//     console.log("result", result)
//     // then
//     expect(result).toEqual({
//       booksList: [
//         {
//           isbn:"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
//           title:"Henri Potier à l'école des sorciers",
//           price:35,
//           cover:"https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
//           "quantity": 1,
//           "quantityPrice": 35
//         },
//         {
//           isbn:"a460afed-e5e7-4e39-a39d-c885c05db861",
//           title:"Henri Potier et la Chambre des secrets",
//           price:30,
//           cover:"https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp1.jpg?alt=media",
//           "quantity": 0,
//           "quantityPrice": 0
//         },
//         {
//           isbn:"fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
//           title:"Henri Potier et le Prisonnier d'Azkaban",
//           price:30,
//           cover:"https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media",
//           "quantity": 0,
//           "quantityPrice": 0
//         }
//       ]
//     })
//   })
// })

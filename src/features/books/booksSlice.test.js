import bookSlice, { saveBooks, selectBooks } from "./booksSlice"

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
    const state = { book: { booksList: { "123":2, "12":3, "24":19 } } }
    // when
    const result = selectBooks(state)
    // then
    expect(result).toEqual({ "123":2, "12":3, "24":19})
  })
})


import bookSlice, { saveBooksList, selectBooks } from "./booksSlice"

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

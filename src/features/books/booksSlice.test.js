import bookSlice, { saveCopyBooks, saveBooksList, selectBooks } from "./booksSlice"

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
    const state = { book: { booksList: { "123":2, "12":3, "24":19 }, saveCopyBooks: {} } }
    // when
    const result = selectBooks(state)
    // then
    expect(result).toEqual({ "123":2, "12":3, "24":19})
  })
})


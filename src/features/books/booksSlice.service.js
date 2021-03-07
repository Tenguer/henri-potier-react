export function newBooksWithQuantity (booksnewBookslist) {
  let  newBookslist = [ ...booksnewBookslist ]

  for (const [key, value] of Object.entries(newBookslist)) {
    newBookslist[value.isbn] = { ...value, "quantity": 0, "quantityPrice": 0 }
    delete newBookslist[key]
  }
  return newBookslist
}
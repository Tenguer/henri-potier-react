import { selectAmount, addToCart, selectCart } from "./cartSlice"

describe('selectAmount', () => {
  it('Should return 0 when cart is empty', () => {
    // given 
    const state = { cart: {}};
    const index = 0;
    // when
    const result = selectAmount(state, index)
    // then
    expect(result).toBe(0)
  })

  it('SelectCart', () => {
    // given 
    const state = { 
      cart: {
        cart: {
          'c8fabf68-8374-48fe-a7ea-a00ccd07afff' : 1
        },
        temporyCart: {
          'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 2
        }
      }
    };
    // when
    const result = selectCart(state)
    console.log(result);
    // then
    expect(result).toEqual({'c8fabf68-8374-48fe-a7ea-a00ccd07afff': 1 })
  })

  it('Should return qty given when index is existing', () => {
    // given 
    const state = { cart: {'123': 1 , '234': 2 } };
    const isbn = '123';
    // when
    const result = selectAmount(state, isbn)
    // then
    expect(result).toBe(1)
  })
})

// describe('addToCart', () => {
//   it('Test de addToCart ', () => {
//     // given 
//     const state = {};
//     const isbn = '123';
//     // when
//     const result = addToCart(state, { isbn })

//     console.log(result)
//     // then
//     expect(result).toEqual({ 123: 1 })
//   })
// })

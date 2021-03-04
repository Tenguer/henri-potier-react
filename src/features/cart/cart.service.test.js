import { offerCalc } from "./cart.service"

describe("offerCalc", () => {
  it("offerCalc return good value", () => {
    // Given
    const offers = [
      {
        type: "percentage",
        value: 4
      },
      {
        type: "minus",
        value: 15
      },
      {
        type: "slice",
        sliceValue: 100,
        value: 12
      }
    ]
    const totalPrice = 95
    // when
    const result = offerCalc(offers, totalPrice)
    // Then
    expect(result).toEqual(80)
  })
})



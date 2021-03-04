export function offerCalc(offers, totalPrice) {
    let offer = 0;
    let finalPrice = totalPrice;

    for (let i = 0; i < offers.length; i++) {
      if (offers[i].type === "percentage") {
        offer = totalPrice -  (totalPrice * offers[i].value) / 100;
      } else if (offers[i].type === "minus") {
        offer = totalPrice - offers[i].value;
      } else if (offers[i].type === "slice") {
        if  (totalPrice > offers[i].sliceValue) {
          offer = Math.floor(
            totalPrice -  (totalPrice / offers[i].sliceValue) * offers[i].value
          );
        }
      }
      if  (totalPrice > offer && finalPrice > offer) {
        finalPrice = offer;
      }
    }
  return finalPrice
}
import {increasePure} from "./Home.service";

test('add', () => {
    // GIVEN
    const qyt = 2;
    const amount = 2;
    // WHEN
    const result = increasePure(qyt, amount);
    // THEN
    expect(result).toBe(4);
})

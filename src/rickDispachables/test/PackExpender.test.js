const CreditCard = require('../../creditCard/CreditCard.js');
const PackExpender = require('../PackExpender.js');

beforeEach(() => {
    this.creditCard = new CreditCard("Abradolf Lincler", "4916119711304546");
    this.PackExpender = new PackExpender(100, 50)
});

test('setupExpender', () => {
    expect(this.PackExpender).toBeTruthy;
});

test('constructortest', () => {
    expect(this.PackExpender.stock).toBe(100);
});

test('dispatchTestOK', () => {
    this.PackExpender.dispatch(this.creditCard)
    expect(this.PackExpender.stock).toBe(99);
});
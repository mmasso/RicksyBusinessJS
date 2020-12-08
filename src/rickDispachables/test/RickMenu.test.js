const CreditCard = require('../../creditCard/CreditCard.js');
const RickMenu = require('../RickMenu.js');

beforeEach(() => {
    this.creditCard = new CreditCard("Abradolf Lincler", "4916119711304546");
    this.RickMenu = new RickMenu(100, 50)
});

test('setupExpender', () => {
    expect(this.RickMenu).toBeTruthy;
});

test('constructortest', () => {
    expect(this.RickMenu.stock).toBe(100);
});

test('dispatchTestOK', () => {
    this.RickMenu.dispatch(this.creditCard)
    expect(this.RickMenu.stock).toBe(99);
});

test('dispatchTestNoStock', () => {
    this.RickMenu.stock -= 100;
    this.RickMenu.dispatch(this.creditCard)
    expect(this.RickMenu.stock).toBe(0);
});

test('dispatchTestNoCredit', () => {
    this.RickMenu.price = 4000;
    this.RickMenu.dispatch(this.creditCard)
    expect(this.RickMenu.stock).toBe(100);
});
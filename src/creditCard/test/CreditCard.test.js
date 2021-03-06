const CreditCard = require('../CreditCard.js');

beforeEach(() => {
    this.creditCard = new CreditCard("Abradolf Lincler", "4916119711304546");
});

test('setupCard', () => {
    expect(this.creditCard).toBeTruthy;
});

test('constructorTest', () => {
    expect(this.creditCard.owner).toBe("Abradolf Lincler");
    expect(this.creditCard.number).toBe("4916119711304546");
});

test('payTestOK', () => {
    this.creditCard.pay(3000);
    expect(this.creditCard.credit).toBe(0);
});

test('payTestNotOKtooMuch', () => {
    this.creditCard.pay(4000);
    expect(this.creditCard.credit).toBe(3000);
});
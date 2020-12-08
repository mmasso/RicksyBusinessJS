const { TestScheduler } = require('jest');
const CreditCard = require('../CreditCard.js');

var creditCard;

beforeEach(() => {
    this.creditCard = new CreditCard("Abradolf Lincler", "4916119711304546");
});

test('setupCard', () => {
    expect(this.creditCard).toBeTruthy;
});
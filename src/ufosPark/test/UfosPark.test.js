const CreditCard = require('../../creditCard/CreditCard.js');
const UfosPark = require('../UfosPark.js');

var ovnis = ["unx", "dox", "trex"];
var creditCard;
var ufosPark;

beforeEach(() => {
    creditCard = new CreditCard("Abradolf Lincler", "4916119711304546");
    ufosPark = new UfosPark(500);
    ovnis.map(function(element) {
        ufosPark.addUfo(element)
    })
});

test('setupUfosPark', () => {
    expect(this.ufosPark).toBeTruthy;
});

test('addUfoTest', () => {
    ufosPark.addUfo("cuatrox");
    expect(ufosPark.park.size).toBe(4);
});

test('dispatchTest', () => {
    ufosPark.dispatch(creditCard);
    expect(creditCard.credit).toBe(2500);
});

test('dispatchNoCreditTest', () => {
    creditCard.pay(3000);
    ufosPark.dispatch(creditCard);
    expect(creditCard.credit).toBe(0);
});

test('dispatchUfoAlreadyReservedTest', () => {
    ufosPark.dispatch(creditCard);
    ufosPark.dispatch(creditCard);
    expect(creditCard.credit).toBe(2500);
});
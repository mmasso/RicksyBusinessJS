const PackExpender = require('../../rickDispachables/PackExpender.js');
const UfosPark = require('../../ufosPark/UfosPark.js');
const Receptivo = require('../Receptivo.js');
const CreditCard = require('../../creditCard/CreditCard.js');

var ovnis = ["unx", "dox", "trex"];
var ufosPark;

beforeEach(() => {
    this.receptivo = new Receptivo();
    ufosPark = new UfosPark(500);
    this.packExpender = new PackExpender(100, 50);
    this.creditCard = new CreditCard("Abradolf Lincler", "4916119711304546");
    ovnis.map(function(element) {
        ufosPark.addUfo(element)
    })
});

test('setupTest', () => {
    expect(this.receptivo).toBeTruthy;
});

test('dispatchTest', () => {
    this.receptivo.registra(ufosPark);
    this.receptivo.registra(this.packExpender);
    this.receptivo.dispatch(this.creditCard);
    expect(this.creditCard.credit).toBe(2450);
    expect(this.packExpender.stock).toBe(99);
});

test('dispatchTestNoCredit', () => {
    this.receptivo.registra(ufosPark);
    this.receptivo.registra(this.packExpender);
    this.creditCard.pay(3000);
    this.receptivo.dispatch(this.creditCard);
    expect(this.creditCard.credit).toBe(0);
    expect(this.packExpender.stock).toBe(100);
});
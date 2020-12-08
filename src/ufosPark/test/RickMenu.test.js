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
    expect(this.UfosPark).toBeTruthy;
});
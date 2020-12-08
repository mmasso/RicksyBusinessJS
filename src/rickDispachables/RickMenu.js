function RickMenu(stock, price) {
    this.stock = stock;
    this.price = price;
}

RickMenu.prototype.dispatch = function(creditCard) {
    //check si hay stock y el objeto se ha pagado o no, si las dos son true, se resta stock
    if (this.isDispatchable() && creditCard.pay(this.price)) {
        this.stock -= 1;
    }
}

RickMenu.prototype.isDispatchable = function() {
    //check stock
    return this.stock > 0
}

module.exports = RickMenu;
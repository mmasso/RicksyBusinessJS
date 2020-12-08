function PackExpender(stock, price) {
    this.stock = stock;
    this.price = price;
}

PackExpender.prototype.dispatch = function(creditCard) {
    //check si hay stock y el objeto se ha pagado o no, si las dos son true, se resta stock
    if (this.isDispatchable() && creditCard.pay(this.price)) {
        this.stock -= 1;
    }
}

PackExpender.prototype.isDispatchable = function() {
    //check stock
    return this.stock > 0
}

module.exports = PackExpender;
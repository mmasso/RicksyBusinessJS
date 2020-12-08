function UfosPark(price) {
    this.park = new Map();
    this.price = price;
}

//Añadir un ufo
UfosPark.prototype.addUfo = function(ufo) {
    this.park.set(ufo, null);
}


//Despachar un ufo
UfosPark.prototype.dispatch = function(creditCard) {
    for (let [ufoName, user] of this.park.entries()) {
        if (user == null && !(this.isUfoTakenBy(creditCard)) && creditCard.pay(this.price)) {
            this.park.set(ufoName, creditCard.number);
        }
    }
}

//Check si algun ufo ya esta cogido por el demandante
UfosPark.prototype.isUfoTakenBy = function(creditCard) {
    return Array.from(this.park.values()).includes(creditCard.number);
}

//Coge el ufo del cliente
UfosPark.prototype.getUfoOf = function(owner) {
    for (let [ufoName, user] of this.park.entries()) {
        if (user === owner)
            return ufoName;
    }
}

module.exports = UfosPark;
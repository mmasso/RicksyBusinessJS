function UfosPark(fee) {
    this.park = new Map();
    this.fee = fee;
}

//Añadir un ufo
UfosPark.prototype.addUfo = function(ufo) {
    this.park.set(ufo, null);
}


//Despachar un ufo
UfosPark.prototype.dispatch = function(creditCard) {
    for (let [ufoName, user] of this.park.entries()) {
        if (user == null && this.isUfoTakenBy(creditCard) && creditCard.pay(this.price)) {
            this.park.set(ufoName, creditCard.number)
        }
    }
}

//Check si algun ufo ya esta cogido por el demandante
UfosPark.prototype.isUfoTakenBy = function(creditCard) {
    return this.park.values().includes(creditCard.number);
}

//Find the Ufo of a guest
UfosPark.prototype.getUfoOf = function(owner) {
    return Object.keys(map).find(key => map[key] === owner);
}

module.exports = UfosPark;
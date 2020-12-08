function CreditCard(owner, number) {
    this.owner = owner;
    this.number = number;
    this.credit = 3000;
    this.SYMBOL = "EZI";
}

CreditCard.prototype.pay = function(price) {
    //Devuelve true si se ha pagado, si no, devuelve false
    if (this.isAffordable(price)) {
        this.credit -= price;
        return true;
    } else return false;
}

CreditCard.prototype.isAffordable = function(price) {
    //Devuelve true o false dependiendo de si hay suficiente dinero en el credito de la tarjeta
    let affordable = this.credit >= price;
    return affordable;
}


module.exports = CreditCard;
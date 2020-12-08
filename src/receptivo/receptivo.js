function Receptivo() {
    this.receptivos = new Set();
}

Receptivo.prototype.registra = function(receptivo) {
    this.receptivos.add(receptivo);
}

Receptivo.prototype.dispatch = function(guest) {
    this.receptivos.forEach(function(receptivo) {
        receptivo.dispatch(guest)
    })
}

module.exports = Receptivo;
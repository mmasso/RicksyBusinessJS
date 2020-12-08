function Receptivo() {
    this.receptivos = new Set();
}

Receptivo.prototype.register = function(receptivo) {
    this.receptivos.add(receptivo);
}

Receptivo.prototype.dispatch = function(guest) {
    this.receptivos.forEach(function(receptivo) {
        receptivo.dispatch(guest)
    })
}

module.exports = Receptivo;
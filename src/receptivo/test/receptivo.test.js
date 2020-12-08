const Receptivo = require('../Receptivo.js');

beforeEach(() => {
    this.receptivo = new Receptivo();
});

test('setupTest', () => {
    expect(this.receptivo).toBeTruthy;
});
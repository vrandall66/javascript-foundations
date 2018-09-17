const assert = require('chai').assert;
const Pirate = require('../exercises/pirate');

describe('Pirate', () => {

  it('should be a function', () => {
    assert.isFunction(Pirate);
  });

  it('should instantiate our good friend, Pirate', () => {
    const pirate = new Pirate();
    assert.isObject(pirate);
  });

  it('should have a name', () => {
    const pirate = new Pirate('Blackbeard');
    assert.equal(pirate.name, 'Blackbeard');
  });

  it('should be a scallywag by default', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.name, 'JeffBeard');
    assert.equal(pirate.job, 'Scallywag');
  });

  it('should be a cook if passed into argument', () => {
    const pirate = new Pirate('HoraceBeard', 'cook');
    assert.equal(pirate.job, 'cook');
  });

  it('should not be cursed by default', () => {
    const pirate = new Pirate('SteveBeard', 'cook');
    assert.equal(pirate.cursed, false);
  });

  it('should become cursed after 3 heinous acts', () => {
    const pirate = new Pirate('JoshBeard', 'cook');

    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);

    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, true);
  });

  it('should be able to rob ships', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.robShip(), 'YAARRR!');
  });

  it('should start with a booty of 0', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);
  });

  it('should have a booty of 100 after robShip()', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);

    pirate.robShip();
    assert.equal(pirate.booty, 100);
  });
});

const assert = require('chai').assert;
const Wizard = require('../exercises/wizard');

describe('Wizard', () => {

  it('should be a function', () => {
    assert.isFunction(Wizard);
  });

  it('should have a name', () => {
    const wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it('should have a beard by default', () => {
    const wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it('should not always be bearded', () => {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it('should have root powers', () => {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it('should has lots of root powers', () => {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it('should start rested', () => {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.isRested, true);
  });

  it('should be able to cast spells', () => {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.cast(), 'MAGIC BULLET');
  });

  it('should only be able to cast 3 spells', () => {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.isRested, true);

    wizard.cast();
    assert.equal(wizard.isRested, true);

    wizard.cast();
    assert.equal(wizard.isRested, true);

    wizard.cast();
    assert.equal(wizard.isRested, false);

    assert(wizard.cast(), 'I SHALL NOT CAST!');
  });
});

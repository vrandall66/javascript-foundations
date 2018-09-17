const assert = require('chai').assert;
const Vampire = require('../exercises/vampire');

describe('Vampire', () => {

  it('should be a function', () => {
    assert.isFunction(Vampire);
  });

  it('should instantiate our good friend, Vampire', () => {
    const vampire = new Vampire();
    assert.isObject(vampire);
  });

  it('should have a name', () => {
    const vampire = new Vampire('Jhun');
    assert.equal(vampire.name, 'Jhun');
  });

  it('should have a pet bat as a default', () => {
    const vampire = new Vampire('Brittany');
    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'bat');
  });

  it('should take an argument for pet', () => {
    const vampire = new Vampire('Jeff', 'fox');
    assert.equal(vampire.pet, 'fox');
  });

  it('should have vampire return true if thirsty', () => {
    const vampire = new Vampire('Andy');
    assert.equal(vampire.thirsty, true);
  });

  it('should refute thirsty if vampire has drank', () => {
    const vampire = new Vampire('Meeka');
    vampire.drink();
    assert.equal(vampire.thirsty, false);
  });
});

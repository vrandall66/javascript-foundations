const assert = require('chai').assert;
const Werewolf = require('../exercises/werewolf');
const Victim = require('../exercises/victim');

describe('Werewolf', () => {

  it('should be a function', () => {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', () => {
    const werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it('should have a name', () => {
    const werewolf = new Werewolf('Jorge');
    const werewolf2 = new Werewolf('Sal');
    assert.equal(werewolf.name, 'Jorge');
    assert.equal(werewolf2.name, 'Sal');
  });

  it('should have a location', () => {
    const werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it('should default to human form', () => {
    const werewolf = new Werewolf('Mike','Basement lair');
    assert.equal(werewolf.human, true);
  });

  it('should refute human form after changing', () => {
    const werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert.equal(werewolf.human, false);
  });

  it('should show assert wolf form after change', () => {
    const werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    assert.equal(werewolf.wolf, true);
  });

  it('should show what form its in', () => {
    const werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    werewolf.change();
    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.change();
    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it('should start off not hungry', () => {
    const werewolf = new Werewolf('Lousia', 'Gusto');
    assert.equal(werewolf.hungry, false);
  });

  it('should become hungry after changing into werewolf form', () => {
    const werewolf = new Werewolf('Lousia', 'Gusto');
    
    assert.equal(werewolf.hungry, false);
    werewolf.change()
    assert.equal(werewolf.hungry, true);
  });

  it('should be able to eat(victim) once hungry', () => {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');

    werewolf.eat(victim);
    assert.equal(victim.alive, true);

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(victim.alive, false);
  });

  it('should not be hungry after changing back to human form', () => {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert.equal(werewolf.hungry, false);
    assert.equal(werewolf.human, true);

    werewolf.change();
    assert.equal(werewolf.human, false);
    assert.equal(werewolf.hungry, true);

    werewolf.change();
    assert.equal(werewolf.human, true);
    assert.equal(werewolf.hungry, false);
  });

  it('should change back to human form after eating', () => {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(werewolf.human, true);
  });

  it('should not be able to consume victim in human form', () => {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');

    werewolf.eat(victim);
    assert.equal(victim.alive, true);
  });
});

describe('Victim', () => {

  it('should be a function', () => {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', () => {
    const victim = new Victim();
    assert.isObject(victim);
  });

  it('should have a name', () => {
    const victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it('should start alive', () => {
    const victim = new Victim('TayTay');
    assert.equal(victim.alive, true);
  });

  it('should be dead after being eaten', () => {
    const werewolf = new Werewolf('TayTay');
    const victim = new Victim('TayTay');

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(victim.alive, false);
  });
});

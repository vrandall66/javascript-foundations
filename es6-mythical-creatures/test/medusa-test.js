const assert = require('chai').assert;
const Medusa = require('../exercises/medusa');
const Person = require('../exercises/person');

describe('Medusa', () => {

  it('should be a function', () => {
    assert.isFunction(Medusa);
  });

  it('should instantiate our good friend, Medusa', () => {
    const medusa = new Medusa();
    assert.isObject(medusa);
  });

  it('should have a name', () => {
    const medusa = new Medusa('Bree');
    assert.equal(medusa.name, 'Bree');
  });

  it('should start with no statues', () => {
    const medusa = new Medusa('Taytay');
    assert.equal(medusa.name, 'Taytay');
    assert.deepEqual(medusa.statues, []);
  });

  // Pass first 3 tests for Person down below

  it('should gain a statue when staring at a person', () => {
    const medusa = new Medusa('Brenna');
    const victim = new Person('Jhun');

    medusa.stare(victim);

    assert.equal(medusa.statues.length, 1);
    assert.equal(medusa.statues[0].name, 'Jhun');

  });

  it('should only be able to have three victims as a statue', () => {
    const medusa = new Medusa('Meeka');
    const victim1 = new Person('Lousia');
    const victim2 = new Person('Bree');
    const victim3 = new Person('TayTay');
    const victim4 = new Person('Steve');

    medusa.stare(victim1);
    medusa.stare(victim2);
    medusa.stare(victim3);
    medusa.stare(victim4);

    assert.equal(medusa.statues.length, 3);
  });

  it('should unstone the the first victim and stone the 4th coming in', () => {
    const medusa = new Medusa('Meeka');
    const victim1 = new Person('Lousia');
    const victim2 = new Person('Bree');
    const victim3 = new Person('TayTay');
    const victim4 = new Person('Steve');

    medusa.stare(victim1);
    assert.equal(victim1.stoned, true);

    medusa.stare(victim2);
    medusa.stare(victim3);
    medusa.stare(victim4);
    
    assert.equal(victim4.stoned, true);
    assert.equal(victim1.stoned, false);
  });
})

describe('Person', () => {

  it('should be a function', () => {
    assert.isFunction(Person);
  });

  it('should instantiate our good friend, Person', () => {
    const person = new Person();
    assert.isObject(person);
  });

  it('should have a name', () => {
    const person = new Person('Steve');
    assert.equal(person.name, 'Steve');
  });

  it('should be stoned after looking into Medusas eyes', () => {
    const medusa = new Medusa('Brenna');
    const victim = new Person('Jhun');

    assert.equal(victim.stoned, false);
    medusa.stare(victim);
    assert.equal(victim.stoned, true);
  });
});

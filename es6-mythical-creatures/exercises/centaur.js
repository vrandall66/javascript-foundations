class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actions = 0;
  }

  shoot() {
    this.actions++
    this.cranky = this.actions >= 3;
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
  }

  run() {
    this.actions++
    this.cranky = this.actions >= 3;
    return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
  }

  sleep() {
    this.cranky = false;
    this.actions = 0;
    return this.standing ? 'NO!' : 'ZZZZ';
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    this.cranky = this.actions === 0 || false;
    return this.layingDown && 'Not while I\'m laying down!';
  }
}

module.exports = Centaur;
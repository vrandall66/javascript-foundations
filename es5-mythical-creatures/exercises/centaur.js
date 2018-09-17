function Centaur(name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.actions = 0;
}

Centaur.prototype.shoot = function() {
  this.actions++
  this.cranky = this.actions >= 3;
  return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
}

Centaur.prototype.run = function() {
  this.actions++
  this.cranky = this.actions >= 3;
  return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
}

Centaur.prototype.sleep = function() {
  this.cranky = false;
  this.actions = 0;
  return this.standing ? 'NO!' : 'ZZZZ';
}

Centaur.prototype.layDown = function() {
  this.standing = false;
  this.layingDown = true;
}

Centaur.prototype.standUp = function() {
  this.standing = true;
  this.layingDown = false;
}

Centaur.prototype.drinkPotion = function() {
  this.cranky = this.actions === 0 || false;
  return this.layingDown && 'Not while I\'m laying down!';
}

module.exports = Centaur;
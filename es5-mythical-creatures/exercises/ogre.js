function Ogre(name, home) {
  this.name = name;
  this.home = home || 'Swamp';
  this.swings = 0;
}

Ogre.prototype.encounter = function(human) {
  human.encounterCounter++
  if (!(human.encounterCounter % 3)) {
    this.swings++
  }

  human.knockedOut = !!this.swings && !(this.swings % 2);
}

Ogre.prototype.swingAt = function() {
  this.swings++
}

Ogre.prototype.apologize = function(human) {
  human.knockedOut = false;
}

module.exports = Ogre;
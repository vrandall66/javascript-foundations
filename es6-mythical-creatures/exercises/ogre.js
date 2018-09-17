class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++
    if (!(human.encounterCounter % 3)) {
      this.swings++
    }

    human.knockedOut = !!this.swings && !(this.swings % 2);
  }

  swingAt(human) {
    this.swings++
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
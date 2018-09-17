class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre() {
    return this.encounterCounter && !(this.encounterCounter % 3);
  }
}

module.exports = Human;
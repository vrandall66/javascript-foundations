function Human(name) {
  this.name = name;
  this.encounterCounter = 0;
}

Human.prototype.noticesOgre = function() {
  return this.encounterCounter && !(this.encounterCounter % 3);
}

module.exports = Human;
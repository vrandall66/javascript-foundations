function Cabinet() {
  this.potions = [];
}

Cabinet.prototype.isEmpty = function() {
  return !this.potions.length;
}

Cabinet.prototype.add = function(potions) {
  this.potions = Array.isArray(potions) ? [...this.potions, ...potions] : [...this.potions, potions];
}

Cabinet.prototype.takeFirstPotion = function() {
  return this.potions.shift();
}

Cabinet.prototype.takePotionWithName = function(name) {
  const potionIndex = this.potions.findIndex(function(potion) {
    return potion.name === name;
  });
  return this.potions.splice(potionIndex, 1).pop();
}

Cabinet.prototype.count = function(name) {
  return this.potions.filter(function (potion) {
    return potion.name === name;
  }).length
}

module.exports = Cabinet;
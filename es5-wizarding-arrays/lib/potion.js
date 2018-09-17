function Potion(name, rareness) {
  this.name = name;
  this.rareness = rareness || 0;
}

Potion.prototype.isRare = function() {
  return this.rareness > 7;
}

module.exports = Potion;
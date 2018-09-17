function Robe() {
  this.pockets = [[], [], [], [], [], [], [], [], [], []];
  this.pocketIndex = 0;
}

Robe.prototype.addToPocket = function(item) {
  this.pockets[this.pocketIndex].push(item)
  this.pocketIndex++
}

Robe.prototype.retrieve = function(item) {
  return this.pockets.find(function(pocket) {
    return pocket[0] === item;
  }).pop();
}

Robe.prototype.emptyAllPockets = function() {
  this.pockets.forEach(function(pocket) {
    pocket.pop();
  });
}

module.exports = Robe;
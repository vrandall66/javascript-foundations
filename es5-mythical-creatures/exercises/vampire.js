function Vampire(name, pet) {
  this.name = name;
  this.pet = pet || 'bat';
  this.thirsty = true;
}

Vampire.prototype.drink = function() {
  this.thirsty = false;
}


module.exports = Vampire;
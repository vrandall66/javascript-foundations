function Dragon(name, rider, color) {
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = true;
  this.timesEaten = 0;
}

Dragon.prototype.eat = function() {
  this.timesEaten++
  this.hungry = this.timesEaten <= 2;
}

module.exports = Dragon;
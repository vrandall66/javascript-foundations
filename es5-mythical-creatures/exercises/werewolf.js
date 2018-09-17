function Werewolf(name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function() {
  this.human = !this.human;
  this.wolf = !this.wolf;
  this.hungry = !this.hungry;
}

Werewolf.prototype.eat = function(victim) {
  victim.alive = !this.hungry;
  this.human = this.hungry;
}

module.exports = Werewolf;
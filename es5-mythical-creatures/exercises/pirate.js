function Pirate(name, job) {
  this.name = name;
  this.job = job || 'Scallywag';
  this.cursed = false;
  this.acts = 0;
  this.booty = 0;
}

Pirate.prototype.commitHeinousAct = function() {
  this.acts++
  this.cursed = this.acts > 2; 
}

Pirate.prototype.robShip = function() {
  this.booty += 100;
  return 'YAARRR!';
}

module.exports = Pirate;
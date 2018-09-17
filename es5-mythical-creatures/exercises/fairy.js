function Fairy(name) {
  this.name = name;
  this.dust = 10;
  this.clothes = { dresses: ['Iris'] }
  this.disposition = 'Good natured';
  this.humanWards = [];
}

Fairy.prototype.receiveBelief = function() {
  this.dust++;
}

Fairy.prototype.believe = function() {
  this.dust += 10;
}

Fairy.prototype.makeDresses = function(dresses) {
  this.clothes.dresses = [...this.clothes.dresses, ...dresses]
}

Fairy.prototype.provoke = function() {
  this.disposition = 'Vengeful';
}

Fairy.prototype.replaceInfant = function(infant) {
  infant.disposition = this.disposition === 'Vengeful' ? 'Malicious' : infant.disposition;
  this.humanWards.push(infant);
  this.disposition = this.humanWards.length >= 3 ? 'Good natured' : this.disposition;
  return infant
}

module.exports = Fairy;
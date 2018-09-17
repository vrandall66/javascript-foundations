function Stark(name, location) {
  this.name = name;
  this.location = location || 'Winterfell';
  this.safe = false;
}

Stark.prototype.houseWords = function() {
  return this.safe ? 'The North Remembers' : 'Winter is Coming';
}

module.exports = Stark;
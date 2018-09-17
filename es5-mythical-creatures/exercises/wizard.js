function Wizard(obj) {
  this.name = obj.name;
  this.bearded = obj.bearded !== undefined ? obj.bearded : true;
  this.isRested = true;
  this.casts = 0;
}

Wizard.prototype.incantation = function(spell) {
  return spell.toUpperCase();
}

Wizard.prototype.cast = function() {
  this.casts++
  this.isRested = this.casts < 3; 
  return this.isRested ? 'MAGIC BULLET' : 'I SHALL NOT CAST!';
}


module.exports = Wizard;
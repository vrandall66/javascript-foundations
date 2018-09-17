function Medusa(name) {
  this.name = name;
  this.statues = [];
}

Medusa.prototype.stare = function(victim) {
  victim.stoned = true;
  this.statues.push(victim)
  if (this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.shift()
  }
}


module.exports = Medusa;
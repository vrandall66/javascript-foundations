function Direwolf(name, home, size) {
  this.name = name;
  this.home = home || 'Beyond the Wall'
  this.size = size || 'Massive';
  this.starksToProtect = [];
  this.huntsWhiteWalkers = true;
}

Direwolf.prototype.protect = function(stark) {
  stark.safe = true;
  this.huntsWhiteWalkers = false;
  this.home === stark.location 
  && this.starksToProtect.length < 2 
  && this.starksToProtect.push(stark);
}

Direwolf.prototype.leave = function(stark) {
  var starkIndex = this.starksToProtect.findIndex(function(el) {
    return el.name === stark.name
  });
  this.starksToProtect[starkIndex].safe = false;
  this.starksToProtect.splice(starkIndex, 1);
}


module.exports = Direwolf;
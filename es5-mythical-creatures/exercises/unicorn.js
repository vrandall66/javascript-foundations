function Unicorn(name, color) {
  this.name = name;
  this.color = color || 'white';
}

Unicorn.prototype.isWhite = function() {
  return false;
}

Unicorn.prototype.says = function(quote) {
  return `**;* ${quote} *;**`;
}

module.exports = Unicorn;
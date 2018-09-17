function Spell(name, description) {
  this.name = name;
  this.description = description;
  this.executionHistory = [];
}

Spell.prototype.execute = function(targets) {
  let successes = '';
  this.executionHistory = [...targets];

  if (typeof targets === 'string') {
    return `Success! The ${targets} is levitating.`
  }

  targets.forEach(function(target, i) {
    return targets.length - 1 === i 
    ? successes += `Success! The ${target} is levitating.`
    : successes += `Success! The ${target} is levitating. `
  })

  return successes;
}

Spell.prototype.clearExecutionHistory = function() {
  this.executionHistory = [];
}

module.exports = Spell;
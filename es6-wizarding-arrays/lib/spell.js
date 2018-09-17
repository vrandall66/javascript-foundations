class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }

  execute(targets) {
    let successes = '';
    this.executionHistory = [...targets];

    if (typeof targets === 'string') {
      return `Success! The ${targets} is levitating.`
    }

    targets.forEach((target, i) => targets.length - 1 === i 
      ? successes += `Success! The ${target} is levitating.`
      : successes += `Success! The ${target} is levitating. `
    )

    return successes;
  }

  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;
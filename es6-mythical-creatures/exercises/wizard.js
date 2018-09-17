class Wizard {
  constructor({name, bearded}) {
    this.name = name;
    this.bearded = bearded !== undefined ? bearded : true;
    this.isRested = true;
    this.casts = 0;
  }

  incantation(spell) {
    return spell.toUpperCase();
  }

  cast() {
    this.casts++
    this.isRested = this.casts < 3; 
    return this.isRested ? 'MAGIC BULLET' : 'I SHALL NOT CAST!';
  }
}

module.exports = Wizard;
class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.acts = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.acts++
    this.cursed = this.acts > 2; 
  }

  robShip() {
    this.booty += 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;
class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] }
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    this.clothes.dresses = [...this.clothes.dresses, ...dresses]
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    infant.disposition = this.disposition === 'Vengeful' ? 'Malicious' : infant.disposition;
    this.humanWards.push(infant);
    this.disposition = this.humanWards.length >= 3 ? 'Good natured' : this.disposition;
    return infant
  }
}

module.exports = Fairy;
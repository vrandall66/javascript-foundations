class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.timesEaten = 0;
  }

  eat() {
    this.timesEaten++
    this.hungry = this.timesEaten <= 2;
  }
}

module.exports = Dragon;
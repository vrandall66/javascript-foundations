class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    return !this.potions.length;
  }

  add(potions) {
    this.potions = Array.isArray(potions) ? [...this.potions, ...potions] : [...this.potions, potions];
  }

  takeFirstPotion() {
    return this.potions.shift();
  }

  takePotionWithName(name) {
    const potionIndex = this.potions.findIndex(potion => potion.name === name);
    return this.potions.splice(potionIndex, 1).pop();
  }

  count(name) {
    return this.potions.filter(potion => potion.name === name).length
  }
}

module.exports = Cabinet;
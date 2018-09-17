class Robe {
  constructor() {
    this.pockets = [[], [], [], [], [], [], [], [], [], []];
    this.pocketIndex = 0;
  }

  addToPocket(item) {
    this.pockets[this.pocketIndex].push(item)
    this.pocketIndex++
  }

  retrieve(item) {
    return this.pockets.find(pocket => pocket[0] === item).pop();
  }

  emptyAllPockets() {
    this.pockets.forEach(pocket => pocket.pop());
  }
}

module.exports = Robe;
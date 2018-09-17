class Wizard {
  constructor(name) {
    this.name = name;
    this.petsCount = 0;
    this.wand = null;
    this.pets = [];
  }

  givePet(pet) {
    this.petsCount++
    this.pets.push(pet);
  }

  petList() {
    var wizardPets = '';
    this.pets.forEach((pet, i) => {
      wizardPets += this.pets.length - 1 === i 
        ? `${pet.name}, an ${pet.type}.`
        : `${pet.name}, a ${pet.type}, `
    })
    return wizardPets;
  }

  giveWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return this.wand.cast(spell)
  }
}

module.exports = Wizard;
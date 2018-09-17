function Wizard(name) {
  this.name = name;
  this.petsCount = 0;
  this.wand = null;
  this.pets = [];
}

Wizard.prototype.givePet = function(pet) {
  this.petsCount++
  this.pets.push(pet);
}

Wizard.prototype.petList = function() {
  var wizardPets = '';
  this.pets.forEach((pet, i) => {
    wizardPets += this.pets.length - 1 === i 
      ? `${pet.name}, an ${pet.type}.`
      : `${pet.name}, a ${pet.type}, `
  })
  return wizardPets;
}

Wizard.prototype.giveWand = function(wand) {
  this.wand = wand;
}

Wizard.prototype.castSpell = function(spell) {
  return this.wand.cast(spell)
}

module.exports = Wizard;
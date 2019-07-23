class Wizard {
	constructor(wizardObj) {
		this.name = wizardObj.name;
		this.bearded = wizardObj.bearded;
		if (this.bearded === undefined)
			this.bearded = true;
		this.rested = true;
		this.spellCount = 0;
	}
	incantation(spell) {
		return spell.toUpperCase();
	}
	cast() {
		this.spellCount++;
		if (this.spellCount >= 3) {
			this.rested = false;
			return 'I SHALL NOT CAST!';
		} else {
			return 'MAGIC BULLET';
		}
	}
}

module.exports = Wizard
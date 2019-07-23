class Werewolf {
	constructor(name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}
	change(human) {
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry;
	}
	eat(victim) {
		if (this.hungry && this.wolf) {
		victim.alive = false;
		this.change();
		}
	}
}

module.exports = Werewolf;
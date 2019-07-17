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
		// if (this.hungry === true) {
		// 	eat();
		// }
	}
	eat(victim) {
		if ((this.hungry === true) &&
		(this.human === false)) {
		victim.alive = false;
		this.change();
		}
	}
}

module.exports = Werewolf;
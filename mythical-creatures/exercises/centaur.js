class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.activity = 0;
		this.layingDown = false;
	}
	shoot() {
		this.activity++;
		if (this.cranky || this.layingDown) {
			return 'NO!';
		} else if (this.activity === 3) {
			this.cranky = true;
			return 'NO!';
		} else {
		return 'Twang!!!';
		}
	}
	run() {
		this.activity++;
		if  (this.cranky || this.layingDown) {
			return 'NO!';
		} else if (this.activity === 3) {
			this.cranky = true;
			return 'NO!';
		} else {
		return 'Clop clop clop clop!!!';
		}
	}
	sleep() {
		if (this.standing === true) {
			return 'NO!';
		} else {
			this.layingDown = true;
			this.cranky = false;
			return 'ZZZZ';
		}
	}
	layDown() {
		this.standing = !this.standing;
		this.layingDown = !this.standing;
	}
	standUp() {
		this.standing = !this.standing;
		this.layingDown = !this.standing;
	}
	drinkPotion() {
		if (!this.standing) {
			return 'Not while I\'m laying down!';
		} else if (!this.cranky) {
			this.cranky = true;
		} else {
			this.cranky = false;
		}
	}
}

module.exports = Centaur;
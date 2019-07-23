class Fairy {
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.disposition = 'Good natured';
		this.clothes = { dresses: ['Iris']};
		this.humanWards = [];
	}
	receiveBelief() {
	this.dust = (this.dust + 1);
	}
	believe() {
		this.dust = (this.dust + 10);
	}
	makeDresses(flowers) {
		var newDresses = this.clothes.dresses.concat(flowers);
		this.clothes.dresses = newDresses;
	}
	provoke() {
		this.disposition = 'Vengeful';
	}
	replaceInfant(infant) {
		if (this.disposition === 'Vengeful') {
		infant.disposition = 'Malicious';
		this.humanWards.push(infant);
			if (this.humanWards.length === 3) {
				this.disposition = 'Good natured';
			}
	}
		return infant;
	}
}

module.exports = Fairy
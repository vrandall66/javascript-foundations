class Unicorn {
  constructor(name, color) {
  	this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
  	if (this.color !== 'white') {
  		return false;
  	}
  }

  says(message) {
    console.log(this);
  	return `**;* ${message} *;**`; 
  }
}

module.exports = Unicorn;


// 1. Read the test you are running
// 2. Ask yourself if it is going to fail and why
// 3. Run the test
// 4. Make it pass
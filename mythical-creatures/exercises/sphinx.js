class Sphinx {
	constructor() {
		this.name = null;
		this.riddles = [];
		this.heroesEaten = 0;
	}
	collectRiddle(riddle) {
		this.riddles.push(riddle);
		if (this.riddles.length > 3) {
			this.riddles.shift()
		}
	}
	attemptAnswer(answer) {
    var correctAnswer = this.riddles.find(function(object) {
      return object.answer === answer;
    })
    if (correctAnswer === undefined) {
      this.heroesEaten++;
      return;
    }
    var findAnswer = this.riddles.indexOf(correctAnswer);
    this.riddles.splice(findAnswer, 1);
    if (this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    }
    return 'That wasn\'t that hard, I bet you don\'t get the next one'
  }
}

module.exports = Sphinx
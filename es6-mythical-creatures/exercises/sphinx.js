class Sphinx {
  constructor() {
    this.heroesEaten = 0;
    this.riddles = [];
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    var answerIndex = this.riddles.findIndex(riddle => riddle.answer === answer);
    answerIndex !== -1 ? this.riddles.splice(answerIndex, 1) : this.heroesEaten++
    return  this.riddles.length 
      ? 'That wasn\'t that hard, I bet you don\'t get the next one'
      : `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
  }
}

module.exports = Sphinx;
class Hangman {
  constructor(word, remainGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainGuesses = remainGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  clacStatus() {
    let finished = true;
    this.word.forEach((l) => {
      if (this.guessedLetters.includes(l) || l === " ") {
      } else {
        finished = false;
      }
    });
    if (this.remainGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  proceedGuess(guess) {
    if (this.status != "failed" && this.status != "finished") {
      guess = guess.toLowerCase();
      const isUnique = !this.guessedLetters.includes(guess);
      const isBadGuess = !this.word.includes(guess);
      if (isUnique) {
        this.guessedLetters.push(guess);
      }
      if (isUnique && isBadGuess) {
        this.remainGuesses--;
      }
      this.clacStatus();

      if (game1.status === "failed") {
        document.querySelector(
          "#remain-guess"
        ).textContent = `Failed... Answers is: "${this.word.join("")}"`;
      } else if (game1.status === "finished") {
        document.querySelector("#remain-guess").textContent = `Yeah finished!`;
      } else {
        document.querySelector(
          "#remain-guess"
        ).textContent = `${game1.remainGuesses} chances left.`;
      }
    } else {
    }
  }
}

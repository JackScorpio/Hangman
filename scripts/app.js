let game1;

window.addEventListener("keypress", (e) => {
  const guess = e.key;
  game1.proceedGuess(guess);
  document.querySelector("#word-area").textContent = showHit();
  document.querySelector(
    "#guess-area"
  ).textContent = `You have used letters "${game1.guessedLetters}".`;
});

const initGame = async () => {
  const puzzle = await getPuzzle("1");
  game1 = new Hangman(puzzle, 9);
  game1.guessedLetters = [];
  initWord = showHit();
  document.querySelector("#word-area").textContent = initWord;
  document.querySelector("#guess-area").textContent = "";
  initCount = `Challenge start! You have ${game1.remainGuesses} chances left.`;
  document.querySelector("#remain-guess").textContent = initCount;
};

document.querySelector("#start-button").addEventListener("click", function () {
  initGame();
});

const showHit = () => {
  let hitWord = "";

  game1.word.forEach((l) => {
    if (game1.guessedLetters.includes(l) || l === " ") {
      hitWord = hitWord + l;
      console.log(game1.remainGuesses);
    } else {
      hitWord += "*";
    }
  });
  return hitWord;
};

getPuzzle("1")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

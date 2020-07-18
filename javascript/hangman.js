class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[Math.floor(Math.random() * this.words.length)];
    this.errorsLeft = 10;
    this.guessedLetters = '';
    this.letters = [];
  }

  pickWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) > -1) {
      return false;
    } else {
      this.checkCorrectLetter(letter);
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman([
      'node',
      'javascript',
      'react',
      'miami',
      'paris',
      'amsterdam',
      'lisboa'
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});

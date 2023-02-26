'use strict';
let myNumber = Math.trunc(Math.random() * 20) + 1;

const checkGuess = function () {
  const guessed = Number(document.querySelector('.guess').value);
  if (!guessed) {
    document.querySelector('.message').textContent = 'No Number❌';
  } else if (guessed === myNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎊';
    document.querySelector('body').style.backgroundColor = '#34cf5f';
    document.querySelector('.number').textContent = String(myNumber);
    document.querySelector('.again').addEventListener('click', replay);
    if (
      Number(document.querySelector('.score').textContent) >
      Number(document.querySelector('.highscore').textContent)
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else {
    document.querySelector('body').style.backgroundColor = 'rgb(170, 58, 45)';
    if (Number(document.querySelector('.score').textContent) === 1) {
      document.querySelector('.message').textContent = 'You lose😞';
      document.querySelector('.score').textContent = 0;
    } else {
      if (guessed < myNumber) {
        document.querySelector('.message').textContent = 'Too Low!';
        document.querySelector('.score').textContent =
          Number(document.querySelector('.score').textContent) - 1;
      } else {
        document.querySelector('.message').textContent = 'Too High!';
        document.querySelector('.score').textContent =
          Number(document.querySelector('.score').textContent) - 1;
      }
    }
  }
};

const replay = function () {
  myNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', replay);

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let isEnglish = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Input yokken
  if (!guess) {
    displayMessage(isEnglish ? '⛔️ No number!' : '⛔️ Numara yok!');

    // Oyuncu kazandığında
  } else if (guess === secretNumber) {
    displayMessage(isEnglish ? '🎉 Correct Number!' : '🎉 Doğru Numara!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Tahmin yanlışken
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? (isEnglish ? '📈 Too high!' : '📈 Çok yüksek!') : (isEnglish ? '📉 Too low!' : '📉 Çok düşük!'));
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(isEnglish ? '💥 You lost the game!' : '💥 Oyunu kaybettin!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(isEnglish ? 'Start guessing...' : 'Tahmin etmeye başla...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.language').addEventListener('click', function () {
  isEnglish = !isEnglish;
  document.querySelector('.title').textContent = isEnglish ? 'Guess My Number!' : 'Numaramı Tahmin Et!';
  document.querySelector('.between').textContent = isEnglish ? '(Between 1 and 20)' : '(1 ile 20 arasında)';
  document.querySelector('.again').textContent = isEnglish ? 'Again!' : 'Tekrar!';
  document.querySelector('.check').textContent = isEnglish ? 'Check!' : 'Kontrol Et!';
  displayMessage(isEnglish ? 'Start guessing...' : 'Tahmin etmeye başla...');
  document.querySelector('.label-score').innerHTML = isEnglish ? '💯 Score: <span class="score">20</span>' : '💯 Puan: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML = isEnglish ? '🥇 Highscore: <span class="highscore">0</span>' : '🥇 En Yüksek Puan: <span class="highscore">0</span>';
});

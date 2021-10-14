'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number 🥳';

// document.querySelector('.number').textContent = '?'; // secret number

// document.querySelector('.score').textContent = 40;

// document.querySelector('.highscore').textContent = 100;

// console.log(document.querySelector('.guess').value = 23); // when input element the use .value to select or pass the value
// document.querySelector('.guess').value;

// document.querySelector('.check').addEventListener('click', x => console.log(document.querySelector('.guess').value)) // use try to use arrow functions when it is possible

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let startingScore = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   // her we use expression function, and you cant just declare function it would not work
//   const guess = Number(document.querySelector('.guess').value);

//   // When input field is empty notify user
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number ⛔️!';
//     // If user did get the number right...
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🥳 Correct Number!';
//     document.querySelector('body').style.background =
//       'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (startingScore > highScore) {
//       highScore = startingScore;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     // If user did get number to high...
//   } else if (guess > secretNumber) {
//     if (startingScore > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       startingScore--;
//       document.querySelector('.score').textContent = startingScore;
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//     // If user did get number to low...
//   } else if (guess < secretNumber) {
//     if (startingScore > 1) {
//       document.querySelector('.message').textContent = '📉 Too low';
//       startingScore--;
//       document.querySelector('.score').textContent = startingScore;
//     } else {
//       document.querySelector('.message').textContent = '😭 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   startingScore = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('body').style.background =
//     'linear-gradient(#e66465, #9198e5);';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.message').textContent = 'Start guessing again...';
//   document.querySelector('.score').textContent = startingScore;
//   //   document.querySelector('.highscore').textContent = newHighScore;
// });

// refactored code
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let startingScore = 20;
let highScore = 0;

function pushMessage(message) {
  // This function fill display messages to the the message area
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  // her we use expression function, and you cant just declare function it would not work
  const guess = Number(document.querySelector('.guess').value);

  // When input field is empty notify user
  if (!guess) {
    pushMessage('No number ⛔️!');
    // If user did get the number right...
  } else if (guess === secretNumber) {
    pushMessage('🥳 Correct Number!');
    document.querySelector('body').style.background =
      'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (startingScore > highScore) {
      highScore = startingScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // If user did get number to high...
  } else if (guess !== secretNumber) {
    if (startingScore > 1) {
      pushMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      startingScore--;
      document.querySelector('.score').textContent = startingScore;
    } else {
      pushMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  startingScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.background =
    'linear-gradient(#e66465, #9198e5);';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  pushMessage('Start guessing again...');
  document.querySelector('.score').textContent = startingScore;
  //   document.querySelector('.highscore').textContent = newHighScore;
});

'use strict';
// I need a variable with my answer
// to take in a numeric input from my user to compare
// I need to compare if the value is too high or too low

let myNumber = 10;
let score = 0;
let numberOfGuesses = 4;

while(numberOfGuesses){
  // backticks!
  let response = prompt(`What number am I thinking of? You have ${numberOfGuesses} guesses`);
  numberOfGuesses--;

  if(response > myNumber){
    alert('too high');
  } else if(response < 10){
    alert('too low');
  } else {
    alert('You got it right! 12 points for Gryffindor');
    score++;
    break;
  }
  if(!numberOfGuesses){
    alert('You\'ve run out of attempts!');
  }

}

let userAttempts = 6;
let myAnswers = ['grapes of wrath', 'all the light we cannot see', 'the overstory'];

// my while loop controls the game
while(userAttempts) {
  // once I ask this question, I want to start decreasing my attempts value
  let userResponse = prompt('What\'s my favorite book?').toLowerCase();
  userAttempts--;
  // iterate over the array
  // compare the values of our user's input to each value in the array
  for(let i = 0; i < myAnswers.length; i++){
    if (myAnswers[i] === userResponse){
      alert('Yes! What a great book!');
      // break;
      userAttempts = 0;
    }
  }
}



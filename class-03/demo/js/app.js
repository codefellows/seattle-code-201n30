'use strict';

let score = 0;

let user = prompt('What is your name?');

while(!user){
  user = prompt('You can\'t see my site unless you give me your name');
};

let favoriteDinosaur = prompt('What is one of my favorite dinosaurs?').toLowerCase();
let favoriteAnimal = 'sloth'

//template literal
switch(favoriteDinosaur) {
  case 'stegosaurus':
  case 'sloth':
    alert(`Yes, ${user}, did you know that they have unusually small brains? About the size of a walnut`);
    score++
    console.log('current score ---->', score);
    break;
  case 'pyroraptor':
    alert(`Yasssss, ${user}! I love that their name means fire thief`);
    score--
    console.log('current score ---->', score);
    break;
  case 'pterodactyl':
    alert(`Technically this is the popular term for pterosaurs, but definitely still cool`);
    score++
    console.log('current score ---->', score);
    break;
  default:
    alert('Nope not one of my favorite dinosaurs')
}

let faveFormOfPotato = ['fries', 'tots', 'chips'];
let yourPotatoChoice = prompt('How do you like your potatoes?')

for (let i = 0; i < faveFormOfPotato.length; i++){
  console.log(faveFormOfPotato[i])
  if(yourPotatoChoice === faveFormOfPotato[i]){
    alert(`Yes! I love ${yourPotatoChoice}`);
  }
}

let foodsILike = ['burritos', 'pizza', 'popcorn'];

for (let i = 0; i < foodsILike.length; i++){
  console.log(i, foodsILike[i])
}

// adds element to the end
foodsILike.push('fries');
console.log(foodsILike);
console.log('current length', foodsILike.length);

// removes the element at the end
foodsILike.pop();
console.log(foodsILike);
console.log('current length', foodsILike.length);

// shift removes from the front
foodsILike.shift();
console.log(foodsILike);
console.log('current length', foodsILike.length);

// unshift adds to the front
foodsILike.unshift('burritos');
console.log(foodsILike);
console.log('current length', foodsILike.length);


let answer1 = prompt('answer me');
let answer2 = prompt('answer me');
let answer3 = prompt('answer me');

let myAnswers = [answer1, answer2, answer3];

for(let i = 0; i < myAnswers.length; i++){
  console.log(myAnswers[i]);
};

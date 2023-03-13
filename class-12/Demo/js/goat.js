'use strict';

// >>>>>>> GLOBAL VARIABLES

let voteCount = 15;

// single source of truth
// for data that can change with our application state
const state = {
  allGoatsArray: [],
};

// >>>>>>> DOM REFERENCES

let imgContainer = document.getElementById('goats');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');

// >>>>>>> CONSTRUCTOR FUNCTION

// utilizing default value for file extension
// if nothing is passed in it will default to this value
// if a value is passed in it will utilize that
function Goat(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  state.allGoatsArray.push(this);
};

let cruising = new Goat('cruisin-goat');
let float = new Goat('float-your-goat');
let away = new Goat('goat-away');
let hand = new Goat('goat-out-of-hand');
let kissing = new Goat('kissing-goat');
let sassy = new Goat('sassy-goat');
let smiling = new Goat('smiling-goat');
let sweater = new Goat('sweater-goat');
// let goat = new Goat('goat', 'png')

// proof of life
console.log(state.allGoatsArray);

// >>>>>>> HELPER FUNCTIONS
// Randomly generate an index
// W3 Resources: Math.floor(Math.random()*items.length)
function getRandomIndex(){
  return Math.floor(Math.random()*state.allGoatsArray.length);
}
// need this value to be within 0-7
// console.log(getRandomIndex());

// Render function
// target the attribute of that img element to add the path
function renderImgs(){
  // how can I utilize that random number here?
  let indexOne = getRandomIndex();
  let indexTwo = getRandomIndex();
  // while these two are equal we need to generate a new index
  while(indexOne === indexTwo){
    indexTwo = getRandomIndex();
  }

  imgOne.src = state.allGoatsArray[indexOne].photo;
  imgOne.alt = state.allGoatsArray[indexOne].name;
  state.allGoatsArray[indexOne].views++
  console.log(state.allGoatsArray[indexOne].views++);

  imgTwo.src = state.allGoatsArray[indexTwo].photo;
  imgTwo.alt = state.allGoatsArray[indexTwo].name;
  state.allGoatsArray[indexTwo].views++
  console.log(state.allGoatsArray[indexTwo].views++);
};

// >>>>>>> EVENT HANDLERS
function handleClick(event){
  voteCount--;
  // pulling the information from the alt attribute on our target
  // allows us to compare to our goat name
  let imgClicked = event.target.alt;
  for(let i = 0; i < state.allGoatsArray.length; i++){
    if(imgClicked === state.allGoatsArray[i].name){
      state.allGoatsArray[i].votes++
      console.log(imgClicked, state.allGoatsArray[i].votes);
    }
  }
  // ensures that our images will regenerate on click
  renderImgs();

  // stop votes
  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
  console.log(voteCount);
};

function handleShowResults(){
  // display the results in a list: name views votes for each goat
  // only work if the vote count is 0
  if(voteCount === 0){
    for(let i = 0; i < state.allGoatsArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${state.allGoatsArray[i].name} was shown ${state.allGoatsArray[i].views} and had ${state.allGoatsArray[i].votes} votes`
      resultsList.append(liElem);
    }
  }
}

// >>>>>>> LISTENERS
imgContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleShowResults);
// >>>>>>> FUNCTION INVOCATIONS

renderImgs();

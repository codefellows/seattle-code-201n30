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

// >>>>>>> CHART JS REFERENCE

const ctx = document.getElementById('results-chart')

// >>>>>>> CONSTRUCTOR FUNCTION

function Goat(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `imgs/${name}.${fileExtension}`;

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

function getRandomIndex(){
  return Math.floor(Math.random()*state.allGoatsArray.length);
}

function renderImgs(){

  let indexOne = getRandomIndex();
  let indexTwo = getRandomIndex();

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

// >>>>>>> FUNCTION TO RENDER CHART

function renderChart(){
  ctx.style.display = 'block';
  let goatNames = [];
  let goatVotes = [];
  let goatViews = [];

  for(let i = 0; i < state.allGoatsArray.length; i++){
    goatNames.push(state.allGoatsArray[i].name);
    goatVotes.push(state.allGoatsArray[i].votes);
    goatViews.push(state.allGoatsArray[i].views);
  }

  let resultsChart = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        borderWidth: 2,
        backgroundColor: '#9BD0F5'
      },
      {
        label: '# of Views',
        data: goatViews,
        borderWidth: 1
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }

  new Chart(ctx, resultsChart);

}

// >>>>>>> EVENT HANDLERS
function handleClick(event){
  voteCount--;
  let imgClicked = event.target.alt;
  for(let i = 0; i < state.allGoatsArray.length; i++){
    if(imgClicked === state.allGoatsArray[i].name){
      state.allGoatsArray[i].votes++
      console.log(imgClicked, state.allGoatsArray[i].votes);
    }
  }
  renderImgs();

  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
  console.log(voteCount);
};

function handleShowResults(){

  if(voteCount === 0){
    for(let i = 0; i < state.allGoatsArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${state.allGoatsArray[i].name} was shown ${state.allGoatsArray[i].views} and had ${state.allGoatsArray[i].votes} votes`
      resultsList.append(liElem);
    }
    // I'm targeting the style attribute on my element
    resultsButton.style.display = 'none';
    renderChart();
  }
}

// >>>>>>> LISTENERS
imgContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleShowResults);

// >>>>>>> FUNCTION INVOCATIONS
renderImgs();

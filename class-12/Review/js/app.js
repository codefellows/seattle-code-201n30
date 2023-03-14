'use strict';

// >>>>>> GLOBAL VARIABLES

let voteCount = 25;

const productNames = ['boots', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'tauntaun', 'scissors', 'water-can', 'wine-glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'pet-sweep', 'shark', 'sweep', 'unicorn'];


// >>>>>> DOM REFERENCES

let imgContainer = document.getElementById('ballot-box');
let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

// single source of truth
// for data that can change with our application state

let state = {
  allProductsArray: [],
};


// >>>>>>> CONSTRUCTOR FUNCTION
function Products(name, path) {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = path
}

function addProducts(array) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    let path = `img/${name}.jpg`;
    let product = new Products(name, path);
    state.allProductsArray.push(product);
  }
}

console.log(state.allProductsArray);

function getRandomIndex() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderImg() {

  let indexOne = getRandomIndex();
  let indexTwo = getRandomIndex();
  let indexThree = getRandomIndex();

  while (indexOne === indexTwo) {
    indexOne = getRandomIndex();
  }
  while (indexTwo === indexThree) {
    indexTwo = getRandomIndex();
  }
  while (indexThree === indexOne) {
    indexThree = getRandomIndex();
  }


  imgOne.src = state.allProductsArray[indexOne].photo;
  imgOne.alt = state.allProductsArray[indexOne].name;
  console.log(state.allProductsArray[indexOne].views++);
  console.log(imgOne);
  state.allProductsArray[indexOne].views++;

  imgTwo.src = state.allProductsArray[indexTwo].photo;
  imgTwo.alt = state.allProductsArray[indexTwo].name;
  state.allProductsArray[indexTwo].views++;

  imgThree.src = state.allProductsArray[indexThree].photo;
  imgThree.alt = state.allProductsArray[indexThree].name;
  state.allProductsArray[indexThree].views++;

}

function handleClick(event) {
  voteCount--;

  let imgClick = event.target.alt;
  console.log(imgClick);

  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (imgClick === state.allProductsArray[i].name) {
      state.allProductsArray[i].votes++;
      console.log(imgClick);
      console.log(imgClick, state.allProductsArray[i].votes);
    }
  }
  renderImg();

  if (voteCount === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
  console.log(voteCount);
}

function handleShowResults() {
  if (voteCount === 0) {
    for (let i = 0; i < state.allProductsArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${state.allProductsArray[i].name} was shown ${state.allProductsArray[i].views} and had ${state.allProductsArray[i].votes} votes`;
      resultsList.append(liElem);
    }
  }
  resultsButton.style.display = 'none';
}


imgContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleShowResults);

addProducts(productNames);
renderImg();


// >>>>>>> HELPER FUNCTIONS
// Randomly generate an index
// W3 Resources: Math.floor(Math.random()*items.length)

// Render function
// target the attribute of that img element to add the path





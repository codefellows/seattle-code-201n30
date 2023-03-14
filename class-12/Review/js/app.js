'use strict';

// >>>>>> GLOBAL VARIABLES

let voteCount = 10;

const productNames = ['boots', 'bathroom', 'breakfast', 'bubblegum', 'chair', 'dog-duck', 'tauntaun', 'scissors', 'water-can', 'wine-glass', 'bag', 'banana', 'cthulhu', 'dragon', 'pen', 'pet-sweep', 'shark', 'sweep', 'unicorn'];

// State object holds the holds the current state of the application (all existing Products)
const state = {
  allProducts: [],
};

// >>>>>> DOM REFERENCES

let ballotBox = document.getElementById('ballot-box');
let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

// >>>>>>> CONSTRUCTOR

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.views = 0;
  this.votes = 0;
}

// >>>>>>> HELPER FUNCTIONS

function randomIndex() {
  return Math.floor(Math.random() * productNames.length);
}

// >>>>>> EVENT HANDLERS


// >>>>>> EVENT LISTENERS

'use strict';

// >>>>>> DOM WINDOW

let pokeForm = document.getElementById('pokeform');
let pokeList = document.getElementById('pokemon-list');

// SINGLE SOURCE OF TRUTH: HOW WE MANIPULATE THE CURRENT APPLICATION STATE
let state = {
  allPokemon: [],
}

// >>>>>> CONSTRUCTOR

function Pokemon(name){
  this.name = name;

  this.render = function(){
    // I want to create a list element for every pokemon
    let listItem = document.createElement('li');
    // I want to make the content of this element the name of that pokemon
    // because I am in my object I can just utilize the this keyword
    listItem.textContent = this.name;
    pokeList.appendChild(listItem);

    if(pokeList){
      resetButton.style.display = 'block';
    }
  }
}

// >>>>>> EVENT HANDLER
// >>>>>> WHERE WE PUT DATA INTO LOCAL STORAGE
function handleSubmit(event){
  event.preventDefault();

  let newPokemon = new Pokemon(event.target.pokemon.value);
  state.allPokemon.push(newPokemon);
  pokeForm.reset();
  newPokemon.render();

  // STEP ONE: CONVERT TO FORMAT THAT I CAN USE - STRING
  let stringifiedPokemon = JSON.stringify(state.allPokemon);

  // STEP TWO: PUT ITEM INTO LOCAL STORAGE
  // I NEED KEY: IDENTIFIER I ASSIGN / VALUE: STRINGIFIED DATA
  localStorage.setItem('pokedex', stringifiedPokemon);
}

function handleReset(){
  localStorage.clear();
  location.reload(true);
}

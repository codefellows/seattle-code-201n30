'use strict';

let resetButton = document.getElementById('reset');

// STEP THREE: GET DATA FROM LOCAL STORAGE
// let pokemonFromLocalStorage = localStorage.getItem('pokedex');
// console.log(pokemonFromLocalStorage);

// STEP FOUR: CONVERT DATA BACK TO ORIGINAL FORMAT
// let parsedPokemon = JSON.parse(pokemonFromLocalStorage);
// console.log(parsedPokemon);

// if this is true....do this thing...if we have data in LS
if (localStorage.pokedex){
  // shorthand we are utilizing this key we assigned to this property we added to local storage to simplify
  let pokemonFromLocalStorage = JSON.parse(localStorage.pokedex);

  for (let i = 0; i < pokemonFromLocalStorage.length; i++){
    let newPokemon = new Pokemon(pokemonFromLocalStorage[i].name);


    state.allPokemon.push(newPokemon);
    state.allPokemon[i].render();
  }
}

// WE NEED TO MOVE PAGE SPECIFIC ELEMENTS OUTSIDE OF OUR SHARED JS FILE
// THIS WAY WE ARE NOT GETTING ERRORS FOR DIFFERENT FUNCTIONALITY ON EACH PAGE
pokeForm.addEventListener('submit', handleSubmit);
resetButton.addEventListener('click', handleReset);

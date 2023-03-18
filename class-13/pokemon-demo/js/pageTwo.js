'use strict';

let showListButton = document.getElementById('show-list');
let resetButton = document.getElementById('reset');

function handleShowList(){
  if(localStorage.pokedex){
    let pokemonFromLocalStorage = JSON.parse(localStorage.pokedex);
    showListButton.style.display = 'none';
    for(let i = 0; i < pokemonFromLocalStorage.length; i++){
      let newPokemon = new Pokemon(pokemonFromLocalStorage[i].name);
      state.allPokemon.push(newPokemon);
      newPokemon.render();
    }
  }
}

showListButton.addEventListener('click', handleShowList);
resetButton.addEventListener('click', handleReset);

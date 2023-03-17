# Demo Structure

## Local Storage Whiteboard

### State

- How our application changes with data over time
- The state of our app is all the data in our application that we have to keep track of for it to work.
- Whether a user is signed into an application or not is state
- if signed in then different data will be displayed
- All these little pieces of data that we manage in our app as our user interacts with it form our app state
- Simply data at a particular moment in time
- The present "state" (situation/circumstance/setting) of your data

### Data Persistence

- The act of data being saved for later use
- This could be after the browser shuts down, or for the session of the browser
- Possibly so that it can be accessed by another machine
- Typically we would use databases for this, but that is covered in 301
- At this level we are going to use Local Storage

### Local Storage Object

- Browser specific
- Saves Information without expiration
- Managed by the browser, but saved locally, on the machine where the browser is installed
- Very useful for persisting data, but not widely used anymore
- Has Limitations:
  - Not great for sensitive information
  - No form of data protection and can be accessed by any code on your web page
  - Can only store strings
  - Is synchronous
    - Each local storage operation you run will be one-at-a-time.
    - For complex applications this is a bad because it slows down your app's runtime.
  - Only stores minimal data (about 5MB)
- But great tool for development stages of applications
- It's an object, with built in methods

### Local Storage Methods

- setItem() // used to add or update data
- getItem() // used to retrieve data
- removeItem() // remove a key and value
- clear() // remove all data

### JSON

- JavaScript Object Notation
- Format based on JS Object Syntax
- Built off strings
- Only supports mainly 6 data types:
  - string
  - number
  - boolean
  - null
  - object
  - array
- Also has built in methods:
  - JSON.stringify() // converts a value to a string
  - JSON.parse() // returns values back to original format

## Console Demo

### Application

- Local Storage
- Session Storage
- Cookies

- `let myData = ['hello', 'world', 'inside', 'local storage']`
- `let stringifiedData = JSON.stringify(myData) // formats our data for local storage`
- `localStorage.setItem('storedData', stringifiedData)  // putting the formatted data into storage`
- `let retrievedItems = localStorage.getItem('storedData') // pulling the data out of storage`
- `let parsedItems = JSON.parse(retrievedItems) // returning the data to its original format`

```js
// update one value
// you have to pull the array out, modify it and then put it back
function saveLocalChecked(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskIndex = task.children[1].innerText;

    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i] === taskIndex) {
            localStorage.setItem('tasks', JSON.stringify(tasks[i] + '*'));
        }
    }
}
```

## VS Code

### Global Variables

``` js
let pokeForm = document.getElementById('pokeform');
let pokeList = document.getElementById('pokemon-list');
let resetButton = document.getElementById('reset');

// state object is a single source of truth
// simply data at a particular moment in time
// the present "state" of your data essentially
// we can then just update our data object when the use does things
let state = {
  allPokemon: [],
};
```

### Constructor

``` js
function Pokemon(name) {
  this.name = name;
  // create a method on my constructor, so I can render directly through the constructor
  this.render = function() {
    // I want to create a list item for every pokemon
    // so I am going to assign a variable to create that element
    let listItem = document.createElement('li');
    // I want the content of that list to be the name of the pokemon
    listItem.textContent = this.name;
    // and I want that element to be part of my pokemon list parent element
    pokeList.appendChild(listItem);

    // add this portion later if you make it to the reset
    if (pokeList) {
      resetButton.style.display = 'inline';
    }
  };
}
```

### Event Handlers

``` js
// handle submit function

// I need a function to handle my submit event
// and I need information from that event, so I am going to give that function the event object as a parameter
function handleSubmit(event){
  // what happens when we have a submit event (page refresh)
  // we want to prevent that default behavior, so we can see the elements being appended
  event.preventDefault();
  // I need to assign a variable to to hold the value I am targeting (the pokemon name)
  // maybe I go through console.logs to show how I identify this value
  // console.log whole event
  // show how the name attribute comes into play
  let newPokemon = new Pokemon(event.target.pokemon.value);
  // console log newPokemon
  // now that I have my value I want to put that into state, in my array of pokemon
  state.allPokemon.push(newPokemon);
  // I want to clear the form
  pokeForm.reset();
  // and render the new pokemon with the method I put on my constructor
  newPokemon.render();
  // now I want to put that pokemon into state so it will persist
  // refresh page -> show that pokemon are in local storage
  let stringifiedPokemon = JSON.stringify(state.allPokemon);
  localStorage.setItem('pokedex', stringifiedPokemon);
  // show how above is updating and this creates an object
  localStorage.pokedex = JSON.stringify(state.allPokemon);
  console.log('My Pokedex', localStorage.pokemon);
}

// reset function if time

function handleReset() {
  localStorage.clear();
  location.reload(true);
}

### EVENT LISTENERS

pokeForm.addEventListener('submit', handleSubmit);

// if time
resetButton.addEventListener('click', handleReset);

```

### LOCAL STORAGE CONDITIONAL LOGIC

``` js
// I need to retrieve pokemon from my list
// show how if I refresh they're still in local storage but can't be accessed
// but first maybe I want to check and see if there even are any to retrieve
// conditional statement
if(localStorage.pokedex) {
  // if this evaluates to true, if I pokemon exist
  // I need to parse that data
  let pokemonFromLocalStorage = JSON.parse(localStorage.pokedex);
  // but now my data is in a separate array
  for (let i = 0; i < pokemonFromLocalStorage.length; i++) {
    // assign variable to hold each separate pokemon name
    let newPokemon = new Pokemon(pokemonFromLocalStorage[i].name);
    // push them back into state
    state.allPokemon.push(newPokemon);
    // render each name
    state.allPokemon[i].render();
  }
}
```

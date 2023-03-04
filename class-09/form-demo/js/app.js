'use strict';

// EVENT: FORM SUBMISSION

// GRAB ELEMENT
let myForm = document.getElementById('my-form');

// DEFINE CALLBACK / HANDLER
// bring the event into the function as a parameter
// you might see e instead of event
function handleSubmit(event){
  // default behavior of submit event refreshes page
  // to prevent automatic refresh we use this built in method
  event.preventDefault();
  console.log(event);

  console.log('my input target', event.target.myTextInput);
  let myTextInput = event.target.myTextInput.value;
  console.log('my input value', myTextInput);

  // remember that these input fields return strings
  // + is shorthand to convert to number
  let myNumber = +event.target.myNumber.value;
  console.log('my number value', myNumber);
  console.log(typeof myNumber);

  let myPet = event.target.myPets.value;
  console.log(myPet);
}

// ATTACH EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);

'use strict';

// defining a function:
// use the function keyword
// name it
// make your statements in a code block

// declarations
// can be hoisted: the function can be used before it is defined
// function iAmADeclaration(parameters){
//   //statements
// };

// expressions
// these cannot be hoisted
// const iAmAnExpression = function(parameters){
//   //statements
// };
// // invocation
// iAmAnExpression(arguments);
// functions are only executed when they are called
// invoking by the function name followed by parentheses

// parameters
// used when you are defining the function
// a variable that is defined within the parentheses
// JavaScript naming conventions are camel case
// placeholder for the value that comes when you invoke your function
function askQuestion(questionIWantToAsk){
  let response = prompt(questionIWantToAsk);
  console.log(response);
};
// arguments
// the values the function receives in place of the parameter when the function is executed
askQuestion('Do I have a pet?');

function sayHello(person){
  console.log(`OMG HI ${person}`);
};

sayHello('Stephanie');

function greet(greeting, person){
  console.log(greeting + person);
};

greet('Hola ', 'Stephanie');

function alertUser(message = 'no, this is a default message'){
  console.log(`Was there an argument? ${message}`);
};

alertUser();
alertUser('yes there was an argument');

// Scope
// what values a function has access to
// two levels: global or function scope
// global scope: is a value that exists outside of a function
// the availability of a variable depends on where you declare it

// if declared outside the function it can be utilized within
// if declared INSIDE the function, it is only available there

let cow = 'cow';

function animalNoise(animal, noise) {
  let pig = 'pig';
  console.log(`${animal} says ${noise}`);
  console.log(`${cow} says moo`);
  console.log(`${pig} says oink`);
}

animalNoise(cow, 'moo');
// this is invalid so I cannot access the pig variable outside of the function
// animalNoise(pig, 'oink');

function normalize(value) {
  return value.toLowerCase();
}

console.log(normalize('HELLO'));

function user() {
  let name = 'Steph';
  let age = 34;
  return name, age;
}

// only returns last value
let userFunctionReturn = user();
console.log(userFunctionReturn);

function human(){
  let birthdate = 'June 8th';
  let birthname = 'Stephanie Marie';
  return [birthdate, birthname];
};

let [birthdate, birthname] = human();
console.log(birthdate, birthname);

function userInfo(){
  let name = 'Steph';
  let age = 34;
  let userDeets = [name, age];
  return userDeets;
}

let userDeets = userInfo();
console.log(userDeets);

'use strict';

// My client runs a dog rescue and needs a way to get the profiles of the incoming pups up for adoption onto a page
// New puppies come in and need to be added to the page

// What will we display?
// Puppies!
// What information do we need to show?
// name
// age: with a function - 3 to 12 months
// interests
// is the puppy good with other dogs?
// is the puppy good with cats?
// is the puppy good with kids?
// photo

// GLOBAL VARIABLES / WINDOW INTO DOM

let sectionElem = document.getElementById('puppy-profiles');
console.log(sectionElem);
let sectionElem2 = document.getElementById('puppy-profile-two');

// let hours = ['6am', '7am',]

// >>>>>>> HELPER FUNCTION
// taken from MDN <<<<<
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// >>>>>>> OBJECT LITERALS

let woofles = {
  name: 'Woofles',
  age: 0,
  description: 'sweet chocolate lab puppy',
  interests: ['zoomies', 'retrieving', 'snackies'],
  isGoodWithDogs: true,
  isGoodWithCats: true,
  isGoodWithKids: true,
  photo: 'img/woofles.jpg',
  getAge: function() {
    this.age = `${randomAge(3, 12)} months old`
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    // I need an h3 => I want it to be the name of my puppy
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = this.description;
    articleElem.appendChild(imgElem);

    let pElem = document.createElement('p');
    pElem.textContent = this.description;
    articleElem.appendChild(pElem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `${this.name} is ${this.age} and likes`
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }
  }
};

let spud = {
  name: 'Spud',
  age: 0,
  description: 'sweet frenchie',
  interests: ['screaming', 'snuggling', 'snackies'],
  isGoodWithDogs: true,
  isGoodWithCats: true,
  isGoodWithKids: true,
  photo: 'img/spud.jpg',
  getAge: function() {
    this.age = `${randomAge(3, 12)} months old`
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem2.appendChild(articleElem);

    // I need an h3 => I want it to be the name of my puppy
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = this.description;
    articleElem.appendChild(imgElem);

    let pElem = document.createElement('p');
    pElem.textContent = this.description;
    articleElem.appendChild(pElem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `${this.name} is ${this.age} and likes`
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }
  }
};

woofles.getAge();
console.log(woofles);
console.log(woofles.age);
woofles.render();

spud.getAge();

spud.render();

// let seattle = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   averageCookies: 6.3,
// }

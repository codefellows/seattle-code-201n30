'use strict';

// GLOBAL VARIABLES / WINDOW INTO DOM

let sectionElem = document.getElementById('puppy-profiles');
let allPuppies = [];

// >>>>>>> HELPER FUNCTION
// taken from MDN <<<<<
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// >>>>>>> CONSTRUCTOR FUNCTION

function Puppy(name, description, interests, isGoodWithDogs, isGoodWithCats, isGoodWithKids, photo){

  this.name = name;
  this.interests = interests;
  this.description = description;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;

  allPuppies.push(this);
}

let woofles = new Puppy('Woofles', 'sweet chocolate lab puppy', ['zoomies', 'retrieving', 'snackies'], true, true, true, 'img/woofles.jpg');
let spud = new Puppy('Spud', 'sweet frenchie bebe', ['screaming', 'snuggling', 'nibbling'], true, false, false, 'img/spud.jpg');
let ralph = new Puppy('Ralph', 'German shepherd baby', ['bacon', 'shredding', 'nuzzling'], true, false, false, 'img/ralph.jpg');

console.log(allPuppies);

Puppy.prototype.getAge = function() {
  this.age = `${randomAge(3, 12)} months old`
}

Puppy.prototype.render = function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let picContainer = document.createElement('div');
    articleElem.appendChild(picContainer)

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = this.description;
    imgElem.id = this.name;
    picContainer.appendChild(imgElem);

    let textContainer = document.createElement('div');
    articleElem.appendChild(textContainer)

    let pElem2 = document.createElement('p');
    pElem2.textContent = `${this.name} is ${this.age} and likes`
    textContainer.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    textContainer.appendChild(ulElem);
    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    // TABLE RENDER >>>>>
    let tableElem = document.createElement('table');
    articleElem.appendChild(tableElem);

    // first row
    // going to need a row for every store
    let row1= document.createElement('tr');
    tableElem.appendChild(row1);
    let th1Elem = document.createElement('th');
    row1.appendChild(th1Elem);
    th1Elem.textContent = 'Good With Dogs';
    let th2Elem = document.createElement('th');
    row1.appendChild(th2Elem);
    th2Elem.textContent = 'Good With Cats';
    let th3Elem = document.createElement('th');
    row1.appendChild(th3Elem);
    th3Elem.textContent = 'Good With Kids';

    // second row
    let row2 = document.createElement('tr');
    tableElem.appendChild(row2);
    let td1Elem = document.createElement('td');
    row2.appendChild(td1Elem);
    td1Elem.textContent = this.isGoodWithDogs;
    let td2Elem = document.createElement('td');
    row2.appendChild(td2Elem);
    td2Elem.textContent = this.isGoodWithCats;
    let td3Elem = document.createElement('td');
    row2.appendChild(td3Elem);
    td3Elem.textContent = this.isGoodWithKids;
  }

woofles.getAge();
woofles.render();

spud.getAge();
spud.render();

ralph.getAge();
ralph.render();


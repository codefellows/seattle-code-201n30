'use strict';

// GLOBAL VARIABLES / WINDOW INTO DOM

let sectionElem = document.getElementById('puppy-profiles');
let allPuppies = [];
console.log('DO MY PUPPIES EXIST?', allPuppies);

// >>>>>>> HELPER FUNCTION
// taken from MDN <<<<<
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// >>>>>>> CONSTRUCTOR FUNCTION

function Puppy(name, interests, description, isGoodWithDogs, isGoodWithCats, isGoodWithKids, photo){

    this.name = name;
    this.interests = interests;
    this.description = description;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;
    this.isGoodWithKids = isGoodWithKids;
    this.photo = photo;

  allPuppies.push(this);
}

// >>>>>>> PROTOTYPE METHODS

Puppy.prototype.getAge = function(){
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

    let row1 = document.createElement('tr');
    tableElem.appendChild(row1);

    let th1Elem = document.createElement('th');
    th1Elem.textContent = 'Good With Dogs';
    row1.appendChild(th1Elem);

    let th2Elem = document.createElement('th');
    th2Elem.textContent = 'Good With Cats';
    row1.appendChild(th2Elem);

    let th3Elem = document.createElement('th');
    th3Elem.textContent = 'Good With Kids';
    row1.appendChild(th3Elem);

    let row2 = document.createElement('tr');
    tableElem.appendChild(row2);

    let tdElem1 = document.createElement('th');
    tdElem1.textContent = this.isGoodWithDogs;
    row2.appendChild(tdElem1);

    let tdElem2 = document.createElement('th');
    tdElem2.textContent = this.isGoodWithCats;
    row2.appendChild(tdElem2);

    let tdElem3 = document.createElement('th');
    tdElem3.textContent = this.isGoodWithKids;
    row2.appendChild(tdElem3);
}

// >>>>>>> INSTANTIATE

new Puppy('Woofles', ['zoomies', 'retrieving', 'snackies'], 'sweet chocolate lab puppy', true, true, true, 'img/woofles.jpg');
new Puppy('Spud', ['screaming', 'snuggling', 'nibbling'], 'sweet frenchie bebe', true, false, false, 'img/spud.jpg');
new Puppy('Ralph', ['bacon', 'shredding', 'nuzzling'], 'german shephard pup', true, false, true, 'img/ralph.jpg');

function renderAllPuppies(){
  for(let i = 0; i < allPuppies.length; i++){
    allPuppies[i].getAge();
    allPuppies[i].render();
  }
}

renderAllPuppies();

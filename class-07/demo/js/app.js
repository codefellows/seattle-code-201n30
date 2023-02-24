'use strict';

// GLOBAL VARIABLES / WINDOW INTO DOM

let sectionElem = document.getElementById('puppy-profiles');
console.log(sectionElem);
let sectionElem2 = document.getElementById('puppy-profile-two');

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
  }
};

let spud = {
  name: 'Spud',
  age: 0,
  description: 'sweet frenchie bebe',
  interests: ['screaming', 'snuggling', 'nibbling'],
  isGoodWithDogs: true,
  isGoodWithCats: false,
  isGoodWithKids: false,
  photo: 'img/spud.jpg',
  getAge: function() {
    this.age = `${randomAge(3, 12)} months old`
  },
  render: function(){
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
  }
};

let ralph = {
  name: 'Ralph',
  age: 0,
  description: 'german shephard pup',
  interests: ['bacon', 'shredding', 'nuzzling'],
  isGoodWithDogs: true,
  isGoodWithCats: false,
  isGoodWithKids: true,
  photo: 'img/ralph.jpg',
  getAge: function() {
    this.age = `${randomAge(3, 12)} months old`
  },
  render: function(){
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
  }
};

woofles.getAge();
woofles.render();

spud.getAge();
spud.render();

ralph.getAge();
ralph.render();


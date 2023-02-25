'use strict';

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

// >>>>>>> WINDOW INTO DOM

let sectionElem = document.getElementById('sales-section')

// >>>>>>> GLOBAL VARIABLES

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// >>>>>> OBJECT LITERALS

let seattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesPerHour: [],
  total: 0,
  generateCustomers: function(){
    for(let i = 0; i < hours.length; i++){
      let randomCustomers = randomNumber(this.minCust, this.maxCust);
      this.cookiesPerHour.push(Math.floor(randomCustomers * this.avgCookies));
    }
  },
  calculateTotal: function(){
    for(let i = 0; i < this.cookiesPerHour.length; i++){
      this.total += this.cookiesPerHour[i];
    }
  },
  render: function(){
    let pElem = document.createElement('p');
    sectionElem.appendChild(pElem);
    pElem.textContent = this.city;

    let ulElem = document.createElement('ul');
    sectionElem.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`
    }
    let liElem2 = document.createElement('li');
    ulElem.appendChild(liElem2);
    liElem2.textContent = `Total: ${this.total}`
  }
}

seattle.generateCustomers();
console.log(seattle.cookiesPerHour);
seattle.calculateTotal();
console.log(seattle.total);
seattle.render();

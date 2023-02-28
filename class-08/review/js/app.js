'use strict';

// >>>>>>> WINDOW INTO DOM

let sectionElem = document.getElementById('sales-section')
let salesTable = document.getElementById('sales-table');

// >>>>>>> GLOBAL VARIABLES

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// >>>>>> CONSTRUCTOR FUNCTION

function Store(city, minCust, maxCust, avgCookies) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;

  allStores.push(this);
}

// >>>>>> PROTOTYPE METHODS

Store.prototype.generateSales = function () {
  this.cookiesPerHour = [];
  for (let i = 0; i < hours.length; i++) {
    let randomCustomers = randomNumber(this.minCust, this.maxCust);
    this.cookiesPerHour.push(Math.floor(randomCustomers * this.avgCookies));
  }
}

Store.prototype.calculateTotal = function () {
  this.total = 0;
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    this.total += this.cookiesPerHour[i];
  }
}

Store.prototype.render = function () {

  let articleElem = document.createElement('article');
  sectionElem.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  articleElem.appendChild(h2Elem);
  h2Elem.textContent = this.city;

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = `${hours[i]}:  ${this.cookiesPerHour[i]}`;
  }

  let lastLiElem = document.createElement('li');
  ulElem.appendChild(lastLiElem);
  lastLiElem.textContent = `Total: ${this.total}`;

}

// >>>>>>>> INVOKE OUR CONSTRUCTOR FUNCTION

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// >>>>>>>>> INVOKE OUR METHODS

seattle.generateSales();
seattle.calculateTotal();
seattle.render();

tokyo.generateSales();
tokyo.calculateTotal();
tokyo.render();

dubai.generateSales();
dubai.calculateTotal();
dubai.render();

paris.generateSales();
paris.calculateTotal();
paris.render();

lima.generateSales();
lima.calculateTotal();
lima.render();

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

  // My table will have have a thead to start
  // This will contain a table row
  // Each cell of my table header will contain one of the hours from my array

  // I will need a table body
  // Each row will be for each city
  // The first cell will be the name of my city
  // The following cells will correspond with with the hour and contain sales from that hour
  // My last cell will be the total of for that location's sales

  // My table needs a footer
  // I will need a row
  // The first cell will say "Totals or something"
  // This footer will add up all of the hourly sales from every location
  // The final cell will be a grand total of all locations daily sales

}

// I will need a separate render function to render my table header

// I will need a separate render function to render my table footer

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

'use strict';

// >>>>>>> WINDOW INTO DOM

let salesTable = document.getElementById('sales-table');
let tbodyElem = document.createElement('tbody');
salesTable.appendChild(tbodyElem);

// I need a way to access my form
// A way to listen for user submissions events
// A function to handle that submission process
// Submission process should handle creation of a new row
// I will need to update my totals as well

// >>>>>>> GLOBAL VARIABLES

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function renderHeader(){

  let theadElem = document.createElement('thead');
  salesTable.appendChild(theadElem);

  let trHeaderElem = document.createElement('tr');
  theadElem.appendChild(trHeaderElem);

  let thFirstCell = document.createElement('th');
  trHeaderElem.appendChild(thFirstCell);

  for(let i = 0; i < hours.length; i++){
    let thElem = document.createElement('th');
    trHeaderElem.appendChild(thElem);
    thElem.textContent = hours[i];
  }

  let thFinalCell = document.createElement('th');
  trHeaderElem.appendChild(thFinalCell);
  thFinalCell.textContent = 'Total';
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


  let trBodyElem = document.createElement('tr');
  tbodyElem.appendChild(trBodyElem);


  let tdCityElem = document.createElement('td');
  trBodyElem.appendChild(tdCityElem);
  tdCityElem.textContent = this.city;

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let tdSalesElem = document.createElement('td');
    trBodyElem.appendChild(tdSalesElem);
    tdSalesElem.textContent = this.cookiesPerHour[i];
  }

  let tdTotalElem = document.createElement('td');
  trBodyElem.appendChild(tdTotalElem);
  tdTotalElem.textContent = this.total;

}


function renderFooter(){

  let tfootElem = document.createElement('tfoot');
  salesTable.appendChild(tfootElem);

  let trFooterElem = document.createElement('tr');
  tfootElem.appendChild(trFooterElem);

  let firstCell = document.createElement('td');
  trFooterElem.appendChild(firstCell);

  let totalsRowArray = [];

  for(let i = 0; i < hours.length; i++){
    let currentTotal = 0;

    for (let j = 0; j < allStores.length; j++){
      currentTotal += allStores[j].cookiesPerHour[i];
    }
    totalsRowArray.push(currentTotal);
    console.log(totalsRowArray);
  }

  let grandTotal = 0;
  for(let i = 0; i < totalsRowArray.length; i++){
    grandTotal += totalsRowArray[i];
    let tdFootElem = document.createElement('td');
    trFooterElem.appendChild(tdFootElem);
    tdFootElem.textContent = totalsRowArray[i];
  }

  let lastCell = document.createElement('td');
  trFooterElem.appendChild(lastCell);
  lastCell.textContent = grandTotal;
}

// >>>>>>>> INVOKE OUR CONSTRUCTOR FUNCTION

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

renderHeader();

// >>>>>>>>> INVOKE OUR METHODS

// possible area for refactor...
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

console.log(allStores)
console.log(allStores[0].cookiesPerHour[0]);

renderFooter();

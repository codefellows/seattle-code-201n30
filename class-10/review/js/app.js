//branch class07-tables

//global variables
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let cities = [];

//WINDOW into the DOM
let container = document.getElementById('sales-table'); //this is the parent
let tableElement = document.createElement('table');
let tbodyElement = document.createElement('tbody'); // used to be within the render function, moving it outside of render created a single tbody tag
tableElement.appendChild(tbodyElement);


//taken from MDN to return random integer, inclusive range
function estimateNumberOfCustomers(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//this is my constructor/class
function City(city, minNumberOfCustomers, maxNumberOfCustomers, avgSales){
  this.city = city;
  this.minNumberOfCustomers = minNumberOfCustomers;
  this.maxNumberOfCustomers = maxNumberOfCustomers;
  this.avgSales = avgSales;
  this.render();
  // cities.push(this);
}

//this is a method within City
City.prototype.estimateCookieSales = function(){
  this.sum = 0;
  this.cookiesPerHour = [];

  for(let i = 0; i < hours.length; i++){
    let cookies = Math.ceil(this.avgSales * estimateNumberOfCustomers(this.minNumberOfCustomers,this.maxNumberOfCustomers));
    this.cookiesPerHour.push(cookies);
    this.sum += cookies;

  }
};

//thead table function
function displayHeader(){
  let tableHead = document.createElement('thead');
  let tableHeadRow = document.createElement('tr');
  container.appendChild(tableElement);
  tableElement.appendChild(tableHead);
  tableHead.appendChild(tableHeadRow);

  let emptyCell = document.createElement('th');
  tableHeadRow.appendChild(emptyCell);

  for(let i = 0; i < hours.length; i++){
    let thHours = document.createElement('th');
    tableHeadRow.appendChild(thHours);
    thHours.textContent = hours[i];
  }

  //from demo
  let thTotalCell = document.createElement('th');
  tableHeadRow.appendChild(thTotalCell);
  thTotalCell.textContent = 'Totals';
}

//tbody table render
City.prototype.render = function(){
  this.estimateCookieSales();
  let tableRow = document.createElement('tr');
  tbodyElement.appendChild(tableRow);

  let cityName = document.createElement('th');
  cityName.textContent = this.city;
  tableRow.appendChild(cityName);

  //loops over cookiesPerHour for each city
  for(let i = 0; i < hours.length; i++){
    let cookieSales = document.createElement('td');
    tableRow.appendChild(cookieSales);
    cookieSales.textContent = this.cookiesPerHour[i];
  }

  //displays totals for each city
  let cityTotals = document.createElement('td');
  tableRow.appendChild(cityTotals);
  cityTotals.textContent = this.sum;

};

let newCityForm = document.getElementById('add-new-location'); // this grabs a element in the DOM, giving us access to manipulate the DOM

//event handler
function handleSubmit(event){
  event.preventDefault();
  console.log(event);

  let cityName = event.target.cityName.value;
  let cityMin = +event.target.cityMin.value;
  let cityMax = +event.target.cityMax.value;
  let cityAvg = +event.target.cityAvg.value;

  let newCity = new City(cityName, cityMin, cityMax, cityAvg);
  console.log(newCity);

  cities.push(newCity);

  // newCity.estimateCookieSales();
  // newCity.render();

  // let tableFooter = document.querySelector('tfoot');
  // tableFooter.remove();
  // document.querySelector(tr:last-of-type);
  // tableElem.deleteRow(-1);
  document.querySelector('tfoot').remove();
  displayFooter();
}

// tfoot function displays hourly totals
function displayFooter(){
  let totalsPerHour = [];
  for(let i = 0; i < hours.length; i++){
    let columnTotal = 0;
    for(let j = 0; j < cities.length; j++){
      columnTotal += cities[j].cookiesPerHour[i];
    }
    totalsPerHour.push(columnTotal); //when I had this within the above inner loop, totalsPerHour.length = hours.length * cookiesPerHour.length YIKES
  }
  console.log('first array', totalsPerHour);

  let tableFooter = document.createElement('tfoot');
  tableElement.appendChild(tableFooter);
  let tableRowFooter = document.createElement('tr');
  tableFooter.appendChild(tableRowFooter);

  //this displays 'Total' in footer FROM DEMO
  let firstCell = document.createElement('th');
  tableRowFooter.appendChild(firstCell);
  firstCell.textContent = 'Totals';

  let grandTotal = 0;
  for(let i = 0; i < totalsPerHour.length; i++){
    grandTotal += totalsPerHour[i];
    let hourlyTotals = document.createElement('td');
    tableRowFooter.appendChild(hourlyTotals);
    hourlyTotals.textContent = totalsPerHour[i];
  }

  let tdGrandTotal = document.createElement('td');
  tableRowFooter.appendChild(tdGrandTotal);
  tdGrandTotal.textContent = grandTotal;
}

//this is the instantiation of each object
let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
cities.push(seattle, tokyo, dubai, paris, lima);

//this calls the methods
displayHeader();

// function renderAllCities(){
//   for(let i = 0; i < cities.length; i++){
//     cities[i].estimateCookieSales();
//     cities[i].render();
//     console.log(cities[i]);
//   }
// }

// renderAllCities();

displayFooter();

//event listener for submit
newCityForm.addEventListener('submit', handleSubmit);

// displayCities();

// Problem statement #
//
// You are given one variable named raw_array, assigned to a two-dimensional array consisting of objects. Each object has the following properties:
//
// name: This is assigned to a string with the value of the city’s name in which the population resides. Example, {name: "Sydney"}
// population: This is assigned to a number with the value of the quantity of the residing population. Example, {population: 1250000}
// temp: This is assigned to a number with the value of the temperature (in °C) of the region. Example, {temp: 3.0}
// currency: This is assigned to a string with the value of the currency code of the city in which the population resides. Example, {currency: "AUD"}
//
const raw_arr = [
  [
    { name: "NewYork", population: 8623000, temp: 6.0, currency: "USD" },
    { name: "Boston", population: 685094, temp: 2.0, currency: "USD" },
    { name: "Los Angeles", population: 4000000, temp: 13.0, currency: "USD" },
  ],
  [
    { name: "San Francisco", population: 884363, temp: 12.0, currency: "USD" },
    null,
    { name: "Charlottesville", population: 48019, temp: 8.0, currency: "USD" },
  ],
  [
    null,
    { name: "Seattle", population: 724745, temp: 4.0, currency: "USD" },
    null,
  ],
]; // initialise the two-dimensional array of objects

let ans = 0; // initialise ans to 0 (Sum of population)

for (let i = 0; i < raw_arr.length; i++) {
  for (let j = 0; j < raw_arr[i].length; j++) {
    if (raw_arr[i][j] !== null && raw_arr[i][j]["temp"] <= 10.0) {
      ans += raw_arr[i][j]["population"];
    }
  }
}

console.log(`Total population is: ${ans}`);

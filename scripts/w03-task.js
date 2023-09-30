/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  let sumNumber = document.querySelector('#sum');

  sumNumber.value = add(addNumber1, addNumber2);
}

const addNumbersBtn = document.querySelector('#addNumbers');

addNumbersBtn.addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  let difference = number1 - number2;
  return difference;
};

const subtractNumbers = function () {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);

  let differenceNumber = document.querySelector('#difference');

  differenceNumber.value = subtract(subtractNumber1, subtractNumber2);
};

const subtractNumbersBtn = document.querySelector('#subtractNumbers');

subtractNumbersBtn.addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  let product = number1 * number2;
  return product;
};

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);

  let productNumber = document.querySelector('#product');

  productNumber.value = multiply(multiplyNumber1, multiplyNumber2);
};

const multiplyNumbersBtn = document.querySelector('#multiplyNumbers');

multiplyNumbersBtn.addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
  let quotient = number1 / number2;
  return quotient;
};

const divideNumbers = () => {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);

  let quotient = document.querySelector('#quotient');

  quotient.value = divide(dividend, divisor);
};

const divideNumbersBtn = document.querySelector('#divideNumbers');

divideNumbersBtn.addEventListener('click', divideNumbers);

/* Decision Structure */
const date = new Date();
let currentYear;

currentYear = date.getFullYear();

currentYear = document.querySelector('#year');

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const sourceArray = document.querySelector('#array');
sourceArray.textContent = numbersArray;

/* Output Odds Only Array */

const odds = document.querySelector('#odds');
odds.textContent = numbersArray.filter((number) => number % 2 !== 0);

/* Output Evens Only Array */

const evens = document.querySelector('#evens');
evens.textContent = numbersArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
const sumOfArray = document.querySelector('#sumOfArray');
sumOfArray.textContent = numbersArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

/* Output Multiplied by 2 Array */
const multiplied = document.querySelector('#multiplied');
multiplied.textContent = numbersArray.map((number) => number * 2);

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = document.querySelector('#sumOfMultiplied');
const numbersMultiplied = numbersArray.map((number) => number * 2);
sumOfMultiplied.textContent = numbersMultiplied.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

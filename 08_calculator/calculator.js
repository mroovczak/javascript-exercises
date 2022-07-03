const add = function(num1=0, num2=0) {
	let sum = 0;
  sum = num1 + num2;
  return sum;
};

const subtract = function(num1=0, num2=0) {
  let dif = 0;
  dif = num1 - num2;
  return dif;
};

const sum = function(arr) {
	let summed = 0;
  arr.forEach(element => {
      summed += element;
  });
  return summed;
};

const multiply = function(arr) {
  let multiplied = 1;
  arr.forEach(element => {
      multiplied *= element;
  });
  return multiplied;
};

const power = function(num, pow=1) {
	let equal = 0;
  equal = num ** pow;
  return equal;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

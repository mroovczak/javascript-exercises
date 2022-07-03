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
	let result = 0;
  result = num ** pow;
  return result;
};

const factorial = function(num=0) {
  let result = 1;
	for(let i = 1; i<=num; i++){
    result *= i;
  }
  return result;
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

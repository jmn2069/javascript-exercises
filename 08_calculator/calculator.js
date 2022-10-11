const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let num3 = 0;
  for (let i = 0; i < array.length; i++) {
    num3 += array[i];
  }
  return num3;
};

const multiply = function(array) {
  let num3 = 1;
  for (let i = 0; i < array.length; i++) {
    num3 *= array[i];
  }
  return num3;
};

const power = function(num1, num2) {
  return (num1 ** num2)
};

const factorial = function(num1) {
	let num3 = 1;
  for (let i = 1; i < num1 + 1; i++){
    num3 *= i;
  }
  return num3;
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

const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	let total = array.reduce((total, number) => total + number, 0)
  return total
};

const multiply = function(array) {
  let total = array.reduce((total, number) => total * number, 1)
  return total
};

const power = function(a,b) {
	return a**b
};

const factorial = function(number) {
	let total = 1
  for (let i = 1; i < number + 1; i++){
    total *= i
  }
  return total
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

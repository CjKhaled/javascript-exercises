const removeFromArray = function (array, ...element) {
  for (number of element) {
    for (value of array) {
      if (number === value) {
        let index = array.indexOf(number);
        if (index > -1) {
          array.splice(index, 1);
        }
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

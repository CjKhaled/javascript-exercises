const sumAll = function (start, end) {
  let totalSum = 0;
  const checkHighest = new Array(start, end);
  if (
    typeof checkHighest[0] !== "number" ||
    typeof checkHighest[1] !== "number"
  ) {
    return "ERROR";
  }
  start = Math.min(...checkHighest);
  end = Math.max(...checkHighest);
  for (let i = start; i <= end; i++) {
    totalSum += i;
  }
  if (totalSum < 0) {
    return "ERROR";
  } else {
    return totalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;

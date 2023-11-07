const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    } else if (!Number.isInteger(number)) {
        number = parseInt(number)
    }
    let startOfFibonacci = [1, 1]
    const trueRange = number - 2
    let firstIndex = 0
    let secondIndex = 1
    for (let i= 0; i < trueRange; i++) {
        startOfFibonacci.push(startOfFibonacci[firstIndex] + startOfFibonacci[secondIndex])
        secondIndex++
        firstIndex++
    }
    return startOfFibonacci[startOfFibonacci.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

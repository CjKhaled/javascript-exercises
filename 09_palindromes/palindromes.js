const palindromes = function (string) {
    const cleanedString = [...string].filter((letter) => letter !== " " &&
    letter !== "." && letter !== "," && letter !== "!").map((letter) => 
    letter.toLowerCase())
    // Make sure the original array isn't altered
    const stringToCompare= [...cleanedString].reverse()
    
    for (let i = 0; i < cleanedString.length; i++) {
        if (cleanedString[i] !== stringToCompare[i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;

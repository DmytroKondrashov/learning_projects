// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
  const result = [];
    let moreThanNine = false;
    if (digits[digits.length -1] + 1 === 10) {
        result.unshift(0);
        moreThanNine = true;
        if (digits.length -1 === 0) {
          result.unshift(1);
        }
    } else {
        result.unshift(digits[digits.length -1] + 1);
    }

    for (let i = digits.length - 2; i >= 0; i--) {
        if (moreThanNine) {
            if (digits[i] + 1 === 10) {
                result.unshift(0);
                moreThanNine = true;
                if (i === 0) {
                    result.unshift(1);
                }
            } else {
                result.unshift(digits[i] + 1);
                moreThanNine = false;
            }
        } else {
            result.unshift(digits[i])
        }
    }

    return result;
}

console.log(plusOne([1,2,3]))
let number = 12345;

function sumOfDigits(num) {
  let digits = num.toString().split("");
  function sum(index) {
    if (index === 0) {
      return +digits[index];
    } else {
      return +digits[index] + sum(index - 1);
    }
  }

  return sum(digits.length - 1);
}

console.log(sumOfDigits(number));
console.log(sumOfDigits(321));
console.log(sumOfDigits(40007));

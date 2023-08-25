function findGCD(num1, num2) {
  if (num2 === 0) return num1;

  let remainder = num1 % num2;
  num1 = num2;

  return findGCD(num1, remainder);
}

console.log(findGCD(270, 192));
console.log(findGCD(48, 18));
console.log(findGCD(48, 0));
console.log(findGCD(0, 48));

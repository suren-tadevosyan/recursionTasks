function factorial(num) {
  return num <= 1 ? num : num * factorial(num - 1);
}

console.log(factorial(4));

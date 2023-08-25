function fakePow(num, exp) {
  if (exp === 0) {
    return 1;
  }

  return exp <= 1 ? num : num * fakePow(num, exp - 1);
}

console.log(fakePow(2, 3));
console.log(fakePow(2, 5));
console.log(fakePow(3, 5));
console.log(fakePow(2, 0));
console.log(fakePow(15, 1.5));

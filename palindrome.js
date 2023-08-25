function palindrome(str) {
  function check(index) {
    if (index === 0) {
      return str[0];
    }

    return str[index] + check(index - 1);
  }
  return check(str.length - 1) === str;
}
console.log(palindrome("racecar"));
console.log(palindrome("hello"));

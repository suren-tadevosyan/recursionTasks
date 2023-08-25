let arr = [1, 2, 3, 4, 5];

function arraySum(arr) {
  function sum(index) {
    if (index === 0) {
      return arr[0];
    }

    return arr[index] + sum(index - 1);
  }

  return sum(arr.length - 1);
}

console.log(arraySum(arr));

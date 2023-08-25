const numbers = [2, 3, 4, 2, 5, 2, 6, 2];

function countOccurrences(arr, num) {
  let count = 0;
  function find(index) {
    if (arr[index] === num) {
      count++;
    }
    return index === 0 ? count : find(index - 1);
  }

  return find(arr.length - 1);
}

console.log(countOccurrences(numbers, 2));

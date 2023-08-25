const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
function binarySearch(arr, elem, min = 0, max = arr.length - 1) {
  if (min > max) {
    return -1;
  }

  let middle = Math.floor((max + min) / 2);
  if (arr[middle] === elem) {
    return middle;
  } else if (arr[middle] < elem) {
    return binarySearch(arr, elem, middle + 1, max);
  } else {
    return binarySearch(arr, elem, min, middle - 1);
  }
}

console.log(binarySearch(sortedArray, 9));
console.log(binarySearch(sortedArray, 111));

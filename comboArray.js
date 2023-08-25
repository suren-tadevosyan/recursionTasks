const inputArray = [1, 2, 3, 4];

function generateCombinations(arr, num) {
  const combos = [];
  function findCombos(ind, elem) {
    if (elem.length === num) {
      combos.push([...elem]);
      return;
    }

    for (let j = ind; j < arr.length; j++) {
      elem.push(arr[j]);
      findCombos(ind + 1, elem);
      elem.pop();
    }
  }

  findCombos(0, []);
  return combos;
}

console.log(generateCombinations(inputArray, 1));
console.log(generateCombinations(inputArray, 2));

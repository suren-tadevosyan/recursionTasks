function fakeFlat(arr) {
  let flat = [];

  for (let sub of arr) {
    if (Array.isArray(sub)) {
      flat.push(...fakeFlat(sub));
    } else {
      flat.push(sub);
    }
  }

  return flat;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(fakeFlat(nestedArray));

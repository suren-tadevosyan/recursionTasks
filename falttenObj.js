const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

function flattenObj(obj) {
  const flatObj = {};

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val !== "object") {
      flatObj[key] = val;
    } else {
      let innerObj = flattenObj(val);
      for (let [innerKey, innerVal] of Object.entries(innerObj)) {
        flatObj[key + "." + innerKey] = innerVal;
      }
    }
  }
  //   console.log(flatObj);
  return flatObj;
}

const flattenedObject = flattenObj(nestedObject);
console.log(flattenedObject);

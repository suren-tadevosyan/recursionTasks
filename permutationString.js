function permutation(str) {
  let permutations = [];
  let word = str.toString().split("");

  function chars(ind, word) {
    if (ind === word.length) {
      permutations.push(word.slice());
      return;
    }

    for (let j = ind; j < word.length; j++) {
      [word[ind], word[j]] = [word[j], word[ind]];
      chars(ind + 1, word);
      [word[ind], word[j]] = [word[j], word[ind]];
    }
  }
  chars(0, word);
  console.log(permutations.length);
  return permutations;
}

console.log(permutation("hello"));

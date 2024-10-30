function linearSearch(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
    }
  }
  return index;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3));

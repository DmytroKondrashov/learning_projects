function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1
  }
  if (arr.length === 1) {
    return arr[0] === target ? 0 : -1;
  }
  let index = 0
  const middleIndex = Math.floor(arr.length / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }
  if (arr[middleIndex] < target) {
    return binarySearch(arr.slice(middleIndex + 1), target);
  } else {
    return binarySearch(arr.slice(0, middleIndex), target);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

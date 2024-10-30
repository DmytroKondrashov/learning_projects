function bubbleSort(arr) {
  let swapped = false
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true
    }
  }
  if (swapped) {
    bubbleSort(arr);
  }
  return(arr);
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length -1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i])
      } else {
          right.push(arr[i])
      }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

var mergeTwoLists = function(list1, list2) {
  return quickSort(list1.concat(list2))
};
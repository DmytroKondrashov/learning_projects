// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
  for (let i = 0; i < head.length; i++) {
      if (head[i + 1] === head[i]) {
          head = [...head.slice(0, i), ...head.slice(i+1)]
      }
  }
  return head;
};

console.log(deleteDuplicates([1,1,2,3,3]))
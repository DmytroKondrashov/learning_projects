// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(p, q) {
  if (p.length !== q.length) {
    return false;
  }
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) {
      return false;
    }
  }
  return true;
};

console.log(isSameTree([1,2], [1,null,2]));